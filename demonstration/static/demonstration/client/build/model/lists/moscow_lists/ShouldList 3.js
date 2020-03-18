"use strict";
/**
 * should_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var ShouldList = /** @class */ (function () {
    function ShouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Should Have List for MoSCoW board
     *
     * @return {List} a Should Have List
     */
    ShouldList.prototype.generateList = function () {
        return new List_1.List('Should');
    }; // end generateList
    return ShouldList;
}()); // end MustList
exports.ShouldList = ShouldList;
