"use strict";
/**
 * list.js
 *
 * The JavaScript class that behaves as a List on our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var TaskCard_1 = require("../TaskCard");
var List = /** @class */ (function () {
    /**
     * Generates the List object
     *
     * @param {string} label the label for the this list
     * @param {Colors} color the background color of this list
     * @param {MoscowStatus} moscowStatus the Moscow status of this list
     * @param {BacklogStatus} backlogStatus the Backlog status of this list
     */
    function List(label, moscowStatus, backlogStatus) {
        this.label = label;
        this.tasks = [];
        this.moscowStatus = moscowStatus;
        this.backlogStatus = backlogStatus;
    } // end constructor
    List.prototype.getLabel = function () {
        return this.label;
    }; // end getLabel
    List.prototype.setLabel = function (label) {
        this.label = label;
    }; // end setLabel
    List.prototype.getTasks = function () {
        return this.tasks;
    }; // end getTasks
    List.prototype.getMoscowStatus = function () {
        return this.moscowStatus;
    }; // end getMoscowStatus
    List.prototype.setMoscowStatus = function (moscowStatus) {
        this.moscowStatus = moscowStatus;
    }; // end setMoscowStatus
    List.prototype.getBacklogStatus = function () {
        return this.backlogStatus;
    }; // end getBacklogStatus
    List.prototype.setBacklogStatus = function (backlogStatus) {
        this.backlogStatus = backlogStatus;
    }; // end setBacklogStatus
    /**
     * adds a new task card to the tasks field
     *
     * @param {string} label the label for the new task card
     * @param {string} text the text for the new task card
     */
    List.prototype.addTask = function (label, text) {
        this.tasks.push(new TaskCard_1.TaskCard(label, text, this.moscowStatus, this.backlogStatus));
    }; // end addTask
    /**
     * Removes a task card from the tasks field
     *
     * @param {number} cardID the ID of the being removed.
     */
    List.prototype.removeTaskCard = function (cardID) {
        this.tasks.splice(cardID, 1);
    }; // end removeTaskCard
    /**
     * loads the list into the board
     *
     * @param {List} list -- the list to be loaded into the board
     */
    List.prototype.loadList = function (list) {
        this.label = list.label;
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
