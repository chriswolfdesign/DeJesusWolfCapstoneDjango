/*
 * test_list_factory.js
 *
 * Unit testing for ListFactory.ts
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let assert = require('chai').assert;
let ListFactory = require('../../../src/model/factories/list_factory.js').ListFactory;
let ListOptions = require('../../../src/model/enums/list_options.js').ListOptions;
let Colors = require('../../../src/model/enums/colors.js').Colors;

suite('Unit testing for ListFactory.ts', function() {
  let listFactory = null;
  let testList = null;

  // Set up our factory
  suiteSetup(function() {
    listFactory = new ListFactory();
  }); // end set up

  // test generate list
  suite('Testing ListFactory.generateList', function() {
    test('Testing ListFactory.generateList(ListOptions.MUST)', function() {
      testList = listFactory.generateList(ListOptions.MUST);
      assert(testList.label === 'Must', 'Should be Must');
      assert(testList.color === Colors.GREEN, 'Should be green');
      assert(testList.tasks.length === 0, 'Should be empty');
    }); // end ListFactory.generateList(ListOptions.MUST) test

    test('Testing ListFactory.generateList(ListOptions.SHOULD)', function() {
      testList = listFactory.generateList(ListOptions.SHOULD);
      assert(testList.label === 'Should', 'Should be Should');
      assert(testList.color === Colors.YELLOW, 'Should be yellow');
      assert(testList.tasks.length === 0, 'Should be empty');
    }); // end ListFactory.generateList(ListOptions.SHOULD) test

    test('Testing ListFacotry.generateList(ListOptions.COULD)', function() {
      testList = listFactory.generateList(ListOptions.COULD);
      assert(testList.label === 'Could', 'Should be Could');
      assert(testList.color === Colors.ORANGE, 'Should be orange');
      assert(testList.tasks.length === 0, 'Should be empty');
    }); // end ListFactory.generateList(ListOptions.COULD) test

    test('Testing ListFactory.generateList(ListOptions.WONT)', function() {
      testList = listFactory.generateList(ListOptions.WONT);
      assert(testList.label === 'Wont', 'Should be Wont');
      assert(testList.color === Colors.RED, 'Should be red');
      assert(testList.tasks.length === 0, 'Should be empty');
    }); // end ListFactory.generateList(ListOptions.WONT) test
  }); // end ListFactory.generateList tests
}); // end unit testing for ListFactory.ts
