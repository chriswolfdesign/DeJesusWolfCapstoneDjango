/**
 * TaskCard.ts
 *
 * The class that represents a Task Card in our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import { MoscowStatus } from "./enums/MoscowStatus";
import { BacklogStatus } from "./enums/BacklogStatus";
import { ConditionOfSatisfaction } from "./ConditionOfSatisfaction";

export class TaskCard {

  /**********
   * Fields *
   **********/

  /** The label for this task card */
  private label: string;
  /** The title of this task card */
  private title: string;
  /** The description of this task card */
  private text: string;
  /** A list of Conditions of Satisfaction for this task card */
  private conditionsOfSatisfaction: ConditionOfSatisfaction[];
  /** The Moscow status of this task card (Must/Should/etc.) */
  private moscowStatus: MoscowStatus;
  /** The Backlog status of this task card (Backlog/ In Progress/etc.) */
  private backlogStatus: BacklogStatus;

  /****************
   * Constructors  *
   ****************/

  /**
   * Generates the TaskCard object
   * @param label the label representing this task card
   * @param moscowStatus the card's Moscow status
   * @param backlogStatus the card's Backlog status
   */
  constructor(label: string, title: string, moscowStatus: MoscowStatus,
    backlogStatus: BacklogStatus) {
    this.label = label;
    this.title = title;
    this.text = 'Enter description here';
    this.conditionsOfSatisfaction = [];
    this.moscowStatus = moscowStatus;
    this.backlogStatus = backlogStatus;
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Gets the label for this task card
   * @return the label for this task card
   */
  getLabel(): string {
    return this.label;
  } // end getLabel

  /**
   * Sets the text of this task card
   * @param text the next text for this task card
   */
  setText(text: string) {
    this.text = text;
  } // end setText

  /**
   * Gets the description of this task card
   * @return the description of this task card
   */
  getText(): string {
    return this.text;
  } // end getText

  /**
   * Gets the title of this task card
   * @return the title of this task card
   */
  getTitle(): string {
    return this.title;
  } // end getTitle

  /**
   * Gets the number of COS for this task card
   * @return the number of COS for this task card
   */
  getNumberOfConditions(): number {
    return this.conditionsOfSatisfaction.length;
  } // end getNumberOfConditions

  /**
   * Gets the number of conditions of satisfaction that have been completed
   * for this card
   * @return the number of conditions of satisfaction that have been completed
   */
  getNumberOfCompletedConditions(): number {
    let completed = 0;

    for (let i = 0; i < this.getNumberOfConditions(); i++) {
      if (this.conditionsOfSatisfaction[i].isComplete()) {
        completed++;
      } // end if
    } // end for

    return completed;
  } // end getNumberOfCompletedConditions

  /**
   * Gets the ratio of complete to total COS
   * @return the ratio of complete to total COS
   */
  getConditionsStats(): string {
    return this.getNumberOfCompletedConditions() + '/' +
      this.getNumberOfConditions();
  } // end getConditionsStats

  /**
   * Gets the MoscowStatus of this task card
   * @return the MoscowStatus of this task card
   */
  getMoscowStatus(): MoscowStatus {
    return this.moscowStatus;
  } // end getMoscowStatus

  /**
   * Gets the BacklogStatus of this task card
   * @return the BacklogStatus of this task card
   */
  getBacklogStatus(): BacklogStatus {
    return this.backlogStatus;
  } // end getBacklogStatus

  /**
   * Gets the COS for this task card
   * @return the COS for this task card
   */
  getConditionsOfSatisfaction(): ConditionOfSatisfaction[] {
    return this.conditionsOfSatisfaction;
  } // end getConditionsOfSatisfaction

  /***********
   * Setters *
   ***********/

  /**
   * Sets the MoscowStatus of this task card
   * @param moscowStatus the new MoscowStatus of this task card
   */
  setMoscowStatus(moscowStatus: MoscowStatus) {
    this.moscowStatus = moscowStatus;
  } // end setMoscowStatus

  /**
   * Sets the BacklogStatus of this task card
   * @param backlogStatus the new BacklogStatus of this task card
   */
  setBacklogStatus(backlogStatus: BacklogStatus) {
    this.backlogStatus = backlogStatus;
  } // end setBacklogStatus

  /**********************
   * Additional methods *
   **********************/

  /**
   * Adds a condition of satisfaction to the task card
   * @param text the text for the condition of satisfaction
   */
  addConditionOfSatisfaction(text: string) {
    this.conditionsOfSatisfaction.push(new ConditionOfSatisfaction(text));
  } // end addConditionOfSatisfaction

  /**
   * Removes a condition of satisfaction from the task card
   * @param index the index of the COS being removed
   */
  removeConditionOfSatisfaction(index: number) {
    this.conditionsOfSatisfaction.splice(index, 1);
  } // end removeConditionOfSatisfaction

  /**
   * Loads a task card into the board
   * @param taskCard the task card to load into the board
   */
  loadTaskCard(taskCard: TaskCard) {
    this.label = taskCard.label;
    this.title = taskCard.title;
    this.text = taskCard.text;
    this.moscowStatus = taskCard.moscowStatus;
    this.backlogStatus = taskCard.backlogStatus;
    this.conditionsOfSatisfaction = [];

    let cond: ConditionOfSatisfaction;
    for (let condition of taskCard.conditionsOfSatisfaction) {
      cond = new ConditionOfSatisfaction("");
      cond.load(condition);
      this.conditionsOfSatisfaction.push(cond);
    } // end loadTaskCard

  } // end loadTaskCard
} // end class
