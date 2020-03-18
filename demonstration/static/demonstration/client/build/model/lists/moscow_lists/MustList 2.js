"use strict";
/**
 * must_list.js
 *
 * A class that will generate a Must Have List for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MustList = /** @class */ (function () {
    function MustList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Must Have List for MoSCoW board
     *
     * @return {List} a Must Have List
     */
    MustList.prototype.generateList = function () {
        return new List_1.List('Must');
    }; // end generateList
    return MustList;
}()); // end MustList
exports.MustList = MustList;
