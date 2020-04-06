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
import { MoscowStatus } from '../enums/MoscowStatus';
import { BacklogStatus } from '../enums/BacklogStatus';

export class List {
  private label: string;
  private tasks: TaskCard[];
  private moscowStatus: MoscowStatus;
  private backlogStatus: BacklogStatus;

  /**
   * Generates the List object
   *
   * @param {string} label the label for the this list
   * @param {Colors} color the background color of this list
   * @param {MoscowStatus} moscowStatus the Moscow status of this list
   * @param {BacklogStatus} backlogStatus the Backlog status of this list
   */
  constructor(label: string, moscowStatus: MoscowStatus,
    backlogStatus: BacklogStatus) {
    this.label = label;
    this.tasks = [];
    this.moscowStatus = moscowStatus;
    this.backlogStatus = backlogStatus;
  } // end constructor

  getLabel(): string {
    return this.label;
  } // end getLabel

  setLabel(label: string) {
    this.label = label;
  } // end setLabel

  getTasks(): TaskCard[] {
    return this.tasks;
  } // end getTasks

  getMoscowStatus(): MoscowStatus {
    return this.moscowStatus;
  } // end getMoscowStatus

  setMoscowStatus(moscowStatus: MoscowStatus) {
    this.moscowStatus = moscowStatus;
  } // end setMoscowStatus

  getBacklogStatus(): BacklogStatus {
    return this.backlogStatus;
  } // end getBacklogStatus

  setBacklogStatus(backlogStatus: BacklogStatus) {
    this.backlogStatus = backlogStatus;
  } // end setBacklogStatus

  /**
   * adds a new task card to the tasks field
   *
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  addTask(label: string, text: string): void {
    this.tasks.push(new TaskCard(label, text, this.moscowStatus,
      this.backlogStatus));
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
    this.moscowStatus = list.moscowStatus;
    this.backlogStatus = list.backlogStatus;
    let ntask;
    this.tasks = [];

    for (let task of list.tasks) {
      ntask = new TaskCard("", "", this.moscowStatus, this.backlogStatus);
      ntask.loadTaskCard(task);
      this.tasks.push(ntask)
    } // end for
  } // end loadList
} // end List
