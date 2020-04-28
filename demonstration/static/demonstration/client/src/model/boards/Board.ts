/**
 * Board.ts
 *
 * A class to represent a board in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

import { List } from '../lists/List';
import { ListFactory } from '../factories/ListFactory';
import { ListOptions } from '../enums/ListOptions';
import { MoscowStatus } from '../enums/MoscowStatus';
import { BacklogStatus } from '../enums/BacklogStatus';

export class Board {

  /**********
   * Fields *
   **********/

  /** The title of the board */
  private title: string;
  /** The lists inside this board */
  private lists: List[];
  /** A factory class to conveniently generate lists */
  private listFactory: ListFactory;

  /****************
   * Constructors *
   ****************/

  /**
   * Generates the board object
   * @param title the title of the board
   */
  constructor(title: string) {
    this.title = title;
    this.lists = [];
    this.listFactory = new ListFactory();
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Getter for the board's title
   * @return the title of this board
   */
  getTitle(): string {
    return this.title;
  } // end getTitle

  /**
   * Getter for the board's lists
   * @return this board's lists
   */
  getLists(): List[] {
    return this.lists;
  } // end getLists

  /***********
   * Setters *
   ***********/

  /**
   * sets listFactory to something more specific
   * @param factory the new factory
   */
  setListFactory(factory: ListFactory) {
    this.listFactory = factory;
  } // end setListFactory

  /**********************
   * Additional methods *
   **********************/

  /**
   * adds a new list to our board
   * @param label the label for our new list
   * @param color the optional color value for our list
   */
  addList(label: string) {
    this.lists.push(new List(label, MoscowStatus.UNASSIGNED, BacklogStatus.NONE));
  } // end addList

  /**
   * Creates a task card within the specified list.
   * @param listID the list of we are trying to add a card to
   * @param label the label of the new task card
   * @param text the text in the new task card
   */
  generateTaskCard(listID: number, label: string, text: string) {
    this.lists[listID].addTask(label, text);
  } // end generateTaskCard

  /**
   * Removes a task card from a specified list.
   * @param listID the ID we are removing a card from.
   * @param cardID the ID of the card we are removing.
   */
  removeTaskCard(listID: number, cardID: number) {
    this.lists[listID].removeTaskCard(cardID);
  } // end removeTaskCard

  /**
   * Removes the specified list.
   * @param listID the ID of a list we are trying to remove
   */
  removeList(listID: number) {
    this.lists.splice(listID, 1);
  } // end removeList

  /**
   * adds a new list using the ListFactory
   *
   * @param {ListOption} option the type of list we want to generate
   */
  addListTemplate(option: ListOptions) {
    this.lists.push(this.listFactory.generateList(option));
  } // end addListTemplate

  /**
   * Loads in a list of lists into the 'lists' attribute in board.
   * @param board the board to be loaded into the screen
   */
  loadBoard(board: Board) {
    let nlist: List;
    this.lists = [];
    this.title = board.title;

    for (let list of board.lists) {
      nlist = this.listFactory.generateList(null);
      nlist.loadList(list);
      this.lists.push(nlist);
    } // end for
  } // end loadLists

} // end Board

