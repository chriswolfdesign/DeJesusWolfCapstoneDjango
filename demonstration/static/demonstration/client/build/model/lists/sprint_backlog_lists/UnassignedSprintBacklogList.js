"use strict";
/**
 * UnassignedSprintBacklogList.ts
 *
 * A class that will generate a list for cards that have not been assigned
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (April 15, 2020)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var UnassignedSprintBacklogList = /** @class */ (function () {
    function UnassignedSprintBacklogList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Backlog LIst for Sprint Backlog board
     *
     * @return {List} a Backlog List
     */
    UnassignedSprintBacklogList.prototype.generateList = function () {
        return new List_1.List('Unassigned', MoscowStatus_1.MoscowStatus.NONE, BacklogStatus_1.BacklogStatus.UNASSIGNED);
    }; // end generateList
    return UnassignedSprintBacklogList;
}()); // end BacklogList
exports.UnassignedSprintBacklogList = UnassignedSprintBacklogList;
