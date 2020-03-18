/**
 * sprint_backlog_list_factory.js
 *
 * The JavaScript class that will allow us to easily autogenerate template
 * lists for a Sprint Backlog Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {SprintBacklogListOptions} from '../enums/SprintBacklogListOptions';
import {List} from '../lists/List';
import {BacklogList} from '../lists/sprint_backlog_lists/BacklogList';
import {InProgressList} from '../lists/sprint_backlog_lists/InProgressList';
import {InReviewList} from '../lists/sprint_backlog_lists/InReviewList';
import {CompleteList} from '../lists/sprint_backlog_lists/CompleteList';
import {ListFactory} from './ListFactory';

export class SprintBacklogListFactory extends ListFactory {

  constructor() {
    super();
  } // end constructor

  /**
   * generates a list based on the parameter passed in
   *
   * @param {SprintBacklogListOptions} option the type of list the user wants generated
   *
   * @return {List} a list set up based on the user's preferences
   */
//   generateList(option: SprintBacklogListOptions): List {
//     switch (option) {
//     case SprintBacklogListOptions.BACKLOG:
//       return this.getBacklogList().generateList();
//     case SprintBacklogListOptions.INPROGRESS:
//       return this.getInProgressList().generateList();
//     case SprintBacklogListOptions.INREVIEW:
//       return this.getInReviewList().generateList();
//     case SprintBacklogListOptions.COMPLETE:
//       return this.getCompleteList().generateList();
//     default:
//       return null;
//     } // end switch
//   } // end generateList
} // end SprintBacklogListFactory
