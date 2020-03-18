/**
 * backlog_list.js
 *
 * A class that will generate a Backlog list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {List} from '../List';

export class BacklogList {
  // Constructor deliberately left out

  /**
   * generates a Backlog LIst for Sprint Backlog board
   *
   * @return {List} a Backlog List
   */
  generateList(): List {
    return new List('Backlog');
  } // end generateList
} // end BacklogList