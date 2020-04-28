/**
 * ListFactory.ts
 *
 * The class that will allow us to easily autogenerate template
 * lists for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

import { ListOptions } from '../enums/ListOptions';
import { List } from '../lists/List';
import { MustList } from '../lists/moscow_lists/MustList';
import { ShouldList } from '../lists/moscow_lists/ShouldList';
import { CouldList } from '../lists/moscow_lists/CouldList';
import { WontList } from '../lists/moscow_lists/WontList';
import { BacklogList } from '../lists/sprint_backlog_lists/BacklogList';
import { InProgressList } from '../lists/sprint_backlog_lists/InProgressList';
import { InReviewList } from '../lists/sprint_backlog_lists/InReviewList';
import { CompleteList } from '../lists/sprint_backlog_lists/CompleteList';
import { MoscowStatus } from '../enums/MoscowStatus';
import { BacklogStatus } from '../enums/BacklogStatus';
import {UnassignedMoscowList} from "../lists/moscow_lists/UnassignedMoscowList";
import {UnassignedSprintBacklogList} from "../lists/sprint_backlog_lists/UnassignedSprintBacklogList";

export class ListFactory {

  /**********
   * Fields *
   **********/

  /** Assists in generating a MustList */
  private mustList: MustList;
  /** Assists in generating a ShouldList */
  private shouldList: ShouldList;
  /** Assists in generating a CouldList */
  private couldList: CouldList;
  /** Assists in generating a WontList */
  private wontList: WontList;
  /** Assists in generating a BacklogList */
  private backlogList: BacklogList;
  /** Assists in generating an InProgressList */
  private inProgressList: InProgressList;
  /** Assists in generating an InReviewList */
  private inReviewList: InReviewList;
  /** Assists in generating a CompleteList */
  private completeList: CompleteList;
  /** Assists in generating an UnassignedMoscowList */
  private unassignedMoscowList: UnassignedMoscowList;
  /** Assists in generating an UnassignedSprintBacklogList */
  private unassignedSprintBacklogList: UnassignedSprintBacklogList;

  /****************
   * Constructors *
   ****************/

  /**
   * Generates a ListFactory
   */
  constructor() {
    this.mustList = new MustList();
    this.shouldList = new ShouldList();
    this.couldList = new CouldList();
    this.wontList = new WontList();
    this.backlogList = new BacklogList();
    this.inProgressList = new InProgressList();
    this.inReviewList = new InReviewList();
    this.completeList = new CompleteList();
    this.unassignedMoscowList = new UnassignedMoscowList();
    this.unassignedSprintBacklogList = new UnassignedSprintBacklogList();
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Getter for MustList
   * @return the MustList
   */
  getMustList(): MustList {
    return this.mustList;
  } // end getMustList

  /**
   * Getter for the ShouldList
   * @return the ShouldList
   */
  getShouldList(): ShouldList {
    return this.shouldList;
  } // end getShouldList

  /**
   * Getter for the CouldList
   * @return the CouldList
   */
  getCouldList(): CouldList {
    return this.couldList;
  } // end getCouldList

  /**
   * Getter for the WontList
   * @return the WontList
   */
  getWontList(): WontList {
    return this.wontList;
  } // end getWontList

  /**
   * Getter for the BacklogList
   * @return the BacklogList
   */
  getBacklogList(): BacklogList {
    return this.backlogList;
  } // end getBacklogList

  /**
   * Getter for the InProgressList
   * @return the InProgressList
   */
  getInProgressList(): InProgressList {
    return this.inProgressList;
  } // end getInProgressList

  /**
   * Getter for the InReviewList
   * @return the InReviewList
   */
  getInReviewList(): InReviewList {
    return this.inReviewList;
  } // end getInReviewList

  /**
   * Getter for the CompleteList
   * @return the CompleteList
   */
  getCompleteList(): CompleteList {
    return this.completeList;
  } // end getCompleteList

  /**
   * generates a list based on the parameter passed in
   * @param option the type of list the user wants generated
   * @return a list set up based on user preference
   */
  generateList(option: ListOptions): List {
    switch (option) {
      case ListOptions.MUST:
        return this.mustList.generateList();
      case ListOptions.SHOULD:
        return this.shouldList.generateList();
      case ListOptions.COULD:
        return this.couldList.generateList();
      case ListOptions.WONT:
        return this.wontList.generateList();
      case ListOptions.BACKLOG:
        return this.backlogList.generateList();
      case ListOptions.INPROGRESS:
        return this.inProgressList.generateList();
      case ListOptions.INREVIEW:
        return this.inReviewList.generateList();
      case ListOptions.COMPLETE:
        return this.completeList.generateList();
      case ListOptions.MOSCOW_UNASSIGNED:
        return this.unassignedMoscowList.generateList();
      case ListOptions.SPRINT_BACKLOG_UNASSIGNED:
        return this.unassignedSprintBacklogList.generateList();
      default:
        return new List("", MoscowStatus.UNASSIGNED, BacklogStatus.NONE);
    } // end switch
  } // end generateList
} // end ListFactory

