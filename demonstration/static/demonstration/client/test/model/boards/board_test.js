/**
 * test_board.js
 *
 * Unit testing for Board.ts
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let assert = require('chai').assert;
let Board = require('../../../src/model/boards/board.js').Board;
let Colors = require('../../../src/model/enums/colors.js').Colors;
let ListOptions = require('../../../src/model/enums/list_options.js').ListOptions;

suite('Unit testing for Board.ts', function() {
  let testBoard = null;

  // Set up our board
  setup(function() {
    testBoard = new Board('Test Board');
  }); // end set up

  // Test the constructor
  suite('Testing Board Constructor', function() {
    test('Testing Board.title', function() {
      assert(testBoard.title === 'Test Board');
    }); // end Board.title test

    test('Testing Board.lists', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
    }); // end Board.lists test
  }); // end constructor tests

  // Test the addList function
  suite('Testing Board.addList', function() {
    test('Add colorless list to an empty board', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'TestList1');
      assert(testBoard.lists[0].color === Colors.GRAY);
    }); // end colorless list to empty board test

    test('Add red list to an empty board', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addList('TestList1', Colors.RED);
      assert(testBoard.lists.length === 1 , 'Should have one list');
      assert(testBoard.lists[0].label === 'TestList1');
      assert(testBoard.lists[0].color === Colors.RED);
    }); // end red list to empty board test

    test('Add colorless list to an empty board', function() {
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      testBoard.addList('TestList2');
      assert(testBoard.lists.length === 2, 'Should have two lists');
      assert(testBoard.lists[1].label === 'TestList2');
      assert(testBoard.lists[1].color === Colors.GRAY);
    }); // end colorless list to nonempty board test

    test('Add red list to an empty board', function() {
      testBoard.addList('TestList1');
      assert(testBoard.lists.length === 1, 'Should have one list');
      testBoard.addList('TestList2', Colors.RED);
      assert(testBoard.lists.length === 2, 'Should have two lists');
      assert(testBoard.lists[1].label === 'TestList2');
      assert(testBoard.lists[1].color === Colors.RED);
    })
  }); // end Board.addList tests

  // Test Board.addListTemplate
  suite('Testing Board.addListTemplate', function() {
    test('Add a Must Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.MUST);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Must', 'Should be Must');
      assert(testBoard.lists[0].color === Colors.GREEN, 'Should be Green');
    }); // end must have list test

    test('Add a Should Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.SHOULD);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Should', 'Should be Should');
      assert(testBoard.lists[0].color === Colors.YELLOW, 'Should be Yellow');
    }); // end should have list test

    test('Add a Could Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.COULD);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Could', 'Should be Could');
      assert(testBoard.lists[0].color === Colors.ORANGE, 'Should be Orange');
    }); // end could have list test

    test('Add a Wont Have List', function() {
      assert(testBoard.lists.length === 0, 'Should be empty');
      testBoard.addListTemplate(ListOptions.WONT);
      assert(testBoard.lists.length === 1, 'Should have one list');
      assert(testBoard.lists[0].label === 'Wont', 'Should be Wont');
      assert(testBoard.lists[0].color === Colors.RED, 'Should be Red');
    }); // end wont have list test
  }); // end Board.addListTemplate tests

  suite('Testing Board.removeList', function() {
    test('Remove the first list of Board', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.removeList(0);
      assert(testBoard.lists.length !== 0, 'A list should have been removed.');
      assert(testBoard.lists[0].label === 'TestB', 'The first list should\'ve been removed.');
    });//end of remove first list

    test('Remove the first list of Board', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.removeList(1);
      assert(testBoard.lists.length !== 0, 'A list should have been removed.');
      assert(testBoard.lists[0].label === 'TestA', 'The second list should\'ve been removed.');
    });//end of remove first list
  }); // end of Board.removeList tests

  suite('Testing Board.generateTaskCard', function() {
    test('Generated a task card within the first list', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.generateTaskCard(0, 'TEST', 'This is a test.');
      assert(testBoard.lists[0].tasks.length !== 0, 'A task card should have been created in the first list.');
      assert(testBoard.lists[1].tasks.length === 0, 'A task card shouldn\'t have been created in the second list.');
    }); // end of generating a card in the first list test

    test('Generated a task card within the second list', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.generateTaskCard(1, 'TEST', 'This is a test.');
      assert(testBoard.lists[1].tasks.length !== 0, 'A task card should have been created in the second list.');
      assert(testBoard.lists[0].tasks.length === 0, 'A task card shouldn\'t have been created in the first list.');
    }); // end of generating a card in the second list test
  });//end of Board.generateTaskCard tests

  suite('Testing Board.removeTaskCard', function() {
    test('Remove the first task card within the first list.', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.lists[0].addTask('AA', '');
      testBoard.lists[0].addTask('AB', '');
      testBoard.lists[1].addTask('BA', '');
      testBoard.removeTaskCard(0, 0);

      assert(testBoard.lists[0].tasks.length === 1, 'A task card should have been removed from the first list.');
      assert(testBoard.lists[0].tasks[0].label === 'AB', 'The first task card should have been removed from the first list.');
      assert(testBoard.lists[1].tasks.length !== 0, 'A task card shouldn\'t haven been removed from the second list.');
    });

    test('Remove the second task card within the first list.', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.lists[0].addTask('AA', '');
      testBoard.lists[0].addTask('AB', '');
      testBoard.lists[1].addTask('BA', '');
      testBoard.removeTaskCard(0, 1);

      assert(testBoard.lists[0].tasks.length === 1, 'A task card should have been removed from the first list.');
      assert(testBoard.lists[0].tasks[0].label === 'AA', 'The first task card should have been removed from the first list.');
      assert(testBoard.lists[1].tasks.length !== 0, 'A task card shouldn\'t haven been removed from the second list.');
    });

    test('Remove the first task card within the second list.', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.lists[1].addTask('AA', '');
      testBoard.lists[1].addTask('AB', '');
      testBoard.lists[0].addTask('BA', '');
      testBoard.removeTaskCard(1, 0);

      assert(testBoard.lists[1].tasks.length === 1, 'A task card should have been removed from the second list.');
      assert(testBoard.lists[1].tasks[0].label === 'AB', 'The first task card should have been removed from the second list.');
      assert(testBoard.lists[0].tasks.length !== 0, 'A task card shouldn\'t haven been removed from the first list.');
    });

    test('Remove the second task card within the second list.', function() {
      testBoard.addList('TestA');
      testBoard.addList('TestB');
      testBoard.lists[1].addTask('AA', '');
      testBoard.lists[1].addTask('AB', '');
      testBoard.lists[0].addTask('BA', '');
      testBoard.removeTaskCard(1, 1);

      assert(testBoard.lists[1].tasks.length === 1, 'A task card should have been removed from the second list.');
      assert(testBoard.lists[1].tasks[0].label === 'AA', 'The second task card should have been removed from the second list.');
      assert(testBoard.lists[0].tasks.length !== 0, 'A task card shouldn\'t haven been removed from the first list.');
    });

  });

}); // end Board.ts tests
