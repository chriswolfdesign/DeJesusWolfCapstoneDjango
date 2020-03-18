"use strict";
/**
 * list_options.ts
 *
 * A JavaScript object to act as an enumeration for list choices in our
 * ListFactory
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var ListOptions;
(function (ListOptions) {
    ListOptions["MUST"] = "Must";
    ListOptions["SHOULD"] = "Should";
    ListOptions["COULD"] = "Could";
    ListOptions["WONT"] = "Wont";
    ListOptions["BACKLOG"] = "Backlog";
    ListOptions["INPROGRESS"] = "InProgress";
    ListOptions["INREVIEW"] = "InReview";
    ListOptions["COMPLETE"] = "Complete";
})(ListOptions = exports.ListOptions || (exports.ListOptions = {})); // end ListOptions
