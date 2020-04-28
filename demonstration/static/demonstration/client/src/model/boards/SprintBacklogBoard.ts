/**
 * SprintBacklogBoard.ts
 *
 * Allows us to easily generate a board that manages a Sprint Backlog
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */

import {Board} from './Board';
import {SprintBacklogListFactory} from '../factories/SprintBacklogListFactory';
import {ListOptions} from '../enums/ListOptions';

export class SprintBacklogBoard {
  /**
   * generates a Sprint Backlog Board
   * @return a SprintBacklogBoard
   */
  generateBoard(): Board {
    let board: Board = new Board('Project Backlog');
    board.setListFactory(new SprintBacklogListFactory());

    board.addListTemplate(ListOptions.BACKLOG);
    board.addListTemplate(ListOptions.INPROGRESS);
    board.addListTemplate(ListOptions.INREVIEW);
    board.addListTemplate(ListOptions.COMPLETE);
    board.addListTemplate(ListOptions.SPRINT_BACKLOG_UNASSIGNED);

    return board;
  } // end generateBoard
} // end SprintBacklogBoard

