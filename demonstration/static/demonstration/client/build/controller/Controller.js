"use strict";
exports.__esModule = true;
var Model_1 = require("../model/Model");
var view_1 = require("../view/view");
var MoscowStatus_1 = require("../model/enums/MoscowStatus");
var BacklogStatus_1 = require("../model/enums/BacklogStatus");
/**
 * Controller.ts
 *
 * Manages the changes in the model and the view
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 1.0.0 (March 30, 2020)
 */
var Controller = /** @class */ (function () {
    function Controller(projectName) {
        this.projectName = projectName;
        this.model = new Model_1.Model(this, this.projectName);
        this.model.setController(this);
        this.view = new view_1.View();
    } // end constructor
    /**
     * getter for the view field
     *
     * @return {View} view -- the view for the project
     */
    Controller.prototype.getView = function () {
        return this.view;
    }; // end getView
    Controller.prototype.setEditableTaskCard = function (taskLabel) {
        this.view.setEditableTaskCard(this.findTask(taskLabel));
    }; // end setEditableTaskCard
    Controller.prototype.removeEditableTaskCard = function () {
        this.view.setEditableTaskCard(null);
    }; // end removeEditableTaskCard
    Controller.prototype.getEditableTaskCard = function () {
        return this.view.getEditableTaskCard();
    }; // end getEditableTaskCard
    Controller.prototype.getNewestTaskCard = function () {
        var tasks = this.model.getProjects().getTasks();
        return tasks[tasks.length - 1];
    }; // end getNewestTaskCard
    /**
     * calls on the model to create a new board from a template
     *
     * @param option which type of board the user would like
     */
    Controller.prototype.generateBoardTemplate = function (option) {
        this.model.generateBoardTemplate(option);
    }; // end generateBoardTemplate
    /**
     * Changes the text in a task card
     *
     * @param listIndex which list the task card is in
     * @param taskIndex which task card we are changing
     * @param newTaskText the text to change the task card to
     */
    Controller.prototype.editTaskText = function (taskLabel, newText) {
        var tasks = this.model.getProjects().getTasks();
        tasks.forEach(function (task) {
            if (task.getLabel() === taskLabel) {
                task.setText(newText);
                return;
            } // end if
        }); // end forEach
    }; // end editTaskText
    Controller.prototype.setConditions = function (completedArray) {
        for (var i = 0; i < this.getEditableTaskCard().getNumberOfConditions(); i++) {
            if (completedArray[i]) {
                this.getEditableTaskCard().getConditionsOfSatisfaction()[i].
                    setComplete();
            }
            else {
                this.getEditableTaskCard().getConditionsOfSatisfaction()[i].
                    setIncomplete();
            }
        }
    };
    /**
     * removes a board from our model
     *
     * @param {string} boardID the id for the board we are removing
     */
    Controller.prototype.removeBoard = function (boardID) {
        this.model.removeBoard(boardID);
    }; // end removeBoard
    /**
     * generates a list with the specific credentials
     *
     * @param {string} boardID the board to add the list to
     * @param {string} label the label for the new list
     * @param color
     */
    Controller.prototype.generateList = function (boardID, label) {
        this.model.generateList(boardID, label);
    }; // end generateList
    /**
     * removes a list from a board
     *
     * @param {string} boardID the board we are removing a list from
     * @param {string} listID the list we are removing
     */
    Controller.prototype.removeList = function (boardID, listID) {
        this.model.removeList(boardID, listID);
    }; // end removeList
    /**
     * generates a list from a template
     *
     * @param {string} boardID the board we are adding a list to
     * @param {ListOption} option the template we would like to src a list from
     */
    Controller.prototype.generateListTemplate = function (boardID, option) {
        this.model.generateListTemplate(boardID, option);
    }; // end generateListTemplate
    /**
     * generates a task card with the given credentials
     *
     * @param {number} boardID the board we are adding a task card to
     * @param {number} listID the list we are adding a task card to
     * @param {string} label the label for the new task card
     * @param {string} text the text for the new task card
     */
    Controller.prototype.generateTaskCard = function (boardID, listID, label, text) {
        this.model.generateTaskCard(boardID, listID, label, text);
    }; // end generateTaskCard
    /**
     * removes a task card from a list
     *
     * @param {number} listID the list from which we are removing a task card
     * @param {number} taskID -- the ID of the task card we are removing
     */
    Controller.prototype.removeTaskCard = function (taskLabel) {
        this.getModel().getProjects().removeTaskCard(taskLabel);
    };
    /**
     * Moves a task card from one list to another
     *
     * @param {HTML} newList -- the HTML representation of the new list we're moving the task card to
     * @param {HTML} movedTaskCard -- the HTML representation of the task card we're moving
     */
    Controller.prototype.moveTaskCard = function (newList, movedTaskCard) {
        var list = this.findList(newList.id);
        var task = this.findTask(movedTaskCard.id);
        if (list.getMoscowStatus() != MoscowStatus_1.MoscowStatus.NONE) {
            task.setMoscowStatus(list.getMoscowStatus());
        } // end if
        if (list.getBacklogStatus() != BacklogStatus_1.BacklogStatus.NONE) {
            task.setBacklogStatus(list.getBacklogStatus());
        } // end if
    }; // end moveTaskCard
    /**
     * Finds a list in the current board given the list's label
     *
     * @param listLabel the label for the list we're looking for
     *
     * @return the list we're looking for
     */
    Controller.prototype.findList = function (listLabel) {
        var lists = this.model.getProjects().getActiveBoard().getLists();
        for (var i = 0; i < lists.length; i++) {
            if (lists[i].getLabel() === listLabel) {
                return lists[i];
            } // end if
        } // end for
    }; // end findList
    /**
     * Finds a task card in the project by its id
     *
     * @param taskID the id of the task we're looking for
     *
     * @return the task card we're looking for
     */
    Controller.prototype.findTask = function (taskLabel) {
        var tasks = this.model.getProjects().getTasks();
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].getLabel() === taskLabel) {
                return tasks[i];
            } // end if
        } // end for
    }; // end findTask
    /**
     * Gets the board indices of the task card we are looking for
     *
     * @param {string} taskID -- the label of the task card we are looking for
     *
     * @return {list} -- [the list index of the task card, the task index of the task card]
     */
    Controller.prototype.getTaskIndices = function (taskID) {
        for (var i = 0; i < this.model.getProjects().getActiveBoard().getLists().length; i++) {
            for (var j = 0; j < this.model.getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
                if (taskID === this.model.getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel()) {
                    return [i, j];
                } // end if
            } // end inner-for
        } // end outer-for
    }; // end getTaskIndices
    /**
     * Gets the data held inside the task card
     * @param listIndex -- the list index we are looking for
     * @param taskIndex -- the task index we are looking for
     *
     * @return {list} -- [task card's label, task card's text]
     */
    Controller.prototype.getTaskData = function (listIndex, taskIndex) {
        return [this.model.getProjects().getActiveBoard().getLists()[listIndex].getTasks()[taskIndex].getLabel(),
            this.model.getProjects().getActiveBoard().getLists()[listIndex].getTasks()[taskIndex].getText()];
    }; // end getTaskData
    /**
     * getter for model
     *
     * @return {Model} the model this controller controls
     */
    Controller.prototype.getModel = function () {
        return this.model;
    }; // end getModel
    /**
     * Calls the view class to generate HTML based on the given model
     *
     * @return {String} html based off of model
     */
    Controller.prototype.generateHTML = function () {
        return this.view.generateHTML(this.model);
    }; // end generateHTML
    /**
     * Sets the values within model to the values loaded from a JSON file.
     *
     * @param {Model} model the board we are trying to load into model
     */
    Controller.prototype.loadProject = function (project) {
        this.model.loadProject(project);
    }; // end loadProject
    return Controller;
}()); // end Controller
exports.Controller = Controller;
