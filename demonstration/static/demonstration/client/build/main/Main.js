"use strict";
/**
 * main.js
 *
 * Acts as the HTML injector for our web application
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var Controller_1 = require("../controller/Controller");
var interactjs_1 = require("interactjs");
var controller; // I really don't like that this is global, let's look into other options
// Behavior when the application is started
window.onload = function () {
    controller = new Controller_1.Controller('');
    var data = JSON.parse(document.getElementById("userdata").value);
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
 * @param controller the controller of the application
 */
function highlightCurrentBoard(controller) {
    var boardID = 'board' + controller.getModel().getProjects().getActiveBoardIndex().toString();
    document.getElementById(boardID).style.color = 'white';
    document.getElementById(boardID).style.backgroundColor = 'black';
    document.getElementById(boardID).style.textDecoration = 'underline';
} // end highlightCurrentBoard
/**
 * Adds the event listener to each of the buttons as they are rendered
 * @param controller the controller holding each of the buttons
 */
function addClickListeners(controller) {
    var tasks = controller.getModel().getProjects().getTasks();
    var _loop_1 = function (i) {
        var buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getLabel() + 'AddButton';
        document.getElementById(buttonID).addEventListener('click', function (event) {
            var newTaskTitle = '';
            while (newTaskTitle === '') {
                newTaskTitle = prompt('New task text');
            }
            controller.getModel().getProjects().generateTaskCard(i, newTaskTitle);
            controller.setEditableTaskCard(controller.getNewestTaskCard().getLabel());
            render(controller);
        }); // end Event Listener
    };
    // generate the add button listeners
    for (var i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
        _loop_1(i);
    } // end for
    // Add button for editting text
    tasks.forEach(function (task) {
        var taskID = task.getLabel() + 'TextField';
        document.getElementById(taskID).addEventListener('click', function (event) {
            controller.setEditableTaskCard(task.getLabel());
            render(controller);
        }); // end eventListener
    }); // end forEach
    // Add button for removing text
    tasks.forEach(function (task) {
        var taskID = task.getLabel() + 'RemoveButton';
        document.getElementById(taskID).addEventListener('click', function (event) {
            var choice = confirm('Delete this task card?');
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
        var newText = document.
            getElementById('editable-task-card-description').value;
        if (newText !== '') {
            controller.editTaskText(controller.getEditableTaskCard().getLabel(), newText);
        } // end if
        var conditions = controller.
            getEditableTaskCard().getConditionsOfSatisfaction();
        var completedArray = [];
        for (var i = 0; i < conditions.length; i++) {
            completedArray.push(document.getElementById('condition' + i).checked);
        } // end for
        controller.setConditions(completedArray);
        controller.removeEditableTaskCard();
        render(controller);
    });
    // add functionality to the cos-remove-buttons in the editable task card
    if (controller.getEditableTaskCard() !== null) {
        var _loop_2 = function (i) {
            document.getElementById('cos-delete-button' + i).
                addEventListener('click', function (event) {
                controller.getEditableTaskCard().removeConditionOfSatisfaction(i);
                render(controller);
            }); // end event listener
        };
        for (var i = 0; i < controller.getEditableTaskCard().getConditionsOfSatisfaction().length; i++) {
            _loop_2(i);
        } // end for
    }
    // when the enter button is clicked in the satisfaction enter text box
    document.getElementById('new-condition').addEventListener('keyup', function (event) {
        var newConditionText = document.getElementById('new-condition').value;
        if (event.keyCode === 13) {
            controller.getEditableTaskCard().addConditionOfSatisfaction(newConditionText);
            render(controller);
        } // end if
    }); // end for
    var _loop_3 = function (i) {
        var boardID = 'board' + i.toString();
        document.getElementById(boardID).addEventListener('click', function (event) {
            controller.getModel().getProjects().setActiveBoardIndex(i);
            render(controller);
        });
    };
    // allows us to change the active board based on user preference via click
    for (var i = 0; i < controller.getModel().getProjects().getBoards().length; i++) {
        _loop_3(i);
    } // end for
    document.getElementById("go-forward").addEventListener('click', function (event) {
        versionControl('f');
    });
    document.getElementById("go-back").addEventListener('click', function (event) {
        versionControl('b');
    });
    /**
     * Controls which version is current being displayed to the user
     * @param option name of the "version" the user would like displayed
     */
    function versionControl(option) {
        var username = document.getElementById('username').value;
        var version = document.getElementById('version').value;
        $.ajax({
            url: "vc",
            type: "get",
            data: {
                username: username,
                version: version,
                request: option
            },
            success: function (response) {
                var old_project = JSON.parse(response.data);
                controller.loadProject(old_project);
                render(controller);
                $("userdata").val(response.data);
                $("#version").val(response.version);
            },
            error: function (xhr) {
                var version;
                if (option == 'f') {
                    version = 'next';
                }
                else {
                    version = 'previous';
                }
                alert("Was unable to retrieve " + version + " version");
            }
        });
    }
    // allows us to save unto the cloud
    document.getElementById("save-cloud").addEventListener('click', function (event) {
        var data = JSON.stringify(controller.getModel().getProjects());
        document.getElementById("userdata").value = data;
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
        var file = document.getElementById("file-input").files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (event) {
                var new_project = JSON.parse(event.target.result);
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
    });
} // end addClickListeners
/**
 * Allows us to toggle the visibility of the Board Menu
 * @param controller controller for the application
 */
function changeBoardMenuVisibility(controller) {
    if (controller.getView().getIsBoardMenuVisible()) {
        document.getElementById('boardButtons').style.visibility = 'visible';
    } // end if
    else {
        document.getElementById('boardButtons').style.visibility = 'hidden';
    } // end else
} // end changeBoardMenuVisibility
/**
 * Toggles whether or not the edittable task card is displayed to the user
 * @param controller the controller responsible for the project
 */
function changeEditableTaskCardVisibility(controller) {
    if (controller.getEditableTaskCard() !== null) {
        document.getElementById('editable-task-card').style.visibility = 'visible';
        document.getElementById('editable-task-card-description').focus();
        setConditionsChecked(controller);
    } // end if
    else {
        document.getElementById('editable-task-card').style.visibility = 'hidden';
    } // end if-else
} // end changeEditableTaskCardVisibility
/**
 * Updates the size based on whether or not the board menu is visible
 * @param controller the controller holding the current board
 */
function setCurrentBoardSize(controller) {
    // Update styles
    if (controller.getView().getIsBoardMenuVisible()) {
        document.getElementById('boardButtons').style.width = '20%';
        document.getElementById('currentBoard').style.width = '79%';
        document.getElementById('currentBoard').style.marginLeft = '21%';
    } // end if
    else {
        document.getElementById('boardButtons').style.width = '1%';
        document.getElementById('currentBoard').style.width = '98%';
    } // end else
} // end setCurrentBoardSize
/**
 * sets all of the conditions of satisfaction be able to be toggled between comple
 * and incomplete
 * @param controller the controller in charge of editting the model
 */
function setConditionsChecked(controller) {
    var conditions = controller.getEditableTaskCard().
        getConditionsOfSatisfaction();
    for (var i = 0; i < conditions.length; i++) {
        if (conditions[i].isComplete()) {
            document.getElementById('condition' + i).checked =
                true;
        } // end if
        else {
            document.getElementById('condition' + i).checked =
                false;
        } // end else
    } // end for
} // end setConditionsChecked
/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 * @param controller responsible for generating the HTML
 */
function render(controller) {
    document.getElementById('main').innerHTML = controller.generateHTML();
    addClickListeners(controller);
    highlightCurrentBoard(controller);
    changeBoardMenuVisibility(controller);
    changeEditableTaskCardVisibility(controller);
    setCurrentBoardSize(controller);
} // end render
// Set up interact draggables (task cards)
interactjs_1["default"]('.draggable').draggable({
    inertia: true,
    autoscroll: true,
    onmove: dragMoveListener,
    onend: dropped
}); // end interact-draggable
// set up interact dropzones (lists)
interactjs_1["default"]('.dropzone').dropzone({
    accept: '.draggable',
    overlap: 0.5,
    ondrop: function (event) {
        controller.moveTaskCard(event.target, event.relatedTarget);
        render(controller);
    },
    ondragenter: function (event) {
        event.target.style.border = '5px solid white';
    },
    ondragleave: function (event) {
        event.target.style.border = '5px solid black';
    } // end ondragleave
}); // end interact-dropzone
/**
 * Describes what to do when a task card is being dragged
 * @param event the drag motion we are using to define movement
 */
function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + +y +
        'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
} // end dragMoveListener
/**
 * Describes what to do when a task card is dropped
 */
function dropped() {
    render(controller);
} // end dropped
