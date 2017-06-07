
import { fromJS } from 'immutable';
import challengeScreenReducer from '../reducer';

describe('challengeScreenReducer', () => {
  it('returns the initial state', () => {
    expect(challengeScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});
