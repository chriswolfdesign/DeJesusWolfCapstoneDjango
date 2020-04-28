/**
 * Model.ts
 *
 * A class responsible for holding and handling projects
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 3.0.0 (February 19, 2020)
 */

import { Project } from './Project';
import { ProjectFactory } from './factories/ProjectFactory'
import { Controller } from '../controller/Controller';
import { BoardOptions } from './enums/BoardOptions';
import { ListOptions } from './enums/ListOptions';

export class Model {
  /**********
   * Fields *
   **********/

  /** The project this model manages */
  private project: Project;
  /** Generates projects conveniently */
  private projectFactory: ProjectFactory;
  /** The controller capable of making modifications of this model */
  private controller: Controller;
  /** The name of this project */
  private projectName: string;

  /****************
   * Constructors *
   ****************/

  constructor(controller, projectName) {
    this.projectName = projectName;
    this.project = new Project(this.projectName);
    this.projectFactory = new ProjectFactory();
    this.controller = controller;
  } // end constructor

  /***********
   * Getters *
   ***********/

  /**
   * Returns the title of a board
   * @param boardID the index of the board we are searching for
   * @return the title of the board
   */
  getBoardTitle(boardID: number): string {
    return this.project.getBoardTitle(boardID);
  } // end getBoardTitle

  /**
   * Getter for the project field
   * @return the project we are currently working on
   */
  getProjects(): Project {
    return this.project;
  } // end getBoards

  /***********
   * Setters *
   ***********/

  /**
   * Sets the controller of this app.
   * @param controller the controller that will send commands to this app.
   */
  setController(controller: Controller): void {
    this.controller = controller;
  } // end setController

  /**********************
   * Additional methods *
   **********************/

  /**
   * Generates a board from a template based on user preference
   * @param option the type of board the user would like
   */
  generateBoardTemplate(option: BoardOptions): void {
    this.project.generateBoardTemplate(option);
  } // end generateBoardTemplate

  /**
   * Removes a board from the list of boards.
   * @param boardID the id of the board to be removed
   */
  removeBoard(boardID: number): void {
    this.project.removeBoard(boardID);
  } // end removeBoard

  /**
   * Generates a list with the title and color provided in the board specified by the Controller.
   * @param boardID the id of the board we are trying to add a list into.
   * @param label the name of the list being generated
   */
  generateList(boardID: number, label: string): void {
    this.project.generateList(boardID, label);
  } // end generateList

  /**
   * Generates a list based on the template given, to the specified board
   * @param boardID the id of the board we are trying to add a list into
   * @param option the type of list we are trying to create
   */
  generateListTemplate(boardID: number, option: ListOptions): void {
    this.project.generateListTemplate(boardID, option);
  } // end generateListTemplate

  /**
   * Removes a list from a specified board.
   * @param boardID the ID of the board from whom we want to remove a list from
   * @param listID the ID of the list we are removing
   */
  removeList(boardID: number, listID: number): void {
    this.project.removeList(boardID, listID);
  } // end removeList

  /**
   * Generates a card within a board's list
   * @param boardID the board to generate a card into
   * @param listID the list to generate a card into
   * @param label the label for the card being generated
   * @param text the text for the card being generated
   */
  generateTaskCard(boardID: number, listID: number, label: string, text: string): void {
    this.project.generateTaskCard(listID, text);
  } // end generateTaskCard

  /**
   * Loads a board given to it by the controller.
   * @param model the board to be loaded
   */
  loadProject(project: Project): void {
    let newProject: Project = new Project("");
    newProject.loadProject(project);
    this.project = newProject; // end for
  } // end loadBoards

} // end App

