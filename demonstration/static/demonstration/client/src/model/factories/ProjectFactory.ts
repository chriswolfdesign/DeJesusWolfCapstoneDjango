/**
 * ProjectFactory.ts
 * 
 * Generates Projects
 * 
 * @author Ellery De Jesus
 * @author Chris Wolf
 * 
 * @version 0.0.0
 */

import { Project } from "../Project";

export class ProjectFactory {

    constructor() { }

    /**
     * Generates a Project for model.
     * 
     * @param title: Name of the Project
     * @returns A Project
     */
    generateProject(title: string): Project {
        return new Project(title);
    } //end of generateProject

}//end of ProjectFactory