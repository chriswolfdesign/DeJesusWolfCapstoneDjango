"use strict";
/**
 * InReviewList.ts
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var List_1 = require("../List");
var MoscowStatus_1 = require("../../enums/MoscowStatus");
var BacklogStatus_1 = require("../../enums/BacklogStatus");
var InReviewList = /** @class */ (function () {
    function InReviewList() {
    }
    // Constructor deliberately left out
    /**
     * generates an In Review List for Sprint Backlog board
     * @return an InReview list
     */
    InReviewList.prototype.generateList = function () {
        return new List_1.List('In Review', MoscowStatus_1.MoscowStatus.NONE, BacklogStatus_1.BacklogStatus.IN_REVIEW);
    }; // end generateList
    return InReviewList;
}()); // end InReviewList
exports.InReviewList = InReviewList;
