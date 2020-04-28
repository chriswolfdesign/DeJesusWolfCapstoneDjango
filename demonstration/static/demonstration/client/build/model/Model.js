"use strict";
/**
 * Model.ts
 *
 * A class responsible for holding and handling projects
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 3.0.0 (February 19, 2020)
 */
exports.__esModule = true;
var Project_1 = require("./Project");
var ProjectFactory_1 = require("./factories/ProjectFactory");
var Model = /** @class */ (function () {
    /****************
     * Constructors *
     ****************/
    function Model(controller, projectName) {
        this.projectName = projectName;
        this.project = new Project_1.Project(this.projectName);
        this.projectFactory = new ProjectFactory_1.ProjectFactory();
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
    Model.prototype.getBoardTitle = function (boardID) {
        return this.project.getBoardTitle(boardID);
    }; // end getBoardTitle
    /**
     * Getter for the project field
     * @return the project we are currently working on
     */
    Model.prototype.getProjects = function () {
        return this.project;
    }; // end getBoards
    /***********
     * Setters *
     ***********/
    /**
     * Sets the controller of this app.
     * @param controller the controller that will send commands to this app.
     */
    Model.prototype.setController = function (controller) {
        this.controller = controller;
    }; // end setController
    /**********************
     * Additional methods *
     **********************/
    /**
     * Generates a board from a template based on user preference
     * @param option the type of board the user would like
     */
    Model.prototype.generateBoardTemplate = function (option) {
        this.project.generateBoardTemplate(option);
    }; // end generateBoardTemplate
    /**
     * Removes a board from the list of boards.
     * @param boardID the id of the board to be removed
     */
    Model.prototype.removeBoard = function (boardID) {
        this.project.removeBoard(boardID);
    }; // end removeBoard
    /**
     * Generates a list with the title and color provided in the board specified by the Controller.
     * @param boardID the id of the board we are trying to add a list into.
     * @param label the name of the list being generated
     */
    Model.prototype.generateList = function (boardID, label) {
        this.project.generateList(boardID, label);
    }; // end generateList
    /**
     * Generates a list based on the template given, to the specified board
     * @param boardID the id of the board we are trying to add a list into
     * @param option the type of list we are trying to create
     */
    Model.prototype.generateListTemplate = function (boardID, option) {
        this.project.generateListTemplate(boardID, option);
    }; // end generateListTemplate
    /**
     * Removes a list from a specified board.
     * @param boardID the ID of the board from whom we want to remove a list from
     * @param listID the ID of the list we are removing
     */
    Model.prototype.removeList = function (boardID, listID) {
        this.project.removeList(boardID, listID);
    }; // end removeList
    /**
     * Generates a card within a board's list
     * @param boardID the board to generate a card into
     * @param listID the list to generate a card into
     * @param label the label for the card being generated
     * @param text the text for the card being generated
     */
    Model.prototype.generateTaskCard = function (boardID, listID, label, text) {
        this.project.generateTaskCard(listID, text);
    }; // end generateTaskCard
    /**
     * Loads a board given to it by the controller.
     * @param model the board to be loaded
     */
    Model.prototype.loadProject = function (project) {
        var newProject = new Project_1.Project("");
        newProject.loadProject(project);
        this.project = newProject; // end for
    }; // end loadBoards
    return Model;
}()); // end App
exports.Model = Model;
