/**
 * Holds and allows for the manipulation of Boards.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 0.0.0
 */

import { BoardFactory } from './factories/BoardFactory';
import { Board } from './boards/Board';
import { BoardOptions } from './enums/BoardOptions';
import { ListOptions } from './enums/ListOptions';
import { TaskCard } from './TaskCard';
import { List } from './lists/List';
import { MoscowStatus } from './enums/MoscowStatus';
import { BacklogStatus } from './enums/BacklogStatus';

export class Project {
  private title: string;
  private boards: Board[];
  private taskCards: TaskCard[];
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
    this.taskCards = [];
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

  /**
   * gets the board that should be currently shown on the user's browser
   * 
   * @return the current board on screen
   */
  getActiveBoard(): Board {
    return this.boards[this.activeBoardIndex];
  } // end getActiveBoard

  /**
   * gets the index of the board that be currently shown on the user's browser
   * 
   * @return the index for the current board on screen
   */
  getActiveBoardIndex(): number {
    return this.activeBoardIndex;
  } // end getActiveBoardIndex

  /**
   * change the board that is currently displayed on the user's browser
   * 
   * @param index the index for the board we wish to display on screen
   */
  setActiveBoardIndex(index: number): void {
    this.activeBoardIndex = index;
  } // end setActiveBoardIndex

  getTasks(): TaskCard[] {
    return this.taskCards;
  } // end getTasks

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
   * @param {number} listID the index of the list the task card will be added to
   * @param {string} text the text for the task card once it is generated
   *
   */
  generateTaskCard(listID: number, text: string)
    : void {
    let label: string = this.generateNextCardLabel();
    let listToAddTo: List = this.getActiveBoard().getLists()[listID];

    // find the new moscowStatus and backlogStatus
    let moscowStatus: MoscowStatus = listToAddTo.getMoscowStatus();
    let backlogStatus: BacklogStatus = listToAddTo.getBacklogStatus();

    // // if on the backlogBoard, give a default of UNASSIGNED
    if (moscowStatus == MoscowStatus.NONE) {
      moscowStatus = MoscowStatus.UNASSIGNED;
    } // end if

    // if on the moscowBoard, give a default of UNASSIGNED
    if (backlogStatus == BacklogStatus.NONE) {
      backlogStatus = BacklogStatus.UNASSIGNED;
    } // end if

    this.taskCards.push(new TaskCard(label, text, moscowStatus, backlogStatus));

    // increment so the next card generated will be next on the list
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
    }); // end for-each

    return acronym;
  }  // end makeProjectAcronym

  /**
   * Remove a task card from the specified list from a specified board.
   * 
   * @string taskLabel the label of the task card to be removed
   */
  removeTaskCard(taskLabel: string) {
    for (let i = 0; i < this.taskCards.length; i++) {
      if (this.taskCards[i].getLabel() === taskLabel) {
        this.taskCards.splice(i, 1);
        return;
      } // end if
    } // end for
  } // end removeTaskCard

  /**
   * Loads a board given to it by the controller.
   * @param {Project} project project to be loaded
   */
  loadProject(project: Project) {
    this.title = project.title;
    this.activeBoardIndex = 0;
    this.nextCardNumber = project.nextCardNumber;
    let nboard: Board;
    let ntaskCard: TaskCard;
    this.boards = [];
    for (let board of project.boards) {
      nboard = this.boardFactory.generateBoard(BoardOptions.MOSCOW);
      nboard.loadBoard(board);
      this.boards.push(nboard);

    }
    this.taskCards = [];
    for (let taskCard of project.taskCards) {
      ntaskCard = new TaskCard("", "", MoscowStatus.MUST, BacklogStatus.BACKLOG);
      ntaskCard.loadTaskCard(taskCard);
      this.taskCards.push(ntaskCard);
    } // end for
  } // end loadBoards

  getBoards(): Board[] {
    return this.boards;
  } // end getBoards
}//end of Project