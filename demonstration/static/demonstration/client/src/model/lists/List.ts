/**
 * List.ts
 *
 * The class that behaves as a List on our Agile Development
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

  /**********
   * Fields *
   **********/

  /** The label of this list */
  private label: string;
  /** The list of tasks for this list */
  private tasks: TaskCard[];
  /** The Moscow status of this list (Must/Could/etc.) */
  private moscowStatus: MoscowStatus;
  /** The Backlog status of this list (Backlog/In Progress/etc.) */
  private backlogStatus: BacklogStatus;

  /****************
   * Constructors *
   ****************/

  /**
   * Generates the List object
   * @param label the label for the this list
   * @param moscowStatus the Moscow status of this list
   * @param backlogStatus the Backlog status of this list
   */
  constructor(label: string, moscowStatus: MoscowStatus,
    backlogStatus: BacklogStatus) {
    this.label = label;
    this.tasks = [];
    this.moscowStatus = moscowStatus;
    this.backlogStatus = backlogStatus;
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Getter for the label
   * @return the label of this list
   */
  getLabel(): string {
    return this.label;
  } // end getLabel

  /**
   * Getter for the task cards
   * @return task cards for this list
   */
  getTasks(): TaskCard[] {
    return this.tasks;
  } // end getTasks

  /**
   * Getter for the MoscowStatus
   * @return the Moscow status of this list
   */
  getMoscowStatus(): MoscowStatus {
    return this.moscowStatus;
  } // end getMoscowStatus

  /**
   * Getter for the BacklogStatus
   * @return the Backlog status of this list
   */
  getBacklogStatus(): BacklogStatus {
    return this.backlogStatus;
  } // end getBacklogStatus

  /***********
   * Setters *
   ***********/

  /**
   * Sets the label
   * @param label the new label for this list
   */
  setLabel(label: string) {
    this.label = label;
  } // end setLabel

  /**
   * Sets the Moscow status
   * @param moscowStatus the new Moscow status for this list
   */
  setMoscowStatus(moscowStatus: MoscowStatus) {
    this.moscowStatus = moscowStatus;
  } // end setMoscowStatus

  /**
   * Sets the Backlog status
   * @param backlogStatus the new Backlog status for this list
   */
  setBacklogStatus(backlogStatus: BacklogStatus) {
    this.backlogStatus = backlogStatus;
  } // end setBacklogStatus

  /**********************
   * Additional methods *
   **********************/

  /**
   * adds a new task card to the tasks field
   * @param label the label for the new task card
   * @param text the text for the new task card
   */
  addTask(label: string, text: string): void {
    this.tasks.push(new TaskCard(label, text, this.moscowStatus,
      this.backlogStatus));
  } // end addTask

  /**
   * Removes a task card from the tasks field
   * @param cardID the ID of the being removed.
   */
  removeTaskCard(cardID: number): void {
    this.tasks.splice(cardID, 1);
  } // end removeTaskCard

  /**
   * loads the list into the board
   * @param list the list to be loaded into the board
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
