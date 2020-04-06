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
var ConditionOfSatisfaction_1 = require("./ConditionOfSatisfaction");
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
        this.conditionsOfSatisfaction = [];
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
    TaskCard.prototype.getNumberOfConditions = function () {
        return this.conditionsOfSatisfaction.length;
    }; // end getNumberOfConditions
    /**
     * Gets the number of conditions of satisfaction that have been completed
     * for this card
     *
     * @return the number of conditions of satisfaction that have been completed
     */
    TaskCard.prototype.getNumberOfCompletedConditions = function () {
        var completed = 0;
        for (var i = 0; i < this.getNumberOfConditions(); i++) {
            if (this.conditionsOfSatisfaction[i].isComplete()) {
                completed++;
            } // end if
        } // end for
        return completed;
    }; // end getNumberOfCompletedConditions
    TaskCard.prototype.getConditionsStats = function () {
        return this.getNumberOfCompletedConditions() + '/' +
            this.getNumberOfConditions();
    }; // end getConditionsStats
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
    TaskCard.prototype.getConditionsOfSatisfaction = function () {
        return this.conditionsOfSatisfaction;
    }; // end getConditionsOfSatisfaction
    /**
     * Adds a condition of satisfaction to the task card
     *
     * @param text the text for the condition of satisfaction
     */
    TaskCard.prototype.addConditionOfSatisfaction = function (text) {
        this.conditionsOfSatisfaction.push(new ConditionOfSatisfaction_1.ConditionOfSatisfaction(text));
    };
    TaskCard.prototype.loadTaskCard = function (taskcard) {
        this.label = taskcard.label;
        this.text = taskcard.text;
        this.moscowStatus = taskcard.moscowStatus;
        this.backlogStatus = taskcard.backlogStatus;
        this.conditionsOfSatisfaction = [];
        var cond;
        for (var _i = 0, _a = taskcard.conditionsOfSatisfaction; _i < _a.length; _i++) {
            var condition = _a[_i];
            cond = new ConditionOfSatisfaction_1.ConditionOfSatisfaction("");
            cond.load(condition);
            this.conditionsOfSatisfaction.push(cond);
        }
    }; // end loadTaskCard
    return TaskCard;
}()); // end class
exports.TaskCard = TaskCard;
