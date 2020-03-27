/**
 * task_card.js
 *
 * The JavaScript class that represents a Task Card in our Agile Development
 * Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import { MoscowStatus } from "./enums/MoscowStatus";
import { BacklogStatus } from "./enums/BacklogStatus";

export class TaskCard {
  private label: string;
  private text: string;
  private moscowStatus: MoscowStatus;
  private backlogStatus: BacklogStatus;

  /**
   * Generates the TaskCard object
   *
   * @param {string} label the label representing this task card
   * @param {string} text the text this task card should display
   * @param {MoscowStatus} moscowStats the card's Moscow status
   * @param {BacklogStatus} backlogStatus the card's Backlog status
   */
  constructor(label: string, text: string, moscowStatus: MoscowStatus, 
    backlogStatus: BacklogStatus) {
    this.label = label;
    this.text = text;
    this.moscowStatus = moscowStatus;
    this.backlogStatus = backlogStatus;
  } // end constructor

  setText(text: string) {
    this.text = text;
  } // end setText

  getLabel(): string {
    return this.label;
  } // end getLabel

  getText(): string {
    return this.text;
  } // end getText

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

  loadTaskCard(taskcard: TaskCard) {
    this.label = taskcard.label;
    this.text = taskcard.text;
    this.moscowStatus = taskcard.moscowStatus;
    this.backlogStatus = taskcard.backlogStatus;
  } // end loadTaskCard
} // end class
