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
import { ConditionOfSatisfaction } from "./ConditionOfSatisfaction";

export class TaskCard {

  private label: string;
  private text: string;
  private conditionsOfSatisfaction: ConditionOfSatisfaction[];
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
    this.conditionsOfSatisfaction = [];
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

  getNumberOfConditions(): number {
    return this.conditionsOfSatisfaction.length;
  } // end getNumberOfConditions

  /**
   * Gets the number of conditions of satisfaction that have been completed
   * for this card
   * 
   * @return the number of conditions of satisfaction that have been completed
   */
  getNumberOfCompletedConditions(): number {
    let completed = 0;

    for (let i = 0; i < this.getNumberOfConditions(); i++) {
      if(this.conditionsOfSatisfaction[i].isComplete()) {
        completed++;
      } // end if
    } // end for

    return completed;
  } // end getNumberOfCompletedConditions

  getConditionsStats(): string {
    return this.getNumberOfCompletedConditions() + '/' + 
      this.getNumberOfConditions();
  } // end getConditionsStats

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

  getConditionsOfSatisfaction(): ConditionOfSatisfaction[] {
    return this.conditionsOfSatisfaction;
  } // end getConditionsOfSatisfaction

  /**
   * Adds a condition of satisfaction to the task card
   * 
   * @param text the text for the condition of satisfaction
   */
  addConditionOfSatisfaction(text: string) {
    this.conditionsOfSatisfaction.push(new ConditionOfSatisfaction(text));
  }

  loadTaskCard(taskcard: TaskCard) {
    this.label = taskcard.label;
    this.text = taskcard.text;
    this.moscowStatus = taskcard.moscowStatus;
    this.backlogStatus = taskcard.backlogStatus;
  } // end loadTaskCard
} // end class
