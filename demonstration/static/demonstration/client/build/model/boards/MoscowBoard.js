"use strict";
/**
 * moscow_board.js
 *
 * A class that will generate a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */
exports.__esModule = true;
var Board_1 = require("./Board");
var MoscowListFactory_1 = require("../factories/MoscowListFactory");
var ListOptions_1 = require("../enums/ListOptions");
var MoscowBoard = /** @class */ (function () {
    function MoscowBoard() {
    }
    /**
     * generates a MoSCoW Board
     *
     * @return {Board} a MoSCoW Board
     */
    MoscowBoard.prototype.generateBoard = function () {
        var board = new Board_1.Board('MoSCoW Board');
        board.setListFactory(new MoscowListFactory_1.MoscowListFactory());
        board.addListTemplate(ListOptions_1.ListOptions.MUST);
        board.addListTemplate(ListOptions_1.ListOptions.SHOULD);
        board.addListTemplate(ListOptions_1.ListOptions.COULD);
        board.addListTemplate(ListOptions_1.ListOptions.WONT);
        return board;
    }; // end generateBoard
    return MoscowBoard;
}()); // end MoscowBoard
exports.MoscowBoard = MoscowBoard;
