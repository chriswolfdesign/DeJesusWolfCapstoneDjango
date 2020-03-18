"use strict";
/**
 * in_review_list.js
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var InReviewList = /** @class */ (function () {
    function InReviewList() {
    }
    // Constructor deliberately left out
    /**
     * generates an In Review List for Sprint Backlog board
     *
     * @return {List} an InReviewList
     */
    InReviewList.prototype.generateList = function () {
        return new List_1.List('In Review');
    }; // end generateList
    return InReviewList;
}()); // end InReviewList
exports.InReviewList = InReviewList;
