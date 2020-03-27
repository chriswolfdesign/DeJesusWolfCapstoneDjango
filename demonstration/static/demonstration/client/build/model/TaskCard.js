"use strict";
/**
 * task_card.js
 *
 * The JavaScript class that represents a Task Card in our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var TaskCard = /** @class */ (function () {
    /**
     * Generates the TaskCard object
     *
     * @param {string} label the label representing this task card
     * @param {string} text the text this task card should display
     * @param {MoscowStatus} moscowStats the card's Moscow status
     * @param {BacklogStatus} backlogStatus the card's Backlog status
     */
    function TaskCard(label, text, moscowStatus, backlogStatus) {
        this.label = label;
        this.text = text;
        this.moscowStatus = moscowStatus;
        this.backlogStatus = backlogStatus;
    } // end constructor
    TaskCard.prototype.setText = function (text) {
        this.text = text;
    }; // end setText
    TaskCard.prototype.getLabel = function () {
        return this.label;
    }; // end getLabel
    TaskCard.prototype.getText = function () {
        return this.text;
    }; // end getText
    TaskCard.prototype.getMoscowStatus = function () {
        return this.moscowStatus;
    }; // end getMoscowStatus
    TaskCard.prototype.setMoscowStatus = function (moscowStatus) {
        this.moscowStatus = moscowStatus;
    }; // end setMoscowStatus
    TaskCard.prototype.getBacklogStatus = function () {
        return this.backlogStatus;
    }; // end getBacklogStatus
    TaskCard.prototype.setBacklogStatus = function (backlogStatus) {
        this.backlogStatus = backlogStatus;
    }; // end setBacklogStatus
    TaskCard.prototype.loadTaskCard = function (taskcard) {
        this.label = taskcard.label;
        this.text = taskcard.text;
        this.moscowStatus = taskcard.moscowStatus;
        this.backlogStatus = taskcard.backlogStatus;
    }; // end loadTaskCard
    return TaskCard;
}()); // end class
exports.TaskCard = TaskCard;
