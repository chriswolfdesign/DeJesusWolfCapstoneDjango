/**
 * should_list.js
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

export class ShouldList {
  // Constructor deliberately left out

  /**
   * generates a Should Have List for MoSCoW board
   *
   * @return {List} a Should Have List
   */
  generateList(): List {
    return new List('Should', MoscowStatus.SHOULD, BacklogStatus.NONE);
  } // end generateList
} // end MustList
