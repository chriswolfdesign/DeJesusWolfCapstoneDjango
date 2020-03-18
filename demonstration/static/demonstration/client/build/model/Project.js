"use strict";
/**
 * Holds and allows for the manipulation of Boards.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 0.0.0
 */
exports.__esModule = true;
var BoardFactory_1 = require("./factories/BoardFactory");
var BoardOptions_1 = require("./enums/BoardOptions");
var Project = /** @class */ (function () {
    /**
     * Generates the foundation for the app
     *
     * @param {String} title -- the title of this board
     */
    function Project(title) {
        this.title = title;
        this.boards = [];
        this.boardFactory = new BoardFactory_1.BoardFactory();
        this.boards.push(this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.MOSCOW));
        this.boards.push(this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.SPRINT));
        this.activeBoardIndex = 0; // which board should display upon opening the project
        this.nextCardNumber = 1;
    } // end constructor
    Project.prototype.getTitle = function () {
        return this.title;
    };
    Project.prototype.getBoardTitle = function (boardID) {
        return this.boards[boardID].getTitle();
    };
    Project.prototype.getActiveBoard = function () {
        return this.boards[this.activeBoardIndex];
    };
    Project.prototype.getActiveBoardIndex = function () {
        return this.activeBoardIndex;
    };
    Project.prototype.setActiveBoardIndex = function (index) {
        this.activeBoardIndex = index;
    };
    /**
     * Generates a board from a template based on user preference
     *
     * @param option
     */
    Project.prototype.generateBoardTemplate = function (option) {
        this.boards.push(this.boardFactory.generateBoard(option));
    }; // end generateBoardTemplate
    /**
     * Removes a board from the list of boards.
     *
     * @param {number} boardID the id of the to be removed
     */
    Project.prototype.removeBoard = function (boardID) {
        this.boards.splice(boardID, 1);
    }; // end removeBoard
    /**
     * Generates a list with the title and color provided in the board specified by the Controller.
     *
     * @param {number} boardID the id of the board we are trying to add a list into.
     * @param {string} label the name of the list being generated
     */
    Project.prototype.generateList = function (boardID, label) {
        this.boards[boardID].addList(label);
    }; // end generateList
    /**
     * Generates a list based on the template given, to the specified board
     *
     * @param {number} boardID the id of the baord we are trying to add a list into
     * @param {option} option the type of list we are trying to create
     */
    Project.prototype.generateListTemplate = function (boardID, option) {
        this.boards[boardID].addListTemplate(option);
    }; // end generateListTemplate
    /**
     * Removes a list from a specified board.
     * @param {number} boardID the ID of the board from whom we want to remove a list from
     * @param {number} listID the ID of the list we are removing
     */
    Project.prototype.removeList = function (boardID, listID) {
        this.boards[boardID].removeList(listID);
    }; // end removeList
    /**
     * Generates a card within a board's list
     *
     * @param {number} listID
     * @param {string} text
     *
     */
    Project.prototype.generateTaskCard = function (listID, text) {
        var label = this.generateNextCardLabel();
        this.getActiveBoard().generateTaskCard(listID, label, text);
        this.nextCardNumber++;
    }; // end generateTaskCard
    /**
     * Generates the label for the next card to be created
     *
     * @return {string} -- the label of the card being created
     */
    Project.prototype.generateNextCardLabel = function () {
        return this.makeProjectAcronym() + this.nextCardNumber;
    }; // end generateNextCardLabel
    /**
     * Creates an acronym for the project
     *
     * @return {string} -- the acronym for the project
     */
    Project.prototype.makeProjectAcronym = function () {
        var words = this.title.split(' ');
        var acronym = '';
        words.forEach(function (word) {
            acronym += word[0].toLowerCase();
        });
        return acronym;
    }; // end makeProjectAcronym
    /**
     * Remove a task card from the specified list from a specified board.
     * @param {integer} listID the ID of the list we're removing a card from.
     * @param {integer} taskID the ID of the card we're removing.
     */
    Project.prototype.removeTaskCard = function (boardID, listID, taskID) {
        this.boards[boardID].removeTaskCard(listID, taskID);
    }; // end removeTaskCard
    /**
     * Loads a board given to it by the controller.
     * @param {Project} project project to be loaded
     */
    Project.prototype.loadProject = function (project) {
        this.title = project.title;
        var nboard;
        this.boards = [];
        for (var _i = 0, _a = project.boards; _i < _a.length; _i++) {
            var board = _a[_i];
            nboard = this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.MOSCOW);
            nboard.loadBoard(board);
            this.boards.push(nboard);
        } // end for
    }; // end loadBoards
    Project.prototype.getBoards = function () {
        return this.boards;
    }; // end getBoards
    return Project;
}()); //end of Project
exports.Project = Project;
