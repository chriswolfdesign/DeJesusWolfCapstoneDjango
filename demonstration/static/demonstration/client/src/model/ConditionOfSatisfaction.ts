/**
 * ConditionOfSatisfaction.ts
 * 
 * Represents a condition of satisfaction for a task
 * 
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 1.0.0 (March 30, 2020)
 */

export class ConditionOfSatisfaction {

  /**********
   * Fields *
   **********/

  /** The text for this Condition of Satisfaction */
  private text: string;
  /** True if this COS is complete, false otherwise */
  private complete: boolean;

  /****************
   * Constructors *
   ****************/

  /**
   * Generates a new Condition of Satisfaction
   * @param text the text for this COS
   */
  constructor(text: string) {
    this.text = text;
    this.complete = false;
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Gets the text for this COS
   * @return the text for this COS
   */
  getText(): string {
    return this.text;
  } // end getText

  /**
   * Getter for this COS
   * @return true if COS is completed, false otherwise
   */
  isComplete(): boolean {
    return this.complete;
  } // end isComplete

  /***********
   * Setters *
   ***********/

  /**
   * Sets this condition of satisfaction to complete
   */
  setComplete() {
    this.complete = true;
  } // end setComplete

  /**
   * Sets this condition of satisfaction to incomplete
   */
  setIncomplete() {
    this.complete = false;
  } // setIncomplete

  /**********************
   * Additional methods *
   **********************/

  /**
   * loads this condition of satisfaction to the board
   * @param condition the COS to be loaded into the board
   */
  load(condition: ConditionOfSatisfaction) {
    this.text = condition.text;
    this.complete = condition.complete;
  }
} // end class