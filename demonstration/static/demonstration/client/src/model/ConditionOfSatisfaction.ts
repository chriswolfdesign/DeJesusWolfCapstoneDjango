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
  private text: string;
  private complete: boolean;

  constructor(text: string) {
    this.text = text;
    this.complete = false;
  } // end constructor

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

  getText(): string {
    return this.text;
  } // end getText

  /**
   * Returns whether or not this condition of satisfaction is complete
   * 
   * @return true if completed, false otherwise
   */
  isComplete(): boolean {
    return this.complete;
  } // end isComplete

  load(condition: ConditionOfSatisfaction) {
    this.text = condition.text;
    this.complete = condition.complete;
  }
} // end class