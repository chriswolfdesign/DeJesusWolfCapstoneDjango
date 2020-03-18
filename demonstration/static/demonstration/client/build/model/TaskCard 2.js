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
     */
    function TaskCard(label, text) {
        this.label = label;
        this.text = text;
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
    TaskCard.prototype.loadTaskCard = function (taskcard) {
        this.label = taskcard.label;
        this.text = taskcard.text;
    };
    return TaskCard;
}()); // end class
exports.TaskCard = TaskCard;
