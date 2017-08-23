
import { fromJS } from 'immutable'
import closetPageReducer from '../reducer'

describe('closetPageReducer', () => {
  it('returns the initial state', () => {
    expect(closetPageReducer(undefined, {})).toEqual(fromJS({}))
  })
})
