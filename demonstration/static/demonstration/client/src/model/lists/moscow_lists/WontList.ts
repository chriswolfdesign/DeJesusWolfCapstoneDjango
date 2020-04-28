/**
 * WontList.ts
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import {List} from '../List';
import { MoscowStatus } from '../../enums/MoscowStatus';
import { BacklogStatus } from '../../enums/BacklogStatus';

export class WontList {
  // Constructor deliberately left out

  /**
   * generates a Wont Have List for MoSCoW board
   * @return a WontHave list
   */
  generateList(): List {
    return new List('Wont', MoscowStatus.WONT, BacklogStatus.NONE);
  } // end generateList
} // end WontList
