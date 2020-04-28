"use strict";
/**
 * TaskCard.ts
 *
 * The class that represents a Task Card in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var ConditionOfSatisfaction_1 = require("./ConditionOfSatisfaction");
var TaskCard = /** @class */ (function () {
    /****************
     * Constructors  *
     ****************/
    /**
     * Generates the TaskCard object
     * @param label the label representing this task card
     * @param moscowStatus the card's Moscow status
     * @param backlogStatus the card's Backlog status
     */
    function TaskCard(label, title, moscowStatus, backlogStatus) {
        this.label = label;
        this.title = title;
        this.text = 'Enter description here';
        this.conditionsOfSatisfaction = [];
        this.moscowStatus = moscowStatus;
        this.backlogStatus = backlogStatus;
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Gets the label for this task card
     * @return the label for this task card
     */
    TaskCard.prototype.getLabel = function () {
        return this.label;
    }; // end getLabel
    /**
     * Sets the text of this task card
     * @param text the next text for this task card
     */
    TaskCard.prototype.setText = function (text) {
        this.text = text;
    }; // end setText
    /**
     * Gets the description of this task card
     * @return the description of this task card
     */
    TaskCard.prototype.getText = function () {
        return this.text;
    }; // end getText
    /**
     * Gets the title of this task card
     * @return the title of this task card
     */
    TaskCard.prototype.getTitle = function () {
        return this.title;
    }; // end getTitle
    /**
     * Gets the number of COS for this task card
     * @return the number of COS for this task card
     */
    TaskCard.prototype.getNumberOfConditions = function () {
        return this.conditionsOfSatisfaction.length;
    }; // end getNumberOfConditions
    /**
     * Gets the number of conditions of satisfaction that have been completed
     * for this card
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
    /**
     * Gets the ratio of complete to total COS
     * @return the ratio of complete to total COS
     */
    TaskCard.prototype.getConditionsStats = function () {
        return this.getNumberOfCompletedConditions() + '/' +
            this.getNumberOfConditions();
    }; // end getConditionsStats
    /**
     * Gets the MoscowStatus of this task card
     * @return the MoscowStatus of this task card
     */
    TaskCard.prototype.getMoscowStatus = function () {
        return this.moscowStatus;
    }; // end getMoscowStatus
    /**
     * Gets the BacklogStatus of this task card
     * @return the BacklogStatus of this task card
     */
    TaskCard.prototype.getBacklogStatus = function () {
        return this.backlogStatus;
    }; // end getBacklogStatus
    /**
     * Gets the COS for this task card
     * @return the COS for this task card
     */
    TaskCard.prototype.getConditionsOfSatisfaction = function () {
        return this.conditionsOfSatisfaction;
    }; // end getConditionsOfSatisfaction
    /***********
     * Setters *
     ***********/
    /**
     * Sets the MoscowStatus of this task card
     * @param moscowStatus the new MoscowStatus of this task card
     */
    TaskCard.prototype.setMoscowStatus = function (moscowStatus) {
        this.moscowStatus = moscowStatus;
    }; // end setMoscowStatus
    /**
     * Sets the BacklogStatus of this task card
     * @param backlogStatus the new BacklogStatus of this task card
     */
    TaskCard.prototype.setBacklogStatus = function (backlogStatus) {
        this.backlogStatus = backlogStatus;
    }; // end setBacklogStatus
    /**********************
     * Additional methods *
     **********************/
    /**
     * Adds a condition of satisfaction to the task card
     * @param text the text for the condition of satisfaction
     */
    TaskCard.prototype.addConditionOfSatisfaction = function (text) {
        this.conditionsOfSatisfaction.push(new ConditionOfSatisfaction_1.ConditionOfSatisfaction(text));
    }; // end addConditionOfSatisfaction
    /**
     * Removes a condition of satisfaction from the task card
     * @param index the index of the COS being removed
     */
    TaskCard.prototype.removeConditionOfSatisfaction = function (index) {
        this.conditionsOfSatisfaction.splice(index, 1);
    }; // end removeConditionOfSatisfaction
    /**
     * Loads a task card into the board
     * @param taskCard the task card to load into the board
     */
    TaskCard.prototype.loadTaskCard = function (taskCard) {
        this.label = taskCard.label;
        this.title = taskCard.title;
        this.text = taskCard.text;
        this.moscowStatus = taskCard.moscowStatus;
        this.backlogStatus = taskCard.backlogStatus;
        this.conditionsOfSatisfaction = [];
        var cond;
        for (var _i = 0, _a = taskCard.conditionsOfSatisfaction; _i < _a.length; _i++) {
            var condition = _a[_i];
            cond = new ConditionOfSatisfaction_1.ConditionOfSatisfaction("");
            cond.load(condition);
            this.conditionsOfSatisfaction.push(cond);
        } // end loadTaskCard
    }; // end loadTaskCard
    return TaskCard;
}()); // end class
exports.TaskCard = TaskCard;
