/*
 *
 * ClosetPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_TAB,
  SELECT_ITEM,
} from './constants';

const initialState = fromJS({
  activeTab: 0,
  wearables: [
    [],
    [],
    [],
  ],
});

function closetPageReducer(state = initialState, action) {
  let wear;
  let wearInner;
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('activeTab', action.tab);
    case SELECT_ITEM:
      wear = state.get('wearables');
      wearInner = wear.get(action.itemtype);

      if (wearInner.includes(action.item)) {
        wearInner = wearInner.remove(wearInner.indexOf(action.item));
      } else {
        wearInner = wearInner.push(action.item);
      }
      wear = wear.set(action.itemtype, wearInner);
      return state.set('wearables', wear);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default closetPageReducer;
