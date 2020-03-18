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

import { BoardFactory } from './factories/BoardFactory';
import { Board } from './boards/Board';
import { Controller } from '../controller/Controller';
import { BoardOptions } from './enums/BoardOptions';
import { ListOptions } from './enums/ListOptions';

export class Model {
  private title: string;
  private boards: Board[];
  private boardFactory: BoardFactory;
  private controller: Controller;

  /**
   * Generates the foundation for the app
   *
   * @param {String} the title of this board
   */
  constructor(title) {
    this.title = title;
    this.boards = [];
    this.boardFactory = new BoardFactory();
  } // end constructor

  getTitle(): string {
    return this.title;
  }

  /**
   * Generates a board from a template based on user preference
   *
   * @param option
   */
  generateBoardTemplate(option: BoardOptions): void {
    this.boards.push(this.boardFactory.generateBoard(option));
  } // end generateBoardTemplate

  /**
   * Removes a board from the list of boards.
   *
   * @param {number} boardID the id of the to be removed
   */
  removeBoard(boardID: number): void {
    this.boards.splice(boardID, 1);
  } // end removeBoard

  /**
   * Generates a list with the title and color provided in the board specified by the Controller.
   *
   * @param {number} boardID the id of the board we are trying to add a list into.
   * @param {string} label the name of the list being generated
   * @param {colors} color the color of the list being generated
   */
  generateList(boardID: number, label: string): void {
    this.boards[boardID].addList(label);
  } // end generateList

  /**
   * Generates a list based on the template given, to the specified board
   *
   * @param {number} boardID the id of the baord we are trying to add a list into
   * @param {option} option the type of list we are trying to create
   */
  generateListTemplate(boardID: number, option: ListOptions): void {
    this.boards[boardID].addListTemplate(option);
  } // end generateListTemplate

  /**
   * Removes a list from a specified board.
   * @param {number} boardID the ID of the board from whom we want to remove a list from
   * @param {number} listID the ID of the list we are removing
   */
  removeList(boardID: number, listID: number): void {
    this.boards[boardID].removeList(listID);
  } // end removeList

  /**
   * Generates a card within a board's list
   *
   * @param {number} boardID
   * @param {number} listID
   * @param {string} label
   * @param {string} text
   *
   */
  generateTaskCard(boardID: number, listID: number, label: string, text: string): void {
    this.boards[boardID].generateTaskCard(listID, label, text);
  } // end generateTaskCard

  /**
   * Remove a task card from the specified list from a specified board.
   * @param {integer} listID the ID of the list we're removing a card from.
   * @param {integer} taskID the ID of the card we're removing.
   */
  removeTaskCard(listID: number, taskID: number): void {
    this.boards[0].removeTaskCard(listID, taskID);
  } // end removeTaskCard

  /**
   * Sets the controller of this app.
   *
   * @param {controller} Controller the controller that will send commands to this app.
   */
  setController(controller: Controller): void {
    this.controller = controller;
  } // end setController

  /**
   * Loads a board given to it by the controller.
   * @param {model} model board to be loaded 
   */
  loadBoards(model: Model) {
    this.title = model.title;
    let nboard: Board;
    this.boards = [];
    for (let board of model.boards) {
      nboard = this.boardFactory.generateBoard(BoardOptions.MOSCOW);
      nboard.loadBoard(board);
      this.boards.push(nboard);
    } // end for
  } // end loadBoards

  getBoards(): Board[] {
    return this.boards;
  } // end getBoards
} // end App
