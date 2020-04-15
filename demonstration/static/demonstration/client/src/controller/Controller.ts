import { Model } from '../model/Model';
import { View } from '../view/view';
import { ListOptions } from '../model/enums/ListOptions';
import { Project } from '../model/Project';
import { BoardOptions } from '../model/enums/BoardOptions';
import {Board} from "../model/boards/Board";
import { List } from '../model/lists/List';
import { MoscowStatus } from '../model/enums/MoscowStatus';
import { BacklogStatus } from '../model/enums/BacklogStatus';
import { TaskCard } from '../model/TaskCard';

/**
 * Controller.ts
 * 
 * Manages the changes in the model and the view
 * 
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 1.0.0 (March 30, 2020)
 */

export class Controller {
  private model: Model;
  private view: View;
  private projectName: string;

  constructor(projectName: string) {
    this.projectName = projectName;
    this.model = new Model(this, this.projectName);
    this.model.setController(this);
    this.view = new View();
  } // end constructor

  /**
   * getter for the view field
   *
   * @return {View} view -- the view for the project
   */
  getView(): View {
    return this.view;
  } // end getView

  setEditableTaskCard(taskLabel: string) {
    this.view.setEditableTaskCard(this.findTask(taskLabel));
  } // end setEditableTaskCard

  removeEditableTaskCard() {
    this.view.setEditableTaskCard(null);
  } // end removeEditableTaskCard

  getEditableTaskCard(): TaskCard {
    return this.view.getEditableTaskCard();
  } // end getEditableTaskCard

  getNewestTaskCard(): TaskCard {
    let tasks = this.model.getProjects().getTasks();
    return tasks[tasks.length - 1];
  } // end getNewestTaskCard

  /**
   * calls on the model to create a new board from a template
   *
   * @param option which type of board the user would like
   */
  generateBoardTemplate(option: BoardOptions) {
    this.model.generateBoardTemplate(option);
  } // end generateBoardTemplate

  /**
   * Changes the text in a task card
   *
   * @param listIndex which list the task card is in
   * @param taskIndex which task card we are changing
   * @param newTaskText the text to change the task card to
   */
  editTaskText(taskLabel: string, newText: string) {
    let tasks = this.model.getProjects().getTasks();

    tasks.forEach(task => {
      if (task.getLabel() === taskLabel) {
        task.setText(newText);
        return;
      } // end if
    }); // end forEach
  } // end editTaskText

  setConditions(completedArray: boolean[]) {
    for (let i = 0; i < this.getEditableTaskCard().getNumberOfConditions();
     i++) {
      if (completedArray[i]) {
        this.getEditableTaskCard().getConditionsOfSatisfaction()[i].
          setComplete();
      } else {
        this.getEditableTaskCard().getConditionsOfSatisfaction()[i].
          setIncomplete();
      }
    }
  }

  /**
   * removes a board from our model
   *
   * @param {string} boardID the id for the board we are removing
   */
  removeBoard(boardID: number) {
    this.model.removeBoard(boardID);
  } // end removeBoard

  /**
   * generates a list with the specific credentials
   *
   * @param {string} boardID the board to add the list to
   * @param {string} label the label for the new list
   * @param color
   */
  generateList(boardID: number, label: string) {
    this.model.generateList(boardID, label);
  } // end generateList

  /**
   * removes a list from a board
   *
   * @param {string} boardID the board we are removing a list from
   * @param {string} listID the list we are removing
   */
  removeList(boardID: number, listID: number) {
    this.model.removeList(boardID, listID);
  } // end removeList

  /**
   * generates a list from a template
   *
   * @param {string} boardID the board we are adding a list to
   * @param {ListOption} option the template we would like to src a list from
   */
  generateListTemplate(boardID: number, option: ListOptions) {
    this.model.generateListTemplate(boardID, option);
  } // end generateListTemplate

  /**
   * generates a task card with the given credentials
   *
   * @param {number} boardID the board we are adding a task card to
   * @param {number} listID the list we are adding a task card to
   * @param {string} label the label for the new task card
   * @param {string} text the text for the new task card
   */
  generateTaskCard(boardID: number, listID: number, label: string, text: string) {
    this.model.generateTaskCard(boardID, listID, label, text);
  } // end generateTaskCard

  /**
   * removes a task card from a list
   *
   * @param {number} listID the list from which we are removing a task card
   * @param {number} taskID -- the ID of the task card we are removing
   */
  removeTaskCard(taskLabel: string) {
    this.getModel().getProjects().removeTaskCard(taskLabel);
  }

  /**
   * Moves a task card from one list to another
   *
   * @param {HTML} newList -- the HTML representation of the new list we're moving the task card to
   * @param {HTML} movedTaskCard -- the HTML representation of the task card we're moving
   */
  moveTaskCard(newList: any, movedTaskCard: any) {
    let list = this.findList(newList.id);
    let task = this.findTask(movedTaskCard.id);

    if(list.getMoscowStatus() != MoscowStatus.UNASSIGNED) {
      task.setMoscowStatus(list.getMoscowStatus());
    } // end if

    if (list.getBacklogStatus() != BacklogStatus.NONE) {
      task.setBacklogStatus(list.getBacklogStatus());
    } // end if
  } // end moveTaskCard

  /**
   * Finds a list in the current board given the list's label
   * 
   * @param listLabel the label for the list we're looking for
   * 
   * @return the list we're looking for
   */
  findList(listLabel: string): List {
    let lists: List[] = this.model.getProjects().getActiveBoard().getLists();

    for(let i = 0; i < lists.length; i++) {
      if(lists[i].getLabel() === listLabel) {
        return lists[i];
      } // end if
    } // end for
  } // end findList

  /**
   * Finds a task card in the project by its id
   * 
   * @param taskID the id of the task we're looking for
   * 
   * @return the task card we're looking for
   */
  findTask(taskLabel: string): TaskCard {
    let tasks = this.model.getProjects().getTasks();

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getLabel() === taskLabel) {
        return tasks[i];
      } // end if
    } // end for
  } // end findTask

  /**
   * Gets the board indices of the task card we are looking for
   *
   * @param {string} taskID -- the label of the task card we are looking for
   *
   * @return {list} -- [the list index of the task card, the task index of the task card]
   */
  getTaskIndices(taskID: string) {
    for (let i = 0; i < this.model.getProjects().getActiveBoard().getLists().length; i++) {
      for (let j = 0; j < this.model.getProjects().getActiveBoard().getLists()[i].getTasks().length; j++) {
        if (taskID === this.model.getProjects().getActiveBoard().getLists()[i].getTasks()[j].getLabel()) {
          return [i, j];
        } // end if
      } // end inner-for
    } // end outer-for
  } // end getTaskIndices

  /**
   * Gets the data held inside the task card
   * @param listIndex -- the list index we are looking for
   * @param taskIndex -- the task index we are looking for
   *
   * @return {list} -- [task card's label, task card's text]
   */
  getTaskData(listIndex: number, taskIndex: number) {
    return [this.model.getProjects().getActiveBoard().getLists()[listIndex].getTasks()[taskIndex].getLabel(),
    this.model.getProjects().getActiveBoard().getLists()[listIndex].getTasks()[taskIndex].getText()];
  } // end getTaskData

  /**
   * getter for model
   *
   * @return {Model} the model this controller controls
   */
  getModel(): Model {
    return this.model;
  } // end getModel

  /**
   * Calls the view class to generate HTML based on the given model
   *
   * @return {String} html based off of model
   */
  generateHTML(): string {
    return this.view.generateHTML(this.model);
  } // end generateHTML

  /**
   * Sets the values within model to the values loaded from a JSON file. 
   * 
   * @param {Model} model the board we are trying to load into model
   */
  loadProject(project: Project) {
    this.model.loadProject(project);
  } // end loadProject
} // end Controller

