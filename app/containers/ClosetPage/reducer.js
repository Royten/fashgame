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
    [],
    [],
    [],
    [],
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
      wearInner = wear.get(action.item.type);

      if (wearInner.includes(action.item.img)) {
        wearInner = wearInner.remove(wearInner.indexOf(action.item.img));
      } else {
        wearInner = fromJS([action.item.img]);
      }

      if (action.item.type === 2 || action.item.type === 3) {
        wear = wear.set(4, fromJS([]));
      } else if (action.item.type === 4) {
        wear = wear.set(2, fromJS([]));
        wear = wear.set(3, fromJS([]));
      }

      wear = wear.set(action.item.type, wearInner);
      return state.set('wearables', wear);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default closetPageReducer;
