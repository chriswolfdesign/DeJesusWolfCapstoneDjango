"use strict";
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
exports.__esModule = true;
var Project_1 = require("../Project");
var ProjectFactory = /** @class */ (function () {
    /**
     * Generates a ProjectFactory
     */
    function ProjectFactory() {
        // Constructor delibrately left blank
    } // end constructor
    /**
     * Generates a Project for model.
     *
     * @param name of the project
     * @returns a project
     */
    ProjectFactory.prototype.generateProject = function (title) {
        return new Project_1.Project(title);
    }; //end generateProject
    return ProjectFactory;
}()); //end ProjectFactory
exports.ProjectFactory = ProjectFactory;
