/*
 *
 * ClosetPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_TAB,
  SELECT_ITEM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeTab(tab) {
  return {
    type: CHANGE_TAB,
    tab,
  };
}

export function selectItem(item, itemtype) {
  return {
    type: SELECT_ITEM,
    item,
    itemtype,
  };
}
