"use strict";
/**
 * board_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * boards for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var BoardOptions_1 = require("../enums/BoardOptions");
var MoscowBoard_1 = require("../boards/MoscowBoard");
var SprintBacklogBoard_1 = require("../boards/SprintBacklogBoard");
var BoardFactory = /** @class */ (function () {
    function BoardFactory() {
        this.moscowBoard = new MoscowBoard_1.MoscowBoard();
        this.sprintBoard = new SprintBacklogBoard_1.SprintBacklogBoard();
    } // end constructor
    /**
     * generates a board based on the parameter passed in
     *
     * @param {BoardOptions} option the type of the board the user wants generated
     *
     * @return {Board} a board based on user preference
     */
    BoardFactory.prototype.generateBoard = function (option) {
        switch (option) {
            case BoardOptions_1.BoardOptions.MOSCOW:
                return this.moscowBoard.generateBoard();
            case BoardOptions_1.BoardOptions.SPRINT:
                return this.sprintBoard.generateBoard();
            default:
                return null;
        } // end switch case
    }; // end generateBoard
    return BoardFactory;
}()); // end BoardFactory
exports.BoardFactory = BoardFactory;
