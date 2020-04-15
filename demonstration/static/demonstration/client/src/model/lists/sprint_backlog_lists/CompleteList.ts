/**
 * complete_list.js
 *
 * A class that will generate a Complete List for a Sprint Backlog board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class CompleteList {
  // Constructor deliberately left out

  /**
   * generates a Complete List for Sprint Backlog board
   *
   * @return {List} a Complete List
   */
  generateList(): List {
    return new List('Complete', MoscowStatus.UNASSIGNED, BacklogStatus.COMPLETE);
  } // end generateList
} // end CompleteList