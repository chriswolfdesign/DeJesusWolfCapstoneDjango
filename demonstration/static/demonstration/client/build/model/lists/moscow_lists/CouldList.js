"use strict";
/**
 * CouldList.ts
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var CouldList = /** @class */ (function () {
    function CouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Could Have List for MoSCoW board
     *
     * @return a CouldHave list
     */
    CouldList.prototype.generateList = function () {
        return new List_1.List('Could', MoscowStatus_1.MoscowStatus.COULD, BacklogStatus_1.BacklogStatus.NONE);
    }; // end generateList
    return CouldList;
}()); // end CouldList
exports.CouldList = CouldList;
