"use strict";
/**
 * in_progress_list.js
 *
 * A class that will generate an In Progress list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var InProgressList = /** @class */ (function () {
    function InProgressList() {
    }
    // Constructor deliberately left out
    /**
     * generates an In Progress List for Sprint Backlog board
     *
     * @return {List} an In Progress List
     */
    InProgressList.prototype.generateList = function () {
        return new List_1.List('In Progress', MoscowStatus_1.MoscowStatus.NONE, BacklogStatus_1.BacklogStatus.IN_PROGRESS);
    }; // end generateList
    return InProgressList;
}()); // end InProgressList
exports.InProgressList = InProgressList;
