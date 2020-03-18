"use strict";
/**
 * backlog_list.js
 *
 * A class that will generate a Backlog list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var BacklogList = /** @class */ (function () {
    function BacklogList() {
    }
    // Constructor deliberately left out
    /**
     * generates a Backlog LIst for Sprint Backlog board
     *
     * @return {List} a Backlog List
     */
    BacklogList.prototype.generateList = function () {
        return new List_1.List('Backlog');
    }; // end generateList
    return BacklogList;
}()); // end BacklogList
exports.BacklogList = BacklogList;
