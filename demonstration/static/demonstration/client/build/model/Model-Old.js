"use strict";
/**
 * model.js
 *
 * The JavaScript class that will wrap the entirity of our Agile Development
 * Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var BoardFactory_1 = require("./factories/BoardFactory");
var BoardOptions_1 = require("./enums/BoardOptions");
var Model = /** @class */ (function () {
    /**
     * Generates the foundation for the app
     *
     * @param {String} the title of this board
     */
    function Model(title) {
        this.title = title;
        this.boards = [];
        this.boardFactory = new BoardFactory_1.BoardFactory();
    } // end constructor
    Model.prototype.getTitle = function () {
        return this.title;
    };
    /**
     * Generates a board from a template based on user preference
     *
     * @param option
     */
    Model.prototype.generateBoardTemplate = function (option) {
        this.boards.push(this.boardFactory.generateBoard(option));
    }; // end generateBoardTemplate
    /**
     * Removes a board from the list of boards.
     *
     * @param {number} boardID the id of the to be removed
     */
    Model.prototype.removeBoard = function (boardID) {
        this.boards.splice(boardID, 1);
    }; // end removeBoard
    /**
     * Generates a list with the title and color provided in the board specified by the Controller.
     *
     * @param {number} boardID the id of the board we are trying to add a list into.
     * @param {string} label the name of the list being generated
     * @param {colors} color the color of the list being generated
     */
    Model.prototype.generateList = function (boardID, label) {
        this.boards[boardID].addList(label);
    }; // end generateList
    /**
     * Generates a list based on the template given, to the specified board
     *
     * @param {number} boardID the id of the baord we are trying to add a list into
     * @param {option} option the type of list we are trying to create
     */
    Model.prototype.generateListTemplate = function (boardID, option) {
        this.boards[boardID].addListTemplate(option);
    }; // end generateListTemplate
    /**
     * Removes a list from a specified board.
     * @param {number} boardID the ID of the board from whom we want to remove a list from
     * @param {number} listID the ID of the list we are removing
     */
    Model.prototype.removeList = function (boardID, listID) {
        this.boards[boardID].removeList(listID);
    }; // end removeList
    /**
     * Generates a card within a board's list
     *
     * @param {number} boardID
     * @param {number} listID
     * @param {string} label
     * @param {string} text
     *
     */
    Model.prototype.generateTaskCard = function (boardID, listID, label, text) {
        this.boards[boardID].generateTaskCard(listID, label, text);
    }; // end generateTaskCard
    /**
     * Remove a task card from the specified list from a specified board.
     * @param {integer} listID the ID of the list we're removing a card from.
     * @param {integer} taskID the ID of the card we're removing.
     */
    Model.prototype.removeTaskCard = function (listID, taskID) {
        this.boards[0].removeTaskCard(listID, taskID);
    }; // end removeTaskCard
    /**
     * Sets the controller of this app.
     *
     * @param {controller} Controller the controller that will send commands to this app.
     */
    Model.prototype.setController = function (controller) {
        this.controller = controller;
    }; // end setController
    /**
     * Loads a board given to it by the controller.
     * @param {model} model board to be loaded
     */
    Model.prototype.loadBoards = function (model) {
        this.title = model.title;
        var nboard;
        this.boards = [];
        for (var _i = 0, _a = model.boards; _i < _a.length; _i++) {
            var board = _a[_i];
            nboard = this.boardFactory.generateBoard(BoardOptions_1.BoardOptions.MOSCOW);
            nboard.loadBoard(board);
            this.boards.push(nboard);
        } // end for
    }; // end loadBoards
    Model.prototype.getBoards = function () {
        return this.boards;
    }; // end getBoards
    return Model;
}()); // end App
exports.Model = Model;
