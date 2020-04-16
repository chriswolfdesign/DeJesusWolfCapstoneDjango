/**
 * UnassignedSprintBacklogList.ts
 *
 * A class that will generate a list for cards that have not been assigned
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (April 15, 2020)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class UnassignedSprintBacklogList {
  // Constructor deliberately left out

  /**
   * generates a Backlog LIst for Sprint Backlog board
   *
   * @return {List} a Backlog List
   */
  generateList(): List {
    return new List('Unassigned', MoscowStatus.NONE, BacklogStatus.UNASSIGNED);
  } // end generateList
} // end BacklogList