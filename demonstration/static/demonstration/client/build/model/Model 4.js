"use strict";
/**
 * model.js
 *
 * The JavaScript class that will wrap the entirity of our Agile Development
 * Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 * Model.ts holds and handles Boards
 * @version 3.0.0 (February 19, 2020)
 * Moved all of the fields and methods to Project.ts due to the functionality
 * of Model changing from holding and handling Boards to holding and handling
 * Projects.
 */
exports.__esModule = true;
var Project_1 = require("./Project");
var ProjectFactory_1 = require("./factories/ProjectFactory");
var Model = /** @class */ (function () {
    function Model(controller, projectName) {
        this.projectName = projectName;
        this.project = new Project_1.Project(this.projectName);
        this.projectFactory = new ProjectFactory_1.ProjectFactory();
        this.controller = controller;
    } // end constructor
    /**
     * Returns the title of a board
     *
     * @param {number} boardID -- the index of the board we are searching for
     *
     * @return {string} -- the title of the board
     */
    Model.prototype.getBoardTitle = function (boardID) {
        return this.project.getBoardTitle(boardID);
    }; // end getBoardTitle
    /**
     * Generates a board from a template based on user preference
     *
     * @param {BoardOptions} option -- the type of board the user would like
     */
    Model.prototype.generateBoardTemplate = function (option) {
        this.project.generateBoardTemplate(option);
    }; // end generateBoardTemplate
    /**
     * Removes a board from the list of boards.
     *
     * @param {number} boardID the id of the board to be removed
     */
    Model.prototype.removeBoard = function (boardID) {
        this.project.removeBoard(boardID);
    }; // end removeBoard
    /**
     * Generates a list with the title and color provided in the board specified by the Controller.
     *
     * @param {number} projectID the id of the board's Project
     * @param {number} boardID the id of the board we are trying to add a list into.
     * @param {string} label the name of the list being generated
     * @param {colors} color the color of the list being generated
     */
    Model.prototype.generateList = function (boardID, label) {
        this.project.generateList(boardID, label);
    }; // end generateList
    /**
     * Generates a list based on the template given, to the specified board
     *
     * @param {number} projectID -- the id of the board's project
     * @param {number} boardID -- the id of the baord we are trying to add a list into
     * @param {option} option -- the type of list we are trying to create
     */
    Model.prototype.generateListTemplate = function (boardID, option) {
        this.project.generateListTemplate(boardID, option);
    }; // end generateListTemplate
    /**
     * Removes a list from a specified board.
     *
     * @param {number} projectID -- the ID of the board's project
     * @param {number} boardID -- the ID of the board from whom we want to remove a list from
     * @param {number} listID -- the ID of the list we are removing
     */
    Model.prototype.removeList = function (boardID, listID) {
        this.project.removeList(boardID, listID);
    }; // end removeList
    /**
     * Generates a card within a board's list
     *
     * @param {number} projectID -- the project to generate a card into
     * @param {number} boardID -- the board to generate a card into
     * @param {number} listID -- the list to generate a card into
     * @param {string} label -- the label for the card being generated
     * @param {string} text -- the text for the card being generated
     */
    Model.prototype.generateTaskCard = function (boardID, listID, label, text) {
        this.project.generateTaskCard(listID, text);
    }; // end generateTaskCard
    /**
     * Remove a task card from the specified list from a specified board.
     * @param {number} projectID -- the ID of the board's project
     * @param {number} boardID -- the ID of the list's board
     * @param {integer} listID -- the ID of the list we're removing a card from.
     * @param {integer} taskID -- the ID of the card we're removing.
     */
    Model.prototype.removeTaskCard = function (boardID, listID, taskID) {
        this.project.removeTaskCard(boardID, listID, taskID);
    }; // end removeTaskCard
    /**
     * Sets the controller of this app.
     *
     * @param {controller} Controller the controller that will send commands to this app.
     */
    Model.prototype.setController = function (controller) {
        this.controller = controller;
    }; // end setController
    /**
     * Loads a board given to it by the controller.
     * @param {model} model -- the board to be loaded
     */
    Model.prototype.loadProject = function (project) {
        var newProject = new Project_1.Project("");
        newProject.loadProject(project);
        this.project = newProject; // end for
    }; // end loadBoards
    /*
     * Getter for the project field
     *
     * @return {Project} -- the project we are currently working on
     */
    Model.prototype.getProjects = function () {
        return this.project;
    }; // end getBoards
    return Model;
}()); // end App
exports.Model = Model;
