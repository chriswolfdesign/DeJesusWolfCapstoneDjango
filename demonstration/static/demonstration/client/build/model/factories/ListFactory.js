"use strict";
/**
 * ListFactory.ts
 *
 * The class that will allow us to easily autogenerate template
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
var MoscowStatus_1 = require("../enums/MoscowStatus");
var BacklogStatus_1 = require("../enums/BacklogStatus");
var UnassignedMoscowList_1 = require("../lists/moscow_lists/UnassignedMoscowList");
var UnassignedSprintBacklogList_1 = require("../lists/sprint_backlog_lists/UnassignedSprintBacklogList");
var ListFactory = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    /**
     * Generates a ListFactory
     */
    function ListFactory() {
        this.mustList = new MustList_1.MustList();
        this.shouldList = new ShouldList_1.ShouldList();
        this.couldList = new CouldList_1.CouldList();
        this.wontList = new WontList_1.WontList();
        this.backlogList = new BacklogList_1.BacklogList();
        this.inProgressList = new InProgressList_1.InProgressList();
        this.inReviewList = new InReviewList_1.InReviewList();
        this.completeList = new CompleteList_1.CompleteList();
        this.unassignedMoscowList = new UnassignedMoscowList_1.UnassignedMoscowList();
        this.unassignedSprintBacklogList = new UnassignedSprintBacklogList_1.UnassignedSprintBacklogList();
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Getter for MustList
     * @return the MustList
     */
    ListFactory.prototype.getMustList = function () {
        return this.mustList;
    }; // end getMustList
    /**
     * Getter for the ShouldList
     * @return the ShouldList
     */
    ListFactory.prototype.getShouldList = function () {
        return this.shouldList;
    }; // end getShouldList
    /**
     * Getter for the CouldList
     * @return the CouldList
     */
    ListFactory.prototype.getCouldList = function () {
        return this.couldList;
    }; // end getCouldList
    /**
     * Getter for the WontList
     * @return the WontList
     */
    ListFactory.prototype.getWontList = function () {
        return this.wontList;
    }; // end getWontList
    /**
     * Getter for the BacklogList
     * @return the BacklogList
     */
    ListFactory.prototype.getBacklogList = function () {
        return this.backlogList;
    }; // end getBacklogList
    /**
     * Getter for the InProgressList
     * @return the InProgressList
     */
    ListFactory.prototype.getInProgressList = function () {
        return this.inProgressList;
    }; // end getInProgressList
    /**
     * Getter for the InReviewList
     * @return the InReviewList
     */
    ListFactory.prototype.getInReviewList = function () {
        return this.inReviewList;
    }; // end getInReviewList
    /**
     * Getter for the CompleteList
     * @return the CompleteList
     */
    ListFactory.prototype.getCompleteList = function () {
        return this.completeList;
    }; // end getCompleteList
    /**
     * generates a list based on the parameter passed in
     * @param option the type of list the user wants generated
     * @return a list set up based on user preference
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
            case ListOptions_1.ListOptions.MOSCOW_UNASSIGNED:
                return this.unassignedMoscowList.generateList();
            case ListOptions_1.ListOptions.SPRINT_BACKLOG_UNASSIGNED:
                return this.unassignedSprintBacklogList.generateList();
            default:
                return new List_1.List("", MoscowStatus_1.MoscowStatus.UNASSIGNED, BacklogStatus_1.BacklogStatus.NONE);
        } // end switch
    }; // end generateList
    return ListFactory;
}()); // end ListFactory
exports.ListFactory = ListFactory;
