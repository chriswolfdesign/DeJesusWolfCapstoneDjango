/**
 * Holds and allows for the manipulation of Boards.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 0.0.0
 */


import {BoardFactory} from './factories/BoardFactory';
import {Board} from './boards/Board';
import {BoardOptions} from './enums/BoardOptions';
import {ListOptions} from './enums/ListOptions';

export class Project {
  private title: string;
  private boards: Board[];
  private boardFactory: BoardFactory;
  private activeBoardIndex: number;
  private nextCardNumber: number;

  /**
   * Generates the foundation for the app
   *
   * @param {String} title -- the title of this board
   */
  constructor(title) {
    this.title = title;
    this.boards = [];
    this.boardFactory = new BoardFactory();
    this.boards.push(this.boardFactory.generateBoard(BoardOptions.MOSCOW));
    this.boards.push(this.boardFactory.generateBoard(BoardOptions.SPRINT));
    this.activeBoardIndex = 0;  // which board should display upon opening the project
    this.nextCardNumber = 1;
  } // end constructor

  getTitle(): string {
    return this.title;
  }

  getBoardTitle(boardID: number) {
    return this.boards[boardID].getTitle();
  }

  getActiveBoard(): Board {
    return this.boards[this.activeBoardIndex];
  }

  getActiveBoardIndex(): number {
      return this.activeBoardIndex;
  }

  setActiveBoardIndex(index: number): void {
    this.activeBoardIndex = index;
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
   * @param {number} listID
   * @param {string} text
   *
   */
  generateTaskCard(listID: number, text: string)
    : void {
    let label: string = this.generateNextCardLabel();
    this.getActiveBoard().generateTaskCard(listID, label, text);
    this.nextCardNumber++;
  } // end generateTaskCard

  /**
   * Generates the label for the next card to be created
   *
   * @return {string} -- the label of the card being created
   */
  generateNextCardLabel(): string {
    return this.makeProjectAcronym() + this.nextCardNumber;
  } // end generateNextCardLabel

  /**
   * Creates an acronym for the project
   *
   * @return {string} -- the acronym for the project
   */
  makeProjectAcronym(): string {
    let words: string[] = this.title.split(' ');
    let acronym: string = '';
    words.forEach((word) => {
      acronym += word[0].toLowerCase();
    });

    return acronym;
  }  // end makeProjectAcronym

  /**
   * Remove a task card from the specified list from a specified board.
   * @param {integer} listID the ID of the list we're removing a card from.
   * @param {integer} taskID the ID of the card we're removing.
   */
  removeTaskCard(boardID: number, listID: number, taskID: number): void {
    this.boards[boardID].removeTaskCard(listID, taskID);
  } // end removeTaskCard

  /**
   * Loads a board given to it by the controller.
   * @param {Project} project project to be loaded
   */
  loadProject(project: Project) {
    this.title = project.title;
    let nboard: Board;
    this.boards = [];
    for (let board of project.boards) {
      nboard = this.boardFactory.generateBoard(BoardOptions.MOSCOW);
      nboard.loadBoard(board);
      this.boards.push(nboard);
    } // end for
  } // end loadBoards

  getBoards(): Board[] {
    return this.boards;
  } // end getBoards
}//end of Project