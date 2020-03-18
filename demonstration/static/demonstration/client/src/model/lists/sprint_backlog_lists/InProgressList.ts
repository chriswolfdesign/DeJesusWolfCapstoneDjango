/**
 * in_progress_list.js
 *
 * A class that will generate an In Progress list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {List} from '../List';

export class InProgressList {
  // Constructor deliberately left out

  /**
   * generates an In Progress List for Sprint Backlog board
   *
   * @return {List} an In Progress List
   */
  generateList(): List {
    return new List('In Progress');
  } // end generateList
} // end InProgressList