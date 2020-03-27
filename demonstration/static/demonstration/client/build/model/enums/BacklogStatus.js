"use strict";
/**
 * BacklogStatus.ts
 *
 * An enumeration to represent a task card or list's backlog status
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 1.0.0 (March 27, 2020)
 */
exports.__esModule = true;
var BacklogStatus;
(function (BacklogStatus) {
    BacklogStatus["BACKLOG"] = "BACKLOG";
    BacklogStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BacklogStatus["IN_REVIEW"] = "IN_REVIEW";
    BacklogStatus["COMPLETE"] = "COMPLETE";
    BacklogStatus["NONE"] = "NONE";
})(BacklogStatus = exports.BacklogStatus || (exports.BacklogStatus = {}));
