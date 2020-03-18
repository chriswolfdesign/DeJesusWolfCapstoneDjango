/**
 * moscow_list_factory.js
 *
 * The JavaScript class that will allows us to easily autogenerate template
 * lists for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {MoscowListOptions} from '../enums/MoscowListOptions';
import {List} from '../lists/List';
import {MustList} from '../lists/moscow_lists/MustList';
import {ShouldList} from '../lists/moscow_lists/ShouldList';
import {CouldList} from '../lists/moscow_lists/CouldList';
import {WontList} from '../lists/moscow_lists/WontList';
import {ListFactory} from './ListFactory';

export class MoscowListFactory extends ListFactory {

  constructor() {
    super();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {MoscowListOptions} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the users preferences
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