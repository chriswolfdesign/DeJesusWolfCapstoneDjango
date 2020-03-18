/**
 * test_app.js
 *
 * Unit testing for Model.ts
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let assert = require('chai').assert;
let App = require('../../src/model/model.js').App;
let BoardOptions = require('../../src/model/enums/board_options.js').BoardOptions;
let Board = require('../../src/model/boards/board.js').Board
let Colors = require('../../src/model/enums/colors.js').Colors
let ListOptions = require('../../src/model/enums/list_options.js').ListOptions

suite('Unit testing for Model.ts', function() {
  let app = null;

  // Set up our app
  setup(function() {
    app = new App();
  }); // end setup

  // Test the constructor
  suite('Testing App constructor', function() {
    test('Boards genereated correctly', function() {
      assert(app.boards.length === 0, 'Should be empty');
    }); // end board generation test
  }); // end constructor tests

  // Test App.generateBoard
  test('Testing App.generateBoard', function() {
    app.generateBoardTemplate(BoardOptions.MOSCOW);
    assert(app.boards[0].title === 'MoSCoW Board', 'Should be MoSCoW Board');
  }); // end App.generateBoard test

  suite('Testing App.removeBoard', function() {
    test('Removing the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.removeBoard(0);
  
      assert(app.boards.length === 1, 'A board was removed.');
      assert(app.boards[0].title === 'TestB', 'The first was removed.');
    });
  
    test('Removing the second board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.removeBoard(1);
  
      assert(app.boards.length === 1, 'A board was removed.');
      assert(app.boards[0].title === 'TestA', 'The first was removed.');
    });
  });

  suite('Testing App.generateList', function() {
    test('Generating a list within the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.generateList(0, 'Test', Colors.RED);

      assert(app.boards[0].lists.length !== 0, 'A list should have been generated in the first board.');
      assert(app.boards[1].lists.length === 0, 'A list should not have been generated in the second board.')
    });
    test('Generating a list within the second board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.generateList(1, 'Test', Colors.RED);

      assert(app.boards[1].lists.length !== 0, 'A list should have been generated in the second board.');
      assert(app.boards[0].lists.length === 0, 'A list should not have been generated in the first board.')
    });
  });

  suite('Testing App.generateListTemplate', function() {
    test('Generating a list within the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.generateListTemplate(0, ListOptions.MUST);

      assert(app.boards[0].lists.length !== 0, 'A list should have been generated in the first board.');
      assert(app.boards[1].lists.length === 0, 'A list should not have been generated in the second board.');
      assert(app.boards[0].lists[0].label === 'Must', 'List created should be a \'Must\' list.');
    });
    test('Generating a list within the second board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards.push(new Board('TestB'));
      app.generateListTemplate(1, ListOptions.MUST);

      assert(app.boards[1].lists.length !== 0, 'A list should have been generated in the second board.');
      assert(app.boards[0].lists.length === 0, 'A list should not have been generated in the first board.');
      assert(app.boards[1].lists[0].label === 'Must', 'List created should be a \'Must\' list.');
    });
  });

  suite('Testing App.removeList', function() {
    test('Removing the first list from the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards[0].addList('TestA', '');
      app.boards[0].addList('TestB', '');
      app.boards.push(new Board('TestB'));
      app.boards[1].addList('TestC', '');
      app.boards[1].addList('TestD', '');
      app.removeList(0, 0);
      

      assert(app.boards[0].lists.length === 1, 'A list should have been removed from the first board.');
      assert(app.boards[0].lists[0].label === 'TestB', 'The first list should have been removed.');
      assert(app.boards[1].lists.length === 2, 'No list should have been removed from the second board.');
    });
    test('Removing the second list from the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards[0].addList('TestA', '');
      app.boards[0].addList('TestB', '');
      app.boards.push(new Board('TestB'));
      app.boards[1].addList('TestC', '');
      app.boards[1].addList('TestD', '');
      app.removeList(0, 1);
      

      assert(app.boards[0].lists.length === 1, 'A list should have been removed from the first board.');
      assert(app.boards[0].lists[0].label === 'TestA', 'The second list should have been removed.');
      assert(app.boards[1].lists.length === 2, 'No list should have been removed from the second board.');
    });

    test('Removing the first list from the second board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards[0].addList('TestA', '');
      app.boards[0].addList('TestB', '');
      app.boards.push(new Board('TestB'));
      app.boards[1].addList('TestC', '');
      app.boards[1].addList('TestD', '');
      app.removeList(1, 0);
      

      assert(app.boards[1].lists.length === 1, 'A list should have been removed from the second board.');
      assert(app.boards[1].lists[0].label === 'TestD', 'The first list should have been removed.');
      assert(app.boards[0].lists.length === 2, 'No list should have been removed from the first board.');
    });
    test('Removing the second list from the first board.', function() {
      app.boards.push(new Board('TestA'));
      app.boards[0].addList('TestA', '');
      app.boards[0].addList('TestB', '');
      app.boards.push(new Board('TestB'));
      app.boards[1].addList('TestC', '');
      app.boards[1].addList('TestD', '');
      app.removeList(1, 1);
      

      assert(app.boards[1].lists.length === 1, 'A list should have been removed from the second board.');
      assert(app.boards[1].lists[0].label === 'TestC', 'The second list should have been removed.');
      assert(app.boards[0].lists.length === 2, 'No list should have been removed from the second board.');
    });
  });

  suite('Testing App.generateTaskCard', function() {
    test('Created a task card within the first list of the first board.', function() {
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateTaskCard(0, 0, 'Test', '');

      assert(app.boards[0].lists[0].tasks.length === 1, 'A task card should have been created' 
                                                      + ' within the first list of the first board.');
    });
    test('Created a task card within the second list of the first board.', function() {
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateTaskCard(0, 1, 'Test', '');

      assert(app.boards[0].lists[1].tasks.length === 1, 'A task card should have been created' 
                                                      + ' within the first list of the first board.');
    });
    test('Created a task card within the first list of the second board.', function() {
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateTaskCard(1, 0, 'Test', '');

      assert(app.boards[1].lists[0].tasks.length === 1, 'A task card should have been created' 
                                                      + ' within the first list of the first board.');
    });
    test('Created a task card within the second list of the second board.', function() {
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateBoardTemplate(BoardOptions.MOSCOW);
      app.generateTaskCard(1, 1, 'Test', '');

      assert(app.boards[1].lists[1].tasks.length === 1, 'A task card should have been created' 
                                                      + ' within the first list of the first board.');
    });
  });

  suite('Testing App.removeTaskCard', function() {
    test('Removed the first task card within the first list of the first board.', function() {
      app.boards.push(new Board('BoardA'));
      app.boards[0].addList('ListA');
      app.boards[0].lists[0].addTask('TestA', '');
      app.boards[0].lists[0].addTask('TestA2', '');
      app.boards[0].addList('ListB');
      app.boards[0].lists[1].addTask('TestB', '' );
      app.boards.push(new Board('BoardB'));
      app.boards[1].addList('ListA');
      app.boards[1].lists[0].addTask('TestC', '');

      app.removeTaskCard(0, 0);
      assert(app.boards[0].lists[0].tasks.length === 1, 'A task card should have been removed from the first list of the first board');
      assert(app.boards[0].lists[1].tasks.length === 1, 'A card should have not been removed from the second list of the first board');
      assert(app.boards[1].lists[0].tasks.length === 1, 'A card should have not been removed from the first list of the second board.');
      assert(app.boards[0].lists[0].tasks[0].label === 'TestA2', 'The first task should have been removed from the first list of the first board.')
    });

    test('Removed the second task card from the first list of the first board.', function() {
      app.boards.push(new Board('BoardA'));
      app.boards[0].addList('ListA');
      app.boards[0].lists[0].addTask('TestA', '');
      app.boards[0].lists[0].addTask('TestA2', '');
      app.boards[0].addList('ListB');
      app.boards[0].lists[1].addTask('TestB', '' );
      app.boards.push(new Board('BoardB'));
      app.boards[1].addList('ListA');
      app.boards[1].lists[0].addTask('TestC', '');

      app.removeTaskCard(0, 0);
      assert(app.boards[0].lists[0].tasks.length === 1, 'A task card should have been removed from the first list of the first board');
      assert(app.boards[0].lists[1].tasks.length === 1, 'A card should have not been removed from the second list of the first board');
      assert(app.boards[1].lists[0].tasks.length === 1, 'A card should have not been removed from the first list of the second board.');
      assert(app.boards[0].lists[0].tasks[0].label === 'TestA', 'The second task should have been removed from the first list of the first board.')
    });

    test('Removed a task card from the second list of the first board.', function() {
      app.boards.push(new Board('BoardA'));
      app.boards[0].addList('ListA');
      app.boards[0].lists[0].addTask('TestA', '');
      app.boards[0].lists[0].addTask('TestA2', '');
      app.boards[0].addList('ListB');
      app.boards[0].lists[1].addTask('TestB', '' );
      app.boards.push(new Board('BoardB'));
      app.boards[1].addList('ListA');
      app.boards[1].lists[0].addTask('TestC', '');

      app.removeTaskCard(0, 1);
      assert(app.boards[0].lists[1].tasks.length === 0, 'A task card should have been removed from the second list of the first board');
      assert(app.boards[0].lists[0].tasks.length === 2, 'A card should have not been removed from the first list of the first board');
      assert(app.boards[1].lists[0].tasks.length === 1, 'A card should have not been removed from the first list of the second board.');
    });

    test('Removed a task card from the first list of the second board.', function() {
      app.boards.push(new Board('BoardA'));
      app.boards[0].addList('ListA');
      app.boards[0].lists[0].addTask('TestA', '');
      app.boards[0].lists[0].addTask('TestA2', '');
      app.boards[0].addList('ListB');
      app.boards[0].lists[1].addTask('TestB', '' );
      app.boards.push(new Board('BoardB'));
      app.boards[1].addList('ListA');
      app.boards[1].lists[0].addTask('TestC', '');

      app.removeTaskCard(1, 0);
      assert(app.boards[1].lists[0].tasks.length === 0, 'A task card should have been removed from the first list of the second board');
      assert(app.boards[0].lists[0].tasks.length === 2, 'A card should have not been removed from the first list of the first board');
      assert(app.boards[0].lists[1].tasks.length === 1, 'A card should have not been removed from the second list of the first board.');
    })
  });

}); // end unit testing for Model.ts


