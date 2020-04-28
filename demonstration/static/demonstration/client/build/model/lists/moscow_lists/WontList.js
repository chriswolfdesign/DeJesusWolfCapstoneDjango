"use strict";
/**
 * WontList.ts
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var WontList = /** @class */ (function () {
    function WontList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Wont Have List for MoSCoW board
     * @return a WontHave list
     */
    WontList.prototype.generateList = function () {
        return new List_1.List('Wont', MoscowStatus_1.MoscowStatus.WONT, BacklogStatus_1.BacklogStatus.NONE);
    }; // end generateList
    return WontList;
}()); // end WontList
exports.WontList = WontList;
