/**
 * could_list.js
 *
 * A class that will generate a Should Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import {List} from '../List';

export class CouldList {
  // Constructor deliberately left out

  /**
   * generates a Could Have List for MoSCoW board
   *
   * @return {List} a Could Have List
   */
  generateList(): List {
    return new List('Could');
  } // end generateList
} // end CouldList
