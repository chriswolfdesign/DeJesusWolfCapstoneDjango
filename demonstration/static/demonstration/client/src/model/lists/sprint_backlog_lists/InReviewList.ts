/**
 * in_review_list.js
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {List} from '../List';

export class InReviewList {
  // Constructor deliberately left out

  /**
   * generates an In Review List for Sprint Backlog board
   *
   * @return {List} an InReviewList
   */
  generateList(): List {
    return new List('In Review');
  } // end generateList
} // end InReviewList