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
    function ConditionOfSatisfaction(text) {
        this.text = text;
        this.complete = false;
    } // end constructor
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
    ConditionOfSatisfaction.prototype.getText = function () {
        return this.text;
    }; // end getText
    /**
     * Returns whether or not this condition of satisfaction is complete
     *
     * @return true if completed, false otherwise
     */
    ConditionOfSatisfaction.prototype.isComplete = function () {
        return this.complete;
    }; // end isComplete
    return ConditionOfSatisfaction;
}()); // end class
exports.ConditionOfSatisfaction = ConditionOfSatisfaction;
