"use strict";
/**
 * ShouldList.ts
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
var ShouldList = /** @class */ (function () {
    function ShouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Should Have List for MoSCoW board
     * @return a ShouldHave list
     */
    ShouldList.prototype.generateList = function () {
        return new List_1.List('Should', MoscowStatus_1.MoscowStatus.SHOULD, BacklogStatus_1.BacklogStatus.NONE);
    }; // end generateList
    return ShouldList;
}()); // end MustList
exports.ShouldList = ShouldList;
