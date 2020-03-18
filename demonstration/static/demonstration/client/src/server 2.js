/**
 * server.js
 *
 * The server that will generate the front end of our application for users
 * to interact with
 *
 * @author Chris Wolf
 * @version 2.0.0 (October 21, 2019)
 */

let express = require('express');
let Controller = require('./controller/controller.js').Controller;
let BoardOptions = require('./model/enums/board_options.js').BoardOptions;

// Define the port number
const PORT = 5000;

const app = express();

let controller = new Controller();


/**
* DEMO CODE
* Simply for demonstration purposes
* Remove after sprint review
*/
controller.generateBoardTemplate(BoardOptions.MOSCOW);

controller.model.boards[0].lists[0].addTask('MT1', 'Must Task 1');
controller.model.boards[0].lists[0].addTask('MT2', 'Must Task 2');
controller.model.boards[0].lists[0].addTask('MT3', 'Must Task 3');

controller.model.boards[0].lists[1].addTask('CT1', 'Could Task 1');
controller.model.boards[0].lists[1].addTask('CT2', 'Could Task 2');
controller.model.boards[0].lists[1].addTask('CT3', 'Could Task 3');

controller.model.boards[0].lists[2].addTask('ST1', 'Should Task 1');
controller.model.boards[0].lists[2].addTask('ST2', 'Should Task 2');
controller.model.boards[0].lists[2].addTask('ST3', 'Should Task 3');

controller.model.boards[0].lists[3].addTask('WT1', 'Wont Task 1');
controller.model.boards[0].lists[3].addTask('WT2', 'Wont Task 2');
controller.model.boards[0].lists[3].addTask('WT3', 'Wont Task 3');
/**
* END DEMO CODE
*/

// have the server start listening on PORT
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
}); // end app.listen

// send some default HTML
app.get('/', function(req, res) {
  res.send(controller.generateHTML());
}); // end app.get
