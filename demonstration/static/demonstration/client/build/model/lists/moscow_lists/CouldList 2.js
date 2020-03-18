"use strict";
/**
 * could_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var CouldList = /** @class */ (function () {
    function CouldList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Could Have List for MoSCoW board
     *
     * @return {List} a Could Have List
     */
    CouldList.prototype.generateList = function () {
        return new List_1.List('Could');
    }; // end generateList
    return CouldList;
}()); // end CouldList
exports.CouldList = CouldList;
