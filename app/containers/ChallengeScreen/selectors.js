import { createSelector } from 'reselect';

/**
 * Direct selector to the challengeScreen state domain
 */
const selectChallengeScreenDomain = () => (state) => state.get('challengeScreen');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChallengeScreen
 */

const makeSelectChallengeScreen = () => createSelector(
  selectChallengeScreenDomain(),
  (substate) => substate.toJS()
);

export default makeSelectChallengeScreen;
export {
  selectChallengeScreenDomain,
};
