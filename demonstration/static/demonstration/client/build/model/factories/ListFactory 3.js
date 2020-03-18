"use strict";
/**
 * list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */
exports.__esModule = true;
var ListOptions_1 = require("../enums/ListOptions");
var List_1 = require("../lists/List");
var MustList_1 = require("../lists/moscow_lists/MustList");
var ShouldList_1 = require("../lists/moscow_lists/ShouldList");
var CouldList_1 = require("../lists/moscow_lists/CouldList");
var WontList_1 = require("../lists/moscow_lists/WontList");
var BacklogList_1 = require("../lists/sprint_backlog_lists/BacklogList");
var InProgressList_1 = require("../lists/sprint_backlog_lists/InProgressList");
var InReviewList_1 = require("../lists/sprint_backlog_lists/InReviewList");
var CompleteList_1 = require("../lists/sprint_backlog_lists/CompleteList");
var ListFactory = /** @class */ (function () {
    function ListFactory() {
        this.mustList = new MustList_1.MustList();
        this.shouldList = new ShouldList_1.ShouldList();
        this.couldList = new CouldList_1.CouldList();
        this.wontList = new WontList_1.WontList();
        this.backlogList = new BacklogList_1.BacklogList();
        this.inProgressList = new InProgressList_1.InProgressList();
        this.inReviewList = new InReviewList_1.InReviewList();
        this.completeList = new CompleteList_1.CompleteList();
    } // end constructor
    ListFactory.prototype.getMustList = function () {
        return this.mustList;
    }; // end getMustList
    ListFactory.prototype.getShouldList = function () {
        return this.shouldList;
    }; // end getShouldList
    ListFactory.prototype.getCouldList = function () {
        return this.couldList;
    }; // end getCouldList
    ListFactory.prototype.getWontList = function () {
        return this.wontList;
    }; // end getWontList
    ListFactory.prototype.getBacklogList = function () {
        return this.backlogList;
    }; // end getBacklogList
    ListFactory.prototype.getInProgressList = function () {
        return this.inProgressList;
    }; // end getInProgressList
    ListFactory.prototype.getInReviewList = function () {
        return this.inReviewList;
    }; // end getInReviewList
    ListFactory.prototype.getCompleteList = function () {
        return this.completeList;
    }; // end getCompleteList
    /**
     * generates a list based on the parameter passed in
     *
     * @param {ListOptions} option the type of list the user wants generated
     *
     * @return {List} a list set up based on user preference
     */
    ListFactory.prototype.generateList = function (option) {
        switch (option) {
            case ListOptions_1.ListOptions.MUST:
                return this.mustList.generateList();
            case ListOptions_1.ListOptions.SHOULD:
                return this.shouldList.generateList();
            case ListOptions_1.ListOptions.COULD:
                return this.couldList.generateList();
            case ListOptions_1.ListOptions.WONT:
                return this.wontList.generateList();
            case ListOptions_1.ListOptions.BACKLOG:
                return this.backlogList.generateList();
            case ListOptions_1.ListOptions.INPROGRESS:
                return this.inProgressList.generateList();
            case ListOptions_1.ListOptions.INREVIEW:
                return this.inReviewList.generateList();
            case ListOptions_1.ListOptions.COMPLETE:
                return this.completeList.generateList();
            default:
                return new List_1.List("");
        } // end switch
    }; // end generateList
    return ListFactory;
}()); // end ListFactory
exports.ListFactory = ListFactory;
