
import { fromJS } from 'immutable'
import votingScreenReducer from '../reducer'

describe('votingScreenReducer', () => {
  it('returns the initial state', () => {
    expect(votingScreenReducer(undefined, {})).toEqual(fromJS({}))
  })
})
