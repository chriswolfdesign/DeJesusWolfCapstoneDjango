/**
 * main.js
 *
 * Acts as the HTML injector for our web application
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import { BoardOptions } from '../model/enums/BoardOptions';
import { Controller } from '../controller/Controller';
import { Model } from '../model/Model';
import interact from 'interactjs';
import { Project } from '../model/Project';
import { TaskCard } from '../model/TaskCard';
import { ConditionOfSatisfaction } from '../model/ConditionOfSatisfaction';

let controller: Controller;  // I really don't like that this is global, let's look into other options

// Behavior when the application is started
window.onload = function (): void {
  controller = new Controller('');
  var data = JSON.parse((<HTMLInputElement>document.getElementById("userdata")).value);
  var decision = '';
  if (data.title === '') {
    while (decision === '') {
      decision = prompt('Please enter the name of your project: ');
    }
    data.title = decision;
  }
  controller.loadProject(data);
  render(controller);

}; // end window.onload

/**
 * Highlights the button for the board that is current open
 *
 * @param {Controller} controller -- the controller of the application
 */
function highlightCurrentBoard(controller: Controller): void {
  let boardID = 'board' + controller.getModel().getProjects().getActiveBoardIndex().toString();

  document.getElementById(boardID).style.color = 'white';
  document.getElementById(boardID).style.backgroundColor = 'black';
  document.getElementById(boardID).style.textDecoration = 'underline';
} // end highlightCurrentBoard

/**
 * Adds the event listener to each of the buttons as they are rendered
 *
 * @param {Controller} controller -- the controller holding each of the buttons
 */
function addClickListeners(controller: Controller): void {
  let tasks: TaskCard[] = controller.getModel().getProjects().getTasks();

  // generate the add button listeners
  for (let i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
    let buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getLabel() + 'AddButton';
    document.getElementById(buttonID).addEventListener('click', function
      (event) {
      let newTaskTitle = '';

      while (newTaskTitle === '') {
        newTaskTitle = prompt('New task text');
      }

      controller.getModel().getProjects().generateTaskCard(i, newTaskTitle);
      controller.setEditableTaskCard(controller.getNewestTaskCard().getLabel());
      render(controller);
    }); // end Event Listener
  } // end for

  // Add button for editting text
  tasks.forEach(task => {
    let taskID: string = task.getLabel() + 'TextField';
    document.getElementById(taskID).addEventListener('click', function (event) {
      controller.setEditableTaskCard(task.getLabel());
      render(controller);
    }); // end eventListener
  }); // end forEach

  // Add button for removing text
  tasks.forEach(task => {
    let taskID: string = task.getLabel() + 'RemoveButton';
    document.getElementById(taskID).addEventListener('click', function (event) {
      let choice = confirm('Delete this task card?');
      if (choice) {
        controller.removeTaskCard(task.getLabel());
        render(controller);
      } // end if
    }); // end eventListener
  }); // end forEach

  // add functionality for the editable task card's cancel button
  document.getElementById('editable-task-card-cancel-button').
    addEventListener('click', function (event) {
      controller.removeEditableTaskCard();
      render(controller);
    });

  // add functionality for the editable task card's submit button
  document.getElementById('editable-task-card-submit-button').
    addEventListener('click', function (event) {
      let newText: string = (<HTMLInputElement>document.
        getElementById('editable-task-card-description')).value;

      if (newText !== '') {
        controller.editTaskText(controller.getEditableTaskCard().getLabel(),
          newText);
      } // end if

      let conditions: ConditionOfSatisfaction[] = controller.
        getEditableTaskCard().getConditionsOfSatisfaction();

      let completedArray: boolean[] = [];

      for (let i = 0; i < conditions.length; i++) {
        completedArray.push((<HTMLInputElement>document.getElementById
          ('condition' + i)).checked);
      } // end for

      controller.setConditions(completedArray);

      controller.removeEditableTaskCard();
      render(controller);
    });

  // add functionality to the cos-remove-buttons in the editable task card
  if (controller.getEditableTaskCard() !== null) {
    for (let i = 0; i < controller.getEditableTaskCard().getConditionsOfSatisfaction().length; i++) {
      document.getElementById('cos-delete-button' + i).
        addEventListener('click', function (event) {
          controller.getEditableTaskCard().removeConditionOfSatisfaction(i);
          render(controller);
        }); // end event listener
    } // end for
  }


  // when the enter button is clicked in the satisfaction enter text box
  document.getElementById('new-condition').addEventListener('keyup',
    function (event) {
      let newConditionText = (<HTMLInputElement>document.getElementById(
        'new-condition')).value;
      if (event.keyCode === 13) {
        controller.getEditableTaskCard().addConditionOfSatisfaction(
          newConditionText);
        render(controller);
      } // end if
    }); // end for

  // allows us to change the active board based on user preference via click
  for (let i = 0; i < controller.getModel().getProjects().getBoards().length;
    i++) {
    let boardID = 'board' + i.toString();
    document.getElementById(boardID).addEventListener('click', function (event) {
      controller.getModel().getProjects().setActiveBoardIndex(i);
      render(controller);
    });
  } // end for


  document.getElementById("go-forward").addEventListener('click', function (event) {
    versionControl('f');
  });

  document.getElementById("go-back").addEventListener('click', function (event) {
    versionControl('b');

  });

  function versionControl(option: string) {
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let version = (<HTMLInputElement>document.getElementById('version')).value;
    $.ajax({
      url: "vc",
      type: "get",
      data: {
        username: username,
        version: version,
        request: option
      },
      success: function (response) {
        var old_project: Project = <Project>JSON.parse((<string>response.data));
        controller.loadProject(old_project);
        render(controller);
        $("userdata").val(response.data);
        $("#version").val(response.version);
      },
      error: function (xhr) {
        let version: string;
        if (option == 'f') {
          version = 'next';
        } else {
          version = 'previous';
        }
        alert("Was unable to retrieve " + version + " version");
      }
    });
  }


  // allows us to save unto the cloud
  document.getElementById("save-cloud").addEventListener('click', function (event) {
    var data = JSON.stringify(controller.getModel().getProjects());
    (<HTMLInputElement>document.getElementById("userdata")).value = data;
    $("#userdata").trigger('change');
  });


  // allows us to save the current instance of the project onto our local file system
  document.getElementById("save").addEventListener('click', function (event) {
    var temp = controller;
    var name = prompt("Enter the file name:");
    var data = JSON.stringify(controller.getModel().getProjects());
    var blob = new Blob([data], { type: 'text/plain' });
    var e = document.createEvent('MouseEvents'), a = document.createElement('a');
    a.download = name + ".json";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false);
    a.dispatchEvent(e);
  });

  // allows us to load an instance of the project from our local file system
  document.getElementById("submit").addEventListener('click', function (event) {
    let file = (<HTMLInputElement>document.getElementById("file-input")).files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (event) {
        var new_project: Project = <Project>JSON.parse((<string>event.target.result));
        controller.loadProject(new_project);
        render(controller);
      };
      reader.onerror = function (event) {
        alert("Error reading file.");
      };
    }
  });

  // toggle the visibility of the board menu
  document.getElementById('boardMenuToggleButtonHide').addEventListener('click', function (event) {
    controller.getView().toggleBoardMenuVisibility();
    render(controller);
    document.getElementById('boardMenuToggleButtonShow').style.visibility = 'visible';
  });

  document.getElementById('boardMenuToggleButtonShow').addEventListener('click', function (event) {
    controller.getView().toggleBoardMenuVisibility();
    render(controller);
    document.getElementById('boardMenuToggleButtonShow').style.visibility = 'hidden';
  })
} // end addClickListeners

/**
 * Allows us to toggle the visibility of the Board Menu
 *
 * @param {Controller} controller -- controller for the application
 */
function changeBoardMenuVisibility(controller: Controller) {
  if (controller.getView().getIsBoardMenuVisibile()) {
    document.getElementById('boardButtons').style.visibility = 'visible';
  } // end if
  else {
    document.getElementById('boardButtons').style.visibility = 'hidden';
  } // end else
} // end changeBoardMenuVisibility


function changeEditableTaskCardVisibility(controller) {
  if (controller.getEditableTaskCard() !== null) {
    document.getElementById('editable-task-card').style.visibility = 'visible';
    document.getElementById('editable-task-card-description').focus();
    setConditionsChecked(controller);
  } else {
    document.getElementById('editable-task-card').style.visibility = 'hidden';
  }
} // end changeEditableTaskCardVisibility

/**
 * Updates the size based on whether or not the board menu is visible
 * 
 * @param {Controller} controller -- the controller holding the current board
 */
function setCurrentBoardSize(controller: Controller) {
  // Update styles
  if (controller.getView().getIsBoardMenuVisibile()) {
    document.getElementById('boardButtons').style.width = '20%';
    document.getElementById('currentBoard').style.width = '79%';
    document.getElementById('currentBoard').style.marginLeft = '21%';
  }  // end if
  else {
    document.getElementById('boardButtons').style.width = '1%';
    document.getElementById('currentBoard').style.width = '98%';
  } // end else
} // end setCurrentBoardSize

/**
 * 
 * 
 * @param controller the controller in charge of editting the model
 */
function setConditionsChecked(controller: Controller) {
  let conditions = controller.getEditableTaskCard().
    getConditionsOfSatisfaction();

  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i].isComplete()) {
      (<HTMLInputElement>document.getElementById('condition' + i)).checked =
        true;
    } else {
      (<HTMLInputElement>document.getElementById('condition' + i)).checked =
        false;
    }
  }
}

/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller: Controller): void {
  document.getElementById('main').innerHTML = controller.generateHTML();
  addClickListeners(controller);
  highlightCurrentBoard(controller);
  changeBoardMenuVisibility(controller);
  changeEditableTaskCardVisibility(controller);
  setCurrentBoardSize(controller);
} // end render

// Set up interact
interact('.draggable').draggable({
  inertia: true,
  autoscroll: true,
  onmove: dragMoveListener,
  onend: dropped
}); // end interact-draggable

interact('.dropzone').dropzone({
  accept: '.draggable',
  overlap: 0.5,
  ondrop: function (event) {
    controller.moveTaskCard(event.target, event.relatedTarget);
    render(controller);
  }, // end ondrop
  ondragenter: function (event) {
    event.target.style.border = '5px solid white';
  }, // end ondragenter
  ondragleave: function (event) {
    event.target.style.border = '5px solid black';
  } // end ondragleave
}); // end interact-dropzone

/**
 * Describes what to do when a task card is being dragged
 *
 * @param {event} event -- the drag motion we are using to define movement
 */
function dragMoveListener(event) {
  let target = event.target;
  let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + + y +
    'px)';

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);

} // end dragMoveListener

/**
 * Describes what to do when a task card is dropped
 */
function dropped(): void {
  render(controller);
} // end dropped
