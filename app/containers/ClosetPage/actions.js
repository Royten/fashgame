/*
 *
 * ClosetPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_TAB,
  SELECT_ITEM,
  BUY_ITEM
} from './constants'

export function defaultAction () {
  return {
    type: DEFAULT_ACTION
  }
}

export function changeTab (tab) {
  return {
    type: CHANGE_TAB,
    tab
  }
}

export function selectItem (item) {
  return {
    type: SELECT_ITEM,
    item
  }
}

export function buyItem (item) {
  return {
    type: BUY_ITEM,
    item
  }
}
