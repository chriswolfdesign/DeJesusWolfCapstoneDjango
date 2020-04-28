/**
 * ProjectFactory.ts
 *
 * A class responsible for generating projects
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 *
 * @version 1.0.0 (April 1, 2020)
 */

import { Project } from "../Project";

export class ProjectFactory {

  /**
   * Generates a ProjectFactory
   */
  constructor() {
    // Constructor delibrately left blank
  } // end constructor

  /**
   * Generates a Project for model.
   *
   * @param name of the project
   * @returns a project
   */
  generateProject(title: string): Project {
    return new Project(title);
  } //end generateProject

}//end ProjectFactory