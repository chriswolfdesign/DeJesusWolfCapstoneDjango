"use strict";
/**
 * UnassignedMoscowList.ts
 *
 * A class that will generate a list for MoSCoW cards that have not yet been assigned.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (April 15, 2020)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var UnassignedMoscowList = /** @class */ (function () {
    function UnassignedMoscowList() {
    }
    // Constructor deliberately left out
    /**
     * generates an Unassigned List for MoSCoW board
     * @return an UnassignedMoscow list
     */
    UnassignedMoscowList.prototype.generateList = function () {
        return new List_1.List('Unassigned', MoscowStatus_1.MoscowStatus.UNASSIGNED, BacklogStatus_1.BacklogStatus.NONE);
    }; // end generateList
    return UnassignedMoscowList;
}()); // end MustList
exports.UnassignedMoscowList = UnassignedMoscowList;
