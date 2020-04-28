/**
 * MoscowListFactory.ts
 *
 * The class that will allows us to easily autogenerate template
 * lists for a MoSCoW board
 *
 * NOTE: This file currently is not used.  It is still here in case
 *       any future capstone students may find it useful
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {ListFactory} from './ListFactory';

export class MoscowListFactory extends ListFactory {

  /**
   * Generates a MoscowListFactory
   */
  constructor() {
    super();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   * @param option the type of list the user wants generated
   * @return a list set up based on the users preferences
   */
  // generateList(option: MoscowListOptions): List {
  //   switch (option) {
  //   case MoscowListOptions.MUST:
  //     return this.getMustList().generateList();
  //   case MoscowListOptions.SHOULD:
  //     return this.getShouldList().generateList();
  //   case MoscowListOptions.COULD:
  //     return this.getCouldList().generateList();
  //   case MoscowListOptions.WONT:
  //     return this.getWontList().generateList();
  //   default:
  //     return null;
  //   } // end switch
  // } // end generateList
} // end MoscowListFactory