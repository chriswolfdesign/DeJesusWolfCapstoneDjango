/**
 * UnassignedMoscowList.ts
 *
 * A class that will generate a list for MoSCoW cards that have not yet been assigned.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (April 15, 2020)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class UnassignedMoscowList {
  // Constructor deliberately left out

  /**
   * generates an Unassigned List for MoSCoW board
   *
   * @return {List} a Must Have List
   */
  generateList(): List {
    return new List('Unassigned', MoscowStatus.UNASSIGNED, BacklogStatus.NONE);
  } // end generateList
} // end MustList
