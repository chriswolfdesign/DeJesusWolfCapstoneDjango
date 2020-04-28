/**
 * CouldList.ts
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class CouldList {
  // Constructor deliberately left out

  /**
   * generates a Could Have List for MoSCoW board
   *
   * @return a CouldHave list
   */
  generateList(): List {
    return new List('Could', MoscowStatus.COULD, BacklogStatus.NONE);
  } // end generateList
} // end CouldList
