"use strict";
/**
 * ConditionOfSatisfaction.ts
 *
 * Represents a condition of satisfaction for a task
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 1.0.0 (March 30, 2020)
 */
exports.__esModule = true;
var ConditionOfSatisfaction = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    /**
     * Generates a new Condition of Satisfaction
     * @param text the text for this COS
     */
    function ConditionOfSatisfaction(text) {
        this.text = text;
        this.complete = false;
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Gets the text for this COS
     * @return the text for this COS
     */
    ConditionOfSatisfaction.prototype.getText = function () {
        return this.text;
    }; // end getText
    /**
     * Getter for this COS
     * @return true if COS is completed, false otherwise
     */
    ConditionOfSatisfaction.prototype.isComplete = function () {
        return this.complete;
    }; // end isComplete
    /***********
     * Setters *
     ***********/
    /**
     * Sets this condition of satisfaction to complete
     */
    ConditionOfSatisfaction.prototype.setComplete = function () {
        this.complete = true;
    }; // end setComplete
    /**
     * Sets this condition of satisfaction to incomplete
     */
    ConditionOfSatisfaction.prototype.setIncomplete = function () {
        this.complete = false;
    }; // setIncomplete
    /**********************
     * Additional methods *
     **********************/
    /**
     * loads this condition of satisfaction to the board
     * @param condition the COS to be loaded into the board
     */
    ConditionOfSatisfaction.prototype.load = function (condition) {
        this.text = condition.text;
        this.complete = condition.complete;
    };
    return ConditionOfSatisfaction;
}()); // end class
exports.ConditionOfSatisfaction = ConditionOfSatisfaction;
