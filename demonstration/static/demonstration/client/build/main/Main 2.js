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
    var decision = '';
    while (decision === '') {
        decision = prompt('What is the name of your project? ');
    }
    controller = new Controller_1.Controller(decision);
    render(controller);
}; // end window.onload
/**
 * Highlights the button for the board that is current open
 *
 * @param {Controller} controller -- the controller of the application
 */
function highlightCurrentBoard(controller) {
    if (controller.getView().getIsBoardMenuVisibile()) {
        var boardID = 'board' + controller.getModel().getProjects().getActiveBoardIndex().toString();
        document.getElementById(boardID).style.color = 'white';
        document.getElementById(boardID).style.backgroundColor = 'black';
    }
} // end highlightCurrentBoard
/**
 * Adds the event listener to each of the buttons as they are rendered
 *
 * @param {Controller} controller -- the controller holding each of the buttons
 */
function addClickListeners(controller) {
    var _loop_1 = function (i) {
        var buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getLabel() + 'AddButton';
        document.getElementById(buttonID).addEventListener('click', function (event) {
            var newTaskText = prompt('Please enter the new task text: ');
            controller.getModel().getProjects().generateTaskCard(i, newTaskText);
            render(controller);
        }); // end Event Listener
    };
    // generate the add button listeners
    for (var i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
        _loop_1(i);
    } // end for
    var _loop_2 = function (i) {
        var _loop_5 = function (j) {
            var taskID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel() + 'TextField';
            document.getElementById(taskID).addEventListener('click', function (event) {
                var newTaskText = prompt('Please enter the new text', controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getText());
                controller.editTaskText(i, j, newTaskText);
                render(controller);
            }); // end Event Listener
        };
        for (var j = 0; j < controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
            _loop_5(j);
        } // end for each task
    };
    // generate the listeners for editting task cards
    for (var i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
        _loop_2(i);
    } // end for each list
    var _loop_3 = function (i) {
        var _loop_6 = function (j) {
            var buttonID = controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel() + 'RemoveButton';
            document.getElementById(buttonID).addEventListener('click', function (event) {
                var choice = confirm('Delete this task card?');
                if (choice) {
                    controller.removeTaskCard(i, j);
                    render(controller);
                } // end if
            }); // end buttonID
        };
        for (var j = 0; j < controller.getModel().getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
            _loop_6(j);
        } // end inner for loop
    };
    // generate the listener for removing task cards
    for (var i = 0; i < controller.getModel().getProjects().getActiveBoard().getLists().length; i++) {
        _loop_3(i);
    } // end outer for loop
    // allows us to change the active board based on user preference via click
    if (controller.getView().getIsBoardMenuVisibile()) {
        var _loop_4 = function (i) {
            var boardID = 'board' + i.toString();
            document.getElementById(boardID).addEventListener('click', function (event) {
                controller.getModel().getProjects().setActiveBoardIndex(i);
                render(controller);
            });
        };
        for (var i = 0; i < controller.getModel().getProjects().getBoards().length; i++) {
            _loop_4(i);
        }
    }
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
    document.getElementById('boardMenuToggleButton').addEventListener('click', function (event) {
        controller.getView().toggleBoardMenuVisibility();
        render(controller);
    });
} // end addClickListeners
/**
 * Allows us to toggle the visibility of the Board Menu
 *
 * @param {Controller} controller -- controller for the application
 */
function changeBoardMenuVisibility(controller) {
    if (controller.getView().getIsBoardMenuVisibile()) {
        document.getElementById('boardButtons').style.visibility = 'visible';
    } // end if
    else {
        document.getElementById('boardButtons').style.visibility = 'hidden';
    } // end else
} // end changeBoardMenuVisibility
function setCurrentBoardSize(controller) {
    // Update styles
    if (controller.getView().getIsBoardMenuVisibile()) {
        document.getElementById('currentBoard').style.width = '75%';
    } // end if
    else {
        document.getElementById('currentBoard').style.width = '100%';
        document.getElementById('currentBoard').style.marginLeft = '10vh';
    } // end else
} // end setCurrentBoardSize
/**
 * Causes the HTML to be drawn, or redrawn, to the screen
 *
 * @param {Controller} controller responsible for generating the HTML
 */
function render(controller) {
    document.getElementById('main').innerHTML = controller.generateHTML();
    addClickListeners(controller);
    highlightCurrentBoard(controller);
    // changeBoardMenuVisibility(controller);
    setCurrentBoardSize(controller);
} // end render
// Set up interact
interactjs_1["default"]('.draggable').draggable({
    inertia: true,
    autoscroll: true,
    onmove: dragMoveListener,
    onend: dropped
}); // end interact-draggable
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
 *
 * @param {event} event -- the drag motion we are using to define movement
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
