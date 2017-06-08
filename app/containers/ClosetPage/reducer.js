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
  BUY_ITEM,
} from './constants';

import items from './fakedata';

const initialState = fromJS({
  balance: 40000,
  activeTab: 0,
  items,
  currentItems: [],
  boughtItems: [],
});

function closetPageReducer(state = initialState, action) {
  let boughtItems;
  let currentItems;
  let balance;
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('activeTab', action.tab);
    case SELECT_ITEM:
      currentItems = state.get('currentItems');


      if (currentItems.some((e) => e.name === action.item.name)) {
        currentItems = currentItems.filter((e) => e.type !== action.item.type);
      } else {
        currentItems = currentItems.filter((e) => e.type !== action.item.type);
        currentItems = currentItems.push(action.item);
      }

      if (action.item.type === 2 || action.item.type === 3) {
        currentItems = currentItems.filter((e) => e.type !== 4);
      } else if (action.item.type === 4) {
        currentItems = currentItems.filter((e) => e.type !== 2 && e.type !== 3);
      }

      return state.set('currentItems', currentItems);
    case BUY_ITEM:
      boughtItems = state.get('boughtItems');
      boughtItems = boughtItems.push(action.item);

      balance = state.get('balance');
      balance -= action.item.price;

      return state.merge({ boughtItems, balance });
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default closetPageReducer;
