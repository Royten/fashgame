import { createSelector } from 'reselect';

/**
 * Direct selector to the closetPage state domain
 */
const selectClosetPageDomain = () => (state) => state.get('closetPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClosetPage
 */

const makeSelectClosetPage = () => createSelector(
  selectClosetPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectClosetPage;
export {
  selectClosetPageDomain,
};
