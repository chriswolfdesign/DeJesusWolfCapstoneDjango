/**
 * wont_list.js
 *
 * A class that will generate a Wont Have list for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import {List} from '../List';

export class WontList {
  // Constructor deliberately left out

  /**
   * generates a Wont Have List for MoSCoW board
   *
   * @return {List} a Wont Have List
   */
  generateList(): List {
    return new List('Wont');
  } // end generateList
} // end WontList
