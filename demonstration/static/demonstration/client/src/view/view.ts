/**
 * view.js
 *
 * The class responsible for generating the HTML based off our current model
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

import { List } from '../model/lists/List';
import { TaskCard } from '../model/TaskCard';
import { Model } from '../model/Model';

export class View {
  private isBoardMenuVisible: boolean;
  private editableTaskCard: TaskCard;

  constructor() {
    this.isBoardMenuVisible = true;
    this.editableTaskCard = null;
  } // end constructor

  /**
   * if the board menu is visible, hide it and vice-versa
   */
  toggleBoardMenuVisibility(): void {
    this.isBoardMenuVisible = !this.isBoardMenuVisible;
  } // end toggleBoardMenuVisibility

  /**
   * returns whether or not the board is currently visible
   *
   * @return {boolean} -- true if the board is visible, false otherwise
   */
  getIsBoardMenuVisibile(): boolean {
    return this.isBoardMenuVisible;
  } // end getIsBoardMenuVisibile

  setEditableTaskCard(task: TaskCard) {
    this.editableTaskCard = task;
  } // end setEditableTaskCard

  getEditableTaskCard(): TaskCard {
    return this.editableTaskCard;
  } // end getEditableTaskCard

  /**
   * generates HTML based on the current model
   *
   * @param {Model} model the model we are generating HTML for
   *
   * @return {string} the HTML for model
   */
  generateHTML(model): string {
    let html = '<div>';
    html += this.generateToolbar(model);
    html += this.generateBodyHTML(model);
    html += this.generateEditableTaskCardHTML();
    html += '</div>';
    return html;
  } // end generateHTML

  /**
   * generates the html for the edit screen for editting a task card
   * 
   * @return the HTML for the edit screen
   */
  generateEditableTaskCardHTML(): string {
    let html: string = '';
    let label: string = '';
    let text: string = '';
    if (this.editableTaskCard !== null) {
      label = this.editableTaskCard.getLabel();
      text = this.editableTaskCard.getText();
    }

    html += '<div id=editable-task-card>'
    html += '<div id=editable-task-card-header>' +
      label + '</div>';

    html += '<textarea id=editable-task-card-description placeholder="'
      + text + '"></textarea>';
    html += '<br/>';

    html += this.getConditionsOfSatisfactionHTML();

    html += '<br/>';

    html += '<button id=editable-task-card-cancel-button type=button' +
      '>Cancel</button>';

    html += '<button id=editable-task-card-submit-button type=button' +
      '>Submit</button>';

    html += '</div>';

    return html;
  } // end generateEditableTaskCard

  /**
   * Generates the HTML for the conditions of satisfaction
   * 
   * @return the HTML for the conditions of satisfaction
   */
  getConditionsOfSatisfactionHTML(): string {
    let conditionStats: string = '0/0';

    if (this.editableTaskCard !== null) {
      conditionStats = this.editableTaskCard.getConditionsStats();
    } // end if

    let html = '<div id=conditions-of-satisfaction-header>';
    html += 'Conditions Of Satisfaction ';
    html += conditionStats;
    html += '</div>';

    // add each of the conditions of satisfaction
    if (this.editableTaskCard !== null) {
      for (let i = 0; i < this.editableTaskCard.getNumberOfConditions(); i++) {
        html += '<div>';
        html += '<input id=condition' + i + ' type=checkbox></input>';
        html += this.editableTaskCard.getConditionsOfSatisfaction()[i].
          getText();
        html += '<button class=cos-delete-button id=cos-delete-button' + i + '>X</button>';
        html += '</div>';
      } // end for
    } // end if

    html += '<input id=new-condition type=text></input>';

    return html;
  }

  /**
   * generates the toolbar HTML
   * 
   * @return {HTML} the html for the toolbar
   */
  generateToolbar(model: Model): string {
    let html = '<div id=toolbar>';
    html += this.generateSaveLoadButtons();
    html += View.generateBoardMenuToggleButton();
    html += '<div id=toolbar-text>Agility</div>';
    html += '</div>';
    return html;
  } // end generateToolbar


  /**
   * generates the save and load button HTML
   * 
   * @return {HTML} the html for the save and load buttons
   */
  generateSaveLoadButtons(): string {
    let html = '<div id=save-load-buttons>';
    html += '<button id=save> Save </button>';
    html += '<input id=file-input type=\'file\' name=\'test\'/>';
    html += '<button id=submit> Submit </button>';
    html += '</div>';
    return html;
  } // end generateSaveLoadButtons

  /**
   * generates the header based on the current model
   *
   * @param {Model} model the model we are generating the header HTML for
   *
   * @return {string} the HTML for the header of the model
   */
  generateHeaderHTML(model): string {
    let html = '<h1 id=header>';
    html += '<u>';
    html += model.getProjects().getActiveBoard().getTitle();
    html += '</u></h1>';
    return html;
  } // end generateHeaderHTML

  /**
   * Generates the body of the application
   *
   * @param {Model} model -- the data structure of the application to be 
   * displayed
   *
   * @return {string} -- the HTML for the body of the application
   */
  generateBodyHTML(model: Model): string {
    let html: string = '<div id=appBody>';
    html += this.generateBoardButtons(model);
    html += this.generateCurrentBoard(model);
    html += '</div>';
    return html;
  } // end generateBodyHTML

  /**
   * Generates the Board Menu for the application
   *
   * @param {Model} model -- the data structure of the application
   *
   * @return {string} -- the HTML for the Board Menu
   */
  generateBoardButtons(model): string {
    let html: string = '<div id=boardButtons>';

    html += '<div id=boardMenuTitle>' + model.getProjects().getTitle() + '</div>';

    let boards = model.getProjects().getBoards();

    for (let i = 0; i < boards.length; i++) {
      html += '<button class=boardButton id=board' + i + '>';
      html += boards[i].getTitle();
      html += '</button>';
      html += '</br>';
    } // end for

    html += '<button class=boardButton id=save-cloud>Save</button>';
    html += '<button class=boardButton id=go-forward>></button>'
    html += '<button class=boardButton id=go-back><</button>';

    html += '</div>';

    return html;
  } // end generateBoardButtons

  /**
   * Generates the current board the user is interacting with
   *
   * @param {Model} model -- the data structure of the application
   *
   * @return {string} -- the HTML for the current board
   */
  generateCurrentBoard(model): string {
    let html = '<div id=currentBoard>';
    html += this.generateHeaderHTML(model);
    html += this.generateListsHTML(model);
    html += '</div>';
    return html;
  } // end generateCurrentBoard

  /**
   * generates all of the lists inside of the model
   *
   * @param {Model} model the model we are displaying the lists for
   *
   * @return {string} the HTML for the lists
   */
  generateListsHTML(model): string {
    let html = '<div class=lists>';

    // for every list, generate the HTML
    for (let i = 0; i < model.getProjects().getActiveBoard().getLists().length; i++) {
      html += '<div id=\'' + model.getProjects().getActiveBoard().getLists()[i].
        getLabel() + '\' class=\'dropzone list\'>' +
        '<div class=list-header>' +
        '<div class=list-label><u>' +
        model.getProjects().getActiveBoard().getLists()[i].getLabel() +
        '</u></div>' +
        this.generateAddButtonHTML(model.getProjects().getActiveBoard().getLists
          ()[i].getLabel()) +
        '</div>' +
        this.generateIndividualListHTML(model.getProjects().getActiveBoard().
          getLists()[i], model) +
        '</div>';
    } // end for loop

    return html;
  } // end generateListsHTML

  /**
   * generates the list passed in
   *
   * @param {List} list the list whose HTML is being generated
   *
   * @return {string} the HTML representation of the given list
   */
  generateIndividualListHTML(list: List, model: Model): string {
    let html = '<div>';
    html += this.generateTaskCardsHTML(list, model);
    html += '</div>';
    return html;
  } // end generateIndividualListHTML

  /**
   * generates the HTML for all of the task cards in a list
   *
   * @param {List} list the list whose task cards we are generating
   *
   * @return {string} the HTML representation of all of the task cards in the
   *                  list
   */
  generateTaskCardsHTML(list: List, model: Model): string {
    let html = '<div>';

    model.getProjects().getTasks().forEach(task => {
      if (task.getMoscowStatus() == list.getMoscowStatus() ||
        task.getBacklogStatus() == list.getBacklogStatus()) {
        html += this.generateIndividualTaskCardHTML(task);
      }
    });

    html += '</div>';

    return html;
  } // end generateTaskCardsHTML

  /**
   * generates the HTML for an individual task card
   *
   * @param {TaskCard} task the task card we are generating HTML for
   *
   * @return {string} the HTML representation of the task card
   */
  generateIndividualTaskCardHTML(task: TaskCard): string {
    let html = '<div id=\'' + task.getLabel() + '\' class=\'task-card draggable\'>';

    html += '<div>';
    html += '<div id=' + task.getLabel() + 'Label>';
    html += '<div class="task-card-label"><u>' + task.getLabel() + '</u></div>';
    html += this.generateRemoveButtonHTML(task);
    html += '</div>';
    html += '<div class=task-card-text id=' + task.getLabel() + 'TextField>' + task.getText() + '</div>';

    html += '</div>';

    html += '<div class=task-card-statuses>';
    html += '<div><b>' + task.getMoscowStatus() + '</b></div>';
    html += '<div><b>' + task.getBacklogStatus() + '</b></div>';
    html += '<div><b>' + task.getConditionsStats() + '</b></div>';
    html += '</div>';

    html += '</div>';

    return html;
  } // end generateIndividualTaskCardHTML

  /**
   * Generates a remove button for a task card
   *
   * @param {TaskCard} task -- the task card this button should remove when clicked
   *
   * @return {string} -- the HTML for the remove button
   */
  generateRemoveButtonHTML(task: TaskCard) {
    let buttonID = task.getLabel() + 'RemoveButton';
    return '<button id=' + buttonID + ' class=remove-button>' +
      '<i class=\"fa fa-trash-o\"></i></button>';
  } // end generateRemoveButtonHTML

  /**
   * Generates an add task card button for a list
   *
   * @param {number} parentID -- the index for the list
   *
   * @return {string} -- the HTML for the add button
   */
  generateAddButtonHTML(parentID: number) {
    let thisID = parentID + 'AddButton';
    return '<button id=\'' + thisID + '\' class=add-button>+</button>';
  } // end generateAddButtonHTML

  /**
   * Generates the button that will allow us to toggle the visibility of the
   * Board Menu
   *
   * @return {string} -- the HTML for the Board Menu Toggle button
   */
  private static generateBoardMenuToggleButton(): string {
    return '<button id=boardMenuToggleButton>Board Menu</button>';
  } // end generateBoardMenuToggleButton
} // end View
