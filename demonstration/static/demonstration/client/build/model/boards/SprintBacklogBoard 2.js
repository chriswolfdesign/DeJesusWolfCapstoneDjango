"use strict";
/**
 * sprint_backlog_board.js
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
exports.__esModule = true;
var Board_1 = require("./Board");
var SprintBacklogListFactory_1 = require("../factories/SprintBacklogListFactory");
var ListOptions_1 = require("../enums/ListOptions");
var SprintBacklogBoard = /** @class */ (function () {
    function SprintBacklogBoard() {
    }
    /**
     * generates a Sprint Backlog Board
     *
     * @return {Board} a SprintBacklogBoard
     */
    SprintBacklogBoard.prototype.generateBoard = function () {
        var board = new Board_1.Board('Project Backlog');
        board.setListFactory(new SprintBacklogListFactory_1.SprintBacklogListFactory());
        board.addListTemplate(ListOptions_1.ListOptions.BACKLOG);
        board.addListTemplate(ListOptions_1.ListOptions.INPROGRESS);
        board.addListTemplate(ListOptions_1.ListOptions.INREVIEW);
        board.addListTemplate(ListOptions_1.ListOptions.COMPLETE);
        return board;
    }; // end generateBoard
    return SprintBacklogBoard;
}()); // end SprintBacklogBoard
exports.SprintBacklogBoard = SprintBacklogBoard;
