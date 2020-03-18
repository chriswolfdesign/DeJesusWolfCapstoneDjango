/**
 * test_task_card.js
 *
 * Unit testing for TaskCard.ts
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

let assert = require('chai').assert;
let TaskCard = require('../../src/model/task_card.js').TaskCard;

suite('Unit testing for TaskCard.ts', function() {
  let testTaskCard = null;

  // Set up testTaskCard
  suiteSetup(function() {
    testTaskCard = new TaskCard('adb1', 'Test Task Card');
  }); // end suiteSetup

  // Test the constructor
  suite('Testing TaskCard constructor', function() {
    test('Testing TaskCard.label', function() {
      assert(testTaskCard.label === 'adb1', 'Should equal adb1');
    }); // end TaskCard.label test

    test('Testing TaskCard.text', function() {
      assert(testTaskCard.text === 'Test Task Card',
          'Should equal Test Task Card');
    }); // end TaskCard.text test
  }); // end constructor tests
}); // end unit testing for TaskCard.ts

