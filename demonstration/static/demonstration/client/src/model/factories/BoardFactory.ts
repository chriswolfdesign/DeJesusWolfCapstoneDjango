/**
 * BoardFactory.ts
 *
 * The class that will allow us to easily autogenerate template
 * boards for our Agile Development Board.
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

import {Board} from '../boards/Board';
import {BoardOptions} from '../enums/BoardOptions';
import {MoscowBoard} from '../boards/MoscowBoard';
import {SprintBacklogBoard} from '../boards/SprintBacklogBoard';

export class BoardFactory {
  /** Assists in creating a MoscowBoard */
  private moscowBoard: MoscowBoard;
  /** Assists in created a SprintBacklogBoard */
  private sprintBoard: SprintBacklogBoard;

  /**
   * Generates a BoardFactory
   */
  constructor() {
    this.moscowBoard = new MoscowBoard();
    this.sprintBoard = new SprintBacklogBoard();
  } // end constructor

  /**
   * generates a board based on the parameter passed in
   * @param option the type of the board the user wants generated
   * @return a board based on user preference
   */
  generateBoard(option: BoardOptions): Board {
    switch (option) {
    case BoardOptions.MOSCOW:
      return this.moscowBoard.generateBoard();
    case BoardOptions.SPRINT:
      return this.sprintBoard.generateBoard();
    default:
      return null;
    } // end switch case
  } // end generateBoard
} // end BoardFactory
