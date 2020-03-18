/**
 * ListOptions.ts
 *
 * A JavaScript object to act as an enumeration for list choices in our
 * ListFactory
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 5, 2019)
 */

export enum ListOptions {
  MUST = 'Must',
  SHOULD = 'Should',
  COULD = 'Could',
  WONT = 'Wont',
  BACKLOG = 'Backlog',
  INPROGRESS = 'InProgress',
  INREVIEW = 'InReview',
  COMPLETE = 'Complete',
} // end ListOptions
