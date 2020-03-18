/**
 * test_board_factory.js
 *
 * Unit testing for BoardFactory.ts
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 */

let assert = require('chai').assert;
let BoardFactory = require('../../../src/model/factories/board_factory.js').BoardFactory;
let Colors = require('../../../src/model/enums/colors.js').Colors;
let BoardOptions = require('../../../src/model/enums/board_options.js').BoardOptions;

suite('Unit testing for BoardFactory.ts', function() {
  let boardFactory = null;
  let testBoard = null;

  // Set up our factory
  setup(function() {
    boardFactory = new BoardFactory();
  }); // end set up

  // test generateBoard
  suite('Testing BoardFactory.genereateBoard(BoardOptions.MOSCOW)', function() {
    test('Testing BoardFactory Must list', function() {
      testBoard = boardFactory.generateBoard(BoardOptions.MOSCOW);
      assert(testBoard.title === 'MoSCoW Board', 'Should be MoSCoW Board');
      assert(testBoard.lists[0].tasks.length === 0, 'Should be empty');
      assert(testBoard.lists[0].label === 'Must', 'Should be Must');
      assert(testBoard.lists[0].color === Colors.GREEN, 'Should be Green');
    }); // end MOSCOW must test

    test('Testing BoardFactory Should list', function() {
      testBoard = boardFactory.generateBoard(BoardOptions.MOSCOW);
      assert(testBoard.title === 'MoSCoW Board', 'Should be MoSCoW Board');
      assert(testBoard.lists[1].tasks.length === 0, 'Should be empty');
      assert(testBoard.lists[1].label === 'Should', 'Should be Should');
      assert(testBoard.lists[1].color === Colors.YELLOW, 'Should be Yellow');
    }); // end MOSCOW should test

    test('Testing BoardFactory Could list', function() {
      testBoard = boardFactory.generateBoard(BoardOptions.MOSCOW);
      assert(testBoard.title === 'MoSCoW Board', 'Should be MoSCoW Board');
      assert(testBoard.lists[2].tasks.length === 0, 'Should be empty');
      assert(testBoard.lists[2].label === 'Could', 'Should be Could');
      assert(testBoard.lists[2].color === Colors.ORANGE, 'Should be Orange');
    }); // end MOSCOW could test

    test('Testing BoardFactory Wont list', function() {
      testBoard = boardFactory.generateBoard(BoardOptions.MOSCOW);
      assert(testBoard.title === 'MoSCoW Board', 'Should be MoSCoW Board');
      assert(testBoard.lists[3].tasks.length === 0, 'Should be empty');
      assert(testBoard.lists[3].label === 'Wont', 'Should be Wont');
      assert(testBoard.lists[3].color === Colors.RED, 'Should be Red');
    }); // end MOSCOW wont test
  }); // end BoardFactory.generateBoard(BoardOptions.MOSCOW) tests
}); // end unit testing for BoardFactory.ts
