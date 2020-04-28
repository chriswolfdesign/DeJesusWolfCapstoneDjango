"use strict";
/**
 * List.ts
 *
 * The class that behaves as a List on our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var TaskCard_1 = require("../TaskCard");
var List = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    /**
     * Generates the List object
     * @param label the label for the this list
     * @param moscowStatus the Moscow status of this list
     * @param backlogStatus the Backlog status of this list
     */
    function List(label, moscowStatus, backlogStatus) {
        this.label = label;
        this.tasks = [];
        this.moscowStatus = moscowStatus;
        this.backlogStatus = backlogStatus;
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Getter for the label
     * @return the label of this list
     */
    List.prototype.getLabel = function () {
        return this.label;
    }; // end getLabel
    /**
     * Getter for the task cards
     * @return task cards for this list
     */
    List.prototype.getTasks = function () {
        return this.tasks;
    }; // end getTasks
    /**
     * Getter for the MoscowStatus
     * @return the Moscow status of this list
     */
    List.prototype.getMoscowStatus = function () {
        return this.moscowStatus;
    }; // end getMoscowStatus
    /**
     * Getter for the BacklogStatus
     * @return the Backlog status of this list
     */
    List.prototype.getBacklogStatus = function () {
        return this.backlogStatus;
    }; // end getBacklogStatus
    /***********
     * Setters *
     ***********/
    /**
     * Sets the label
     * @param label the new label for this list
     */
    List.prototype.setLabel = function (label) {
        this.label = label;
    }; // end setLabel
    /**
     * Sets the Moscow status
     * @param moscowStatus the new Moscow status for this list
     */
    List.prototype.setMoscowStatus = function (moscowStatus) {
        this.moscowStatus = moscowStatus;
    }; // end setMoscowStatus
    /**
     * Sets the Backlog status
     * @param backlogStatus the new Backlog status for this list
     */
    List.prototype.setBacklogStatus = function (backlogStatus) {
        this.backlogStatus = backlogStatus;
    }; // end setBacklogStatus
    /**********************
     * Additional methods *
     **********************/
    /**
     * adds a new task card to the tasks field
     * @param label the label for the new task card
     * @param text the text for the new task card
     */
    List.prototype.addTask = function (label, text) {
        this.tasks.push(new TaskCard_1.TaskCard(label, text, this.moscowStatus, this.backlogStatus));
    }; // end addTask
    /**
     * Removes a task card from the tasks field
     * @param cardID the ID of the being removed.
     */
    List.prototype.removeTaskCard = function (cardID) {
        this.tasks.splice(cardID, 1);
    }; // end removeTaskCard
    /**
     * loads the list into the board
     * @param list the list to be loaded into the board
     */
    List.prototype.loadList = function (list) {
        this.label = list.label;
        this.moscowStatus = list.moscowStatus;
        this.backlogStatus = list.backlogStatus;
        var ntask;
        this.tasks = [];
        for (var _i = 0, _a = list.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            ntask = new TaskCard_1.TaskCard("", "", this.moscowStatus, this.backlogStatus);
            ntask.loadTaskCard(task);
            this.tasks.push(ntask);
        } // end for
    }; // end loadList
    return List;
}()); // end List
exports.List = List;
