import { fromJS } from 'immutable';

import {
  SET_LOADING,
  TOGGLE_MENU,
} from './constants';

const initialState = fromJS({
  loading: true,
  menuShowing: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set('loading', action.loading);
    case TOGGLE_MENU:
      return state.set('menuShowing', !state.get('menuShowing'));
    default:
      return state;
  }
}

export default appReducer;
