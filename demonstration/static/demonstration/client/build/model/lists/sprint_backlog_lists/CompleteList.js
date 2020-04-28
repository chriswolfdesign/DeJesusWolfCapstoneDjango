"use strict";
/**
 * CompleteList.ts
 *
 * A class that will generate a Complete List for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var CompleteList = /** @class */ (function () {
    function CompleteList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Complete List for Sprint Backlog board
     * @return a Complete List
     */
    CompleteList.prototype.generateList = function () {
        return new List_1.List('Complete', MoscowStatus_1.MoscowStatus.NONE, BacklogStatus_1.BacklogStatus.COMPLETE);
    }; // end generateList
    return CompleteList;
}()); // end CompleteList
exports.CompleteList = CompleteList;
