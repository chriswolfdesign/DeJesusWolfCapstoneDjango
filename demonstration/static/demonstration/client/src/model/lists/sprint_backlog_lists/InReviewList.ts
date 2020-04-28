/**
 * InReviewList.ts
 *
 * A class that will generate an In Review list for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class InReviewList {
  // Constructor deliberately left out

  /**
   * generates an In Review List for Sprint Backlog board
   * @return an InReview list
   */
  generateList(): List {
    return new List('In Review', MoscowStatus.NONE, BacklogStatus.IN_REVIEW);
  } // end generateList
} // end InReviewList