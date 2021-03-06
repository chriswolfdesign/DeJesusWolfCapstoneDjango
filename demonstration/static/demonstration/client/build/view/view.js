"use strict";
/**
 * View.ts
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */
exports.__esModule = true;
var View = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    function View() {
        this.isBoardMenuVisible = true;
        this.editableTaskCard = null;
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * returns whether or not the board is currently visible
     * @return true if the board is visible, false otherwise
     */
    View.prototype.getIsBoardMenuVisible = function () {
        return this.isBoardMenuVisible;
    }; // end getIsBoardMenuVisible
    /**
     * Gets the task card currently being editted
     * @return the task card currently being editted
     */
    View.prototype.getEditableTaskCard = function () {
        return this.editableTaskCard;
    }; // end getEditableTaskCard
    /***********
     * Setters *
     ***********/
    /**
     * Sets the current task card being editted
     * @param task the current task card to be editted
     */
    View.prototype.setEditableTaskCard = function (task) {
        this.editableTaskCard = task;
    }; // end setEditableTaskCard
    /**********************
     * Additional methods *
     **********************/
    /**
     * if the board menu is visible, hide it and vice-versa
     */
    View.prototype.toggleBoardMenuVisibility = function () {
        this.isBoardMenuVisible = !this.isBoardMenuVisible;
    }; // end toggleBoardMenuVisibility
    /**
     * generates HTML based on the current model
     * @param model the model we are generating HTML for
     * @return the HTML for model
     */
    View.prototype.generateHTML = function (model) {
        var html = '<div>';
        html += this.generateToolbar(model);
        html += this.generateBodyHTML(model);
        html += this.generateEditableTaskCardHTML();
        html += '</div>';
        return html;
    }; // end generateHTML
    /**
     * generates the html for the edit screen for editting a task card
     * @return the HTML for the edit screen
     */
    View.prototype.generateEditableTaskCardHTML = function () {
        var html = '';
        var label = '';
        var text = '';
        if (this.editableTaskCard !== null) {
            label = this.editableTaskCard.getTitle();
            text = this.editableTaskCard.getText();
        }
        html += '<div id=editable-task-card>';
        html += '<div id=editable-task-card-header>' +
            label + '</div>';
        html += '<textarea id=editable-task-card-description placeholder="'
            + text + '"></textarea>';
        html += '<br/>';
        html += this.getConditionsOfSatisfactionHTML();
        html += '<br/>';
        html += '<button id=editable-task-card-cancel-button type=button' +
            '>Cancel</button>';
        html += '<button id=editable-task-card-submit-button type=button' +
            '>Submit</button>';
        html += '</div>';
        return html;
    }; // end generateEditableTaskCard
    /**
     * Generates the HTML for the conditions of satisfaction
     * @return the HTML for the conditions of satisfaction
     */
    View.prototype.getConditionsOfSatisfactionHTML = function () {
        var conditionStats = '0/0';
        if (this.editableTaskCard !== null) {
            conditionStats = this.editableTaskCard.getConditionsStats();
        } // end if
        var html = '<div id=conditions-of-satisfaction-header>';
        html += 'Conditions Of Satisfaction ';
        html += conditionStats;
        html += '</div>';
        // add each of the conditions of satisfaction
        if (this.editableTaskCard !== null) {
            for (var i = 0; i < this.editableTaskCard.getNumberOfConditions(); i++) {
                html += '<div>';
                html += '<input id=condition' + i + ' type=checkbox></input>';
                html += this.editableTaskCard.getConditionsOfSatisfaction()[i].
                    getText();
                html += '<button class=cos-delete-button id=cos-delete-button' + i + '>X</button>';
                html += '</div>';
            } // end for
        } // end if
        html += '<input id=new-condition type=text></input>';
        return html;
    }; // end getConditionsOfSatisfactionHTML
    /**
     * generates the toolbar HTML
     * @return the html for the toolbar
     */
    View.prototype.generateToolbar = function (model) {
        var html = '<div id=toolbar>';
        html += this.generateSaveLoadButtons();
        html += '<div id=toolbar-text>' + model.getProjects().getActiveBoard().getTitle() + '</div>';
        html += '</div>';
        return html;
    }; // end generateToolbar
    /**
     * generates the save and load button HTML
     * @return the html for the save and load buttons
     */
    View.prototype.generateSaveLoadButtons = function () {
        var html = '<div id=save-load-buttons>';
        html += '<button id=save> Save </button>';
        html += '<input id=file-input type=\'file\' name=\'test\'/>';
        html += '<button id=submit> Submit </button>';
        html += '</div>';
        return html;
    }; // end generateSaveLoadButtons
    /**
     * generates the header based on the current model
     * @param model the model we are generating the header HTML for
     * @return the HTML for the header of the model
     */
    View.prototype.generateHeaderHTML = function (model) {
        var html = '<h1 id=header>';
        html += '<u>';
        html += model.getProjects().getActiveBoard().getTitle();
        html += '</u></h1>';
        return html;
    }; // end generateHeaderHTML
    /**
     * Generates the body of the application
     * @param model the data structure of the application to be
     *              displayed
     * @return the HTML for the body of the application
     */
    View.prototype.generateBodyHTML = function (model) {
        var html = '<div id=appBody>';
        html += this.generateBoardButtons(model);
        html += this.generateCurrentBoard(model);
        html += '</div>';
        return html;
    }; // end generateBodyHTML
    /**
     * Generates the Board Menu for the application
     * @param model the data structure of the application
     * @return the HTML for the Board Menu
     */
    View.prototype.generateBoardButtons = function (model) {
        var html = '<div id=boardButtons>';
        html += View.generateBoardMenuToggleButtonHide();
        html += '<div id=boardMenuTitle>' + model.getProjects().getTitle() + '</div>';
        var boards = model.getProjects().getBoards();
        for (var i = 0; i < boards.length; i++) {
            html += '<button class=boardButton id=board' + i + '>';
            html += boards[i].getTitle();
            html += '</button>';
            html += '</br>';
        } // end for
        html += '<div id=cloud-vc>';
        html += '<button class=save-vc-button id=save-cloud>Save</button>';
        html += '<div id=vc>';
        html += '<button class=save-vc-button id=go-back><</button>';
        html += '<button class=save-vc-button id=go-forward>></button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }; // end generateBoardButtons
    /**
     * Generates the current board the user is interacting with
     * @param model the data structure of the application
     * @return the HTML for the current board
     */
    View.prototype.generateCurrentBoard = function (model) {
        var html = '<div id=currentBoard>';
        html += View.generateBoardMenuToggleButtonShow();
        html += this.generateListsHTML(model);
        html += '</div>';
        return html;
    }; // end generateCurrentBoard
    /**
     * generates all of the lists inside of the model
     * @param model the model we are displaying the lists for
     * @return the HTML for the lists
     */
    View.prototype.generateListsHTML = function (model) {
        var html = '<div class=lists>';
        // for every list, generate the HTML
        for (var i = 0; i < model.getProjects().getActiveBoard().getLists().length; i++) {
            html += '<div id=\'' + model.getProjects().getActiveBoard().getLists()[i].
                getLabel() + '\' class=\'dropzone list\'>' +
                '<div class=list-header>' +
                '<div class=list-label><u>' +
                model.getProjects().getActiveBoard().getLists()[i].getLabel() +
                '</u></div>' +
                this.generateAddButtonHTML(model.getProjects().getActiveBoard().getLists()[i].getLabel()) +
                '</div>' +
                this.generateIndividualListHTML(model.getProjects().getActiveBoard().
                    getLists()[i], model) +
                '</div>';
        } // end for loop
        return html;
    }; // end generateListsHTML
    /**
     * generates the list passed in
     * @param list the list whose HTML is being generated
     * @return the HTML representation of the given list
     */
    View.prototype.generateIndividualListHTML = function (list, model) {
        var html = '<div>';
        html += this.generateTaskCardsHTML(list, model);
        html += '</div>';
        return html;
    }; // end generateIndividualListHTML
    /**
     * generates the HTML for all of the task cards in a list
     * @param list the list whose task cards we are generating
     * @return the HTML representation of all of the task cards in the
     *         list
     */
    View.prototype.generateTaskCardsHTML = function (list, model) {
        var _this = this;
        var html = '<div>';
        model.getProjects().getTasks().forEach(function (task) {
            if (task.getMoscowStatus() == list.getMoscowStatus() ||
                task.getBacklogStatus() == list.getBacklogStatus()) {
                html += _this.generateIndividualTaskCardHTML(task);
            } // end if
        }); // end for-each
        html += '</div>';
        return html;
    }; // end generateTaskCardsHTML
    /**
     * generates the HTML for an individual task card
     * @param task the task card we are generating HTML for
     * @return the HTML representation of the task card
     */
    View.prototype.generateIndividualTaskCardHTML = function (task) {
        var html = '<div id=\'' + task.getLabel() + '\' class=\'task-card draggable\'>';
        html += '<div>';
        html += '<div id=' + task.getLabel() + 'Label>';
        html += '<div class="task-card-label"><u>' + task.getLabel() + '</u></div>';
        html += this.generateRemoveButtonHTML(task);
        html += '</div>';
        html += '<div class=task-card-text id=' + task.getLabel() + 'TextField>' + task.getTitle() + '</div>';
        html += '</div>';
        html += '<div class=task-card-statuses>';
        html += '<div><b>' + task.getMoscowStatus() + '</b></div>';
        html += '<div><b>' + task.getBacklogStatus() + '</b></div>';
        html += '<div><b>' + task.getConditionsStats() + '</b></div>';
        html += '</div>';
        html += '</div>';
        return html;
    }; // end generateIndividualTaskCardHTML
    /**
     * Generates a remove button for a task card
     * @param task the task card this button should remove when clicked
     * @return the HTML for the remove button
     */
    View.prototype.generateRemoveButtonHTML = function (task) {
        var buttonID = task.getLabel() + 'RemoveButton';
        return '<button id=' + buttonID + ' class=remove-button>' +
            '<i class=\"fa fa-trash-o\"></i></button>';
    }; // end generateRemoveButtonHTML
    /**
     * Generates an add task card button for a list
     * @param parentID the index for the list
     * @return the HTML for the add button
     */
    View.prototype.generateAddButtonHTML = function (parentID) {
        var thisID = parentID + 'AddButton';
        return '<button id=\'' + thisID + '\' class=add-button>+</button>';
    }; // end generateAddButtonHTML
    /**
     * Generates the button for displaying the board menu
     * @return the HTML for the button hiding the board menu
     */
    View.generateBoardMenuToggleButtonShow = function () {
        return '<button id=boardMenuToggleButtonShow>\></button>';
    }; // end generateBoardMenuToggleButtonShow
    /**
     * Generates the button for hiding the board menu
     * @return the HTML for the button displaying the board menu
     */
    View.generateBoardMenuToggleButtonHide = function () {
        return '<button id=boardMenuToggleButtonHide>\<</button>';
    }; // end generateBoardMenuToggleButton
    return View;
}()); // end View
exports.View = View;
