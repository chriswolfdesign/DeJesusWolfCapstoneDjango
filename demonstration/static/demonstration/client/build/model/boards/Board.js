"use strict";
/**
 * Board.ts
 *
 * A class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var List_1 = require("../lists/List");
var ListFactory_1 = require("../factories/ListFactory");
var MoscowStatus_1 = require("../enums/MoscowStatus");
var BacklogStatus_1 = require("../enums/BacklogStatus");
var Board = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    /**
     * Generates the board object
     * @param title the title of the board
     */
    function Board(title) {
        this.title = title;
        this.lists = [];
        this.listFactory = new ListFactory_1.ListFactory();
    } // end constructor
    /***********
     * Getters *
     ***********/
    /**
     * Getter for the board's title
     * @return the title of this board
     */
    Board.prototype.getTitle = function () {
        return this.title;
    }; // end getTitle
    /**
     * Getter for the board's lists
     * @return this board's lists
     */
    Board.prototype.getLists = function () {
        return this.lists;
    }; // end getLists
    /***********
     * Setters *
     ***********/
    /**
     * sets listFactory to something more specific
     * @param factory the new factory
     */
    Board.prototype.setListFactory = function (factory) {
        this.listFactory = factory;
    }; // end setListFactory
    /**********************
     * Additional methods *
     **********************/
    /**
     * adds a new list to our board
     * @param label the label for our new list
     * @param color the optional color value for our list
     */
    Board.prototype.addList = function (label) {
        this.lists.push(new List_1.List(label, MoscowStatus_1.MoscowStatus.UNASSIGNED, BacklogStatus_1.BacklogStatus.NONE));
    }; // end addList
    /**
     * Creates a task card within the specified list.
     * @param listID the list of we are trying to add a card to
     * @param label the label of the new task card
     * @param text the text in the new task card
     */
    Board.prototype.generateTaskCard = function (listID, label, text) {
        this.lists[listID].addTask(label, text);
    }; // end generateTaskCard
    /**
     * Removes a task card from a specified list.
     * @param listID the ID we are removing a card from.
     * @param cardID the ID of the card we are removing.
     */
    Board.prototype.removeTaskCard = function (listID, cardID) {
        this.lists[listID].removeTaskCard(cardID);
    }; // end removeTaskCard
    /**
     * Removes the specified list.
     * @param listID the ID of a list we are trying to remove
     */
    Board.prototype.removeList = function (listID) {
        this.lists.splice(listID, 1);
    }; // end removeList
    /**
     * adds a new list using the ListFactory
     *
     * @param {ListOption} option the type of list we want to generate
     */
    Board.prototype.addListTemplate = function (option) {
        this.lists.push(this.listFactory.generateList(option));
    }; // end addListTemplate
    /**
     * Loads in a list of lists into the 'lists' attribute in board.
     * @param board the board to be loaded into the screen
     */
    Board.prototype.loadBoard = function (board) {
        var nlist;
        this.lists = [];
        this.title = board.title;
        for (var _i = 0, _a = board.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            nlist = this.listFactory.generateList(null);
            nlist.loadList(list);
            this.lists.push(nlist);
        } // end for
    }; // end loadLists
    return Board;
}()); // end Board
exports.Board = Board;
