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

export class TaskCard {
  private label: string;
  private text: string;

  /**
   * Generates the TaskCard object
   *
   * @param {string} label the label representing this task card
   * @param {string} text the text this task card should display
   */
  constructor(label, text) {
    this.label = label;
    this.text = text;
  } // end constructor

  setText(text: string) {
    this.text = text;
  } // end setText

  getLabel() {
    return this.label;
  } // end getLabel

  getText() {
    return this.text;
  } // end getText

  loadTaskCard(taskcard: TaskCard) {
    this.label = taskcard.label;
    this.text = taskcard.text;
  }
} // end class
