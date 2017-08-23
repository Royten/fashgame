import { createSelector } from 'reselect'

/**
 * Direct selector to the votingScreen state domain
 */
const selectVotingScreenDomain = () => (state) => state.get('votingScreen')

/**
 * Other specific selectors
 */

/**
 * Default selector used by VotingScreen
 */

const makeSelectVotingScreen = () => createSelector(
  selectVotingScreenDomain(),
  (substate) => substate.toJS()
)

export default makeSelectVotingScreen
export {
  selectVotingScreenDomain
}
