/**
 * must_list.js
 *
 * A class that will generate a Must Have List for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import {List} from '../List';

export class MustList {
  // Constructor deliberately left out

  /**
   * generates a Must Have List for MoSCoW board
   *
   * @return {List} a Must Have List
   */
  generateList(): List {
    return new List('Must');
  } // end generateList
} // end MustList
