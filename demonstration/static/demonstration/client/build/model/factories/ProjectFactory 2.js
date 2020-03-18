"use strict";
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
exports.__esModule = true;
var Project_1 = require("../Project");
var ProjectFactory = /** @class */ (function () {
    function ProjectFactory() {
    }
    /**
     * Generates a Project for model.
     *
     * @param title: Name of the Project
     * @returns A Project
     */
    ProjectFactory.prototype.generateProject = function (title) {
        return new Project_1.Project(title);
    }; //end of generateProject
    return ProjectFactory;
}()); //end of ProjectFactory
exports.ProjectFactory = ProjectFactory;
