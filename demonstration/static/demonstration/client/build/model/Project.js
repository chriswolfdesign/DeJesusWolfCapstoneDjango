"use strict";
/**
 * Project.ts
 *
 * A class responsible for holding and allowing for the manipulation of Boards.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 0.0.0
 */
exports.__esModule = true;
var BoardFactory_1 = require("./factories/BoardFactory");
var BoardOptions_1 = require("./enums/BoardOptions");
var TaskCard_1 = require("./TaskCard");
var MoscowStatus_1 = require("./enums/MoscowStatus");
var BacklogStatus_1 = require("./enums/BacklogStatus");
var Project = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    /**
     * Generates the foundation for the app
     * @param title the title of this board
     */
    function Project(title) {
        this.title = title;
        this.boards = [];
        this.taskCards = [];
        this.boardFactory = new BoardFactory_1.BoardFactory();
        this.boards.push(this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.MOSCOW));
        this.boards.push(this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.SPRINT));
        this.activeBoardIndex = 0; // which board should display upon opening the project
        this.nextCardNumber = 1;
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Gets the title of this project
     * @return the title of this project
     */
    Project.prototype.getTitle = function () {
        return this.title;
    }; // end getTitle
    /**
     * Gets the title of a specific board
     *
     * @param boardID the title of the requested board
     */
    Project.prototype.getBoardTitle = function (boardID) {
        return this.boards[boardID].getTitle();
    }; // end getBoardTitle
    /**
     * Gets the board that should be currently shown on the user's browser
     * @return the current board on screen
     */
    Project.prototype.getActiveBoard = function () {
        return this.boards[this.activeBoardIndex];
    }; // end getActiveBoard
    /**
     * Gets the index of the board that be currently shown on the user's browser
     * @return the index for the current board on screen
     */
    Project.prototype.getActiveBoardIndex = function () {
        return this.activeBoardIndex;
    }; // end getActiveBoardIndex
    /**
     * Gets the task cards for this project
     * @return a list of task cards in this project
     */
    Project.prototype.getTasks = function () {
        return this.taskCards;
    }; // end getTasks
    /**
     * Gets the boards in this project
     * @return a list of the boards in this project
     */
    Project.prototype.getBoards = function () {
        return this.boards;
    }; // end getBoards
    /***********
     * Setters *
     ***********/
    /**
     * Change the board that is currently displayed on the user's browser
     * @param index the index for the board we wish to display on screen
     */
    Project.prototype.setActiveBoardIndex = function (index) {
        this.activeBoardIndex = index;
    }; // end setActiveBoardIndex
    /**********************
     * Additional methods *
     **********************/
    /**
     * Generates a board from a template based on user preference
     * @param option the template to build a board off of
     */
    Project.prototype.generateBoardTemplate = function (option) {
        this.boards.push(this.boardFactory.generateBoard(option));
    }; // end generateBoardTemplate
    /**
     * Removes a board from the list of boards.
     * @param boardID the id of the to be removed
     */
    Project.prototype.removeBoard = function (boardID) {
        this.boards.splice(boardID, 1);
    }; // end removeBoard
    /**
     * Generates a list with the title and color provided in the board specified by the Controller.
     * @param boardID the id of the board we are trying to add a list into.
     * @param label the name of the list being generated
     */
    Project.prototype.generateList = function (boardID, label) {
        this.boards[boardID].addList(label);
    }; // end generateList
    /**
     * Generates a list based on the template given, to the specified board
     * @param boardID the id of the board we are trying to add a list into
     * @param option the type of list we are trying to create
     */
    Project.prototype.generateListTemplate = function (boardID, option) {
        this.boards[boardID].addListTemplate(option);
    }; // end generateListTemplate
    /**
     * Removes a list from a specified board.
     * @param boardID the ID of the board from whom we want to remove a list from
     * @param listID the ID of the list we are removing
     */
    Project.prototype.removeList = function (boardID, listID) {
        this.boards[boardID].removeList(listID);
    }; // end removeList
    /**
     * Generates a card within a board's list
     * @param listID the index of the list the task card will be added to
     * @param text the text for the task card once it is generated
     */
    Project.prototype.generateTaskCard = function (listID, text) {
        var label = this.generateNextCardLabel();
        var listToAddTo = this.getActiveBoard().getLists()[listID];
        // find the new moscowStatus and backlogStatus
        var moscowStatus = listToAddTo.getMoscowStatus();
        var backlogStatus = listToAddTo.getBacklogStatus();
        // // if on the backlogBoard, give a default of UNASSIGNED
        if (moscowStatus == MoscowStatus_1.MoscowStatus.NONE) {
            moscowStatus = MoscowStatus_1.MoscowStatus.UNASSIGNED;
        } // end if
        // if on the moscowBoard, give a default of UNASSIGNED
        if (backlogStatus == BacklogStatus_1.BacklogStatus.NONE) {
            backlogStatus = BacklogStatus_1.BacklogStatus.UNASSIGNED;
        } // end if
        this.taskCards.push(new TaskCard_1.TaskCard(label, text, moscowStatus, backlogStatus));
        // increment so the next card generated will be next on the list
        this.nextCardNumber++;
    }; // end generateTaskCard
    /**
     * Generates the label for the next card to be created
     * @return the label of the card being created
     */
    Project.prototype.generateNextCardLabel = function () {
        return this.makeProjectAcronym() + this.nextCardNumber;
    }; // end generateNextCardLabel
    /**
     * Creates an acronym for the project
     * @return the acronym for the project
     */
    Project.prototype.makeProjectAcronym = function () {
        var words = this.title.split(' ');
        var acronym = '';
        words.forEach(function (word) {
            acronym += word[0].toLowerCase();
        }); // end for-each
        return acronym;
    }; // end makeProjectAcronym
    /**
     * Remove a task card from the specified list from a specified board.
     * @string taskLabel the label of the task card to be removed
     */
    Project.prototype.removeTaskCard = function (taskLabel) {
        for (var i = 0; i < this.taskCards.length; i++) {
            if (this.taskCards[i].getLabel() === taskLabel) {
                this.taskCards.splice(i, 1);
                return;
            } // end if
        } // end for
    }; // end removeTaskCard
    /**
     * Loads a board given to it by the controller.
     * @param project project to be loaded
     */
    Project.prototype.loadProject = function (project) {
        this.title = project.title;
        this.activeBoardIndex = 0;
        this.nextCardNumber = project.nextCardNumber;
        var nboard;
        var ntaskCard;
        this.boards = [];
        for (var _i = 0, _a = project.boards; _i < _a.length; _i++) {
            var board = _a[_i];
            nboard = this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.MOSCOW);
            nboard.loadBoard(board);
            this.boards.push(nboard);
        }
        this.taskCards = [];
        for (var _b = 0, _c = project.taskCards; _b < _c.length; _b++) {
            var taskCard = _c[_b];
            ntaskCard = new TaskCard_1.TaskCard("", "", MoscowStatus_1.MoscowStatus.MUST, BacklogStatus_1.BacklogStatus.BACKLOG);
            ntaskCard.loadTaskCard(taskCard);
            this.taskCards.push(ntaskCard);
        } // end for
    }; // end loadBoards
    return Project;
}()); //end of Project
exports.Project = Project;
