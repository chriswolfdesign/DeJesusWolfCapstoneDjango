/**
 * list.js
 *
 * The JavaScript class that behaves as a List on our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import { TaskCard } from '../TaskCard';

export class List {
  private label: string;
  private tasks: TaskCard[];

  /**
   * Generates the List object
   *
   * @param {string} label the label for the this list
   * @param {Colors} color the background color of this list
   */
  constructor(label: string) {
    this.label = label;
    this.tasks = [];
  } // end constructor

  getLabel(): string {
    return this.label;
  } // end getLabel

  setLabel(label: string) {
    this.label = label;
  }

  getTasks(): TaskCard[] {
    return this.tasks;
  } // end getTasks

  /**
   * adds a new task card to the tasks field
   *
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  addTask(label: string, text: string): void {
    this.tasks.push(new TaskCard(label, text));
  } // end addTask

  /**
   * Removes a task card from the tasks field
   *
   * @param {number} cardID the ID of the being removed.
   */
  removeTaskCard(cardID: number): void {
    this.tasks.splice(cardID, 1);
  } // end removeTaskCard


  /**
   * loads the list into the board
   *
   * @param {List} list -- the list to be loaded into the board
   */
  loadList(list: List) {
    this.label = list.label;
    let ntask;
    this.tasks = [];

    for (let task of list.tasks) {
      ntask = new TaskCard("", "");
      ntask.loadTaskCard(task);
      this.tasks.push(ntask)
    } // end for
  } // end loadList
} // end List
