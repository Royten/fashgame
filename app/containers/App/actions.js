import {
  SET_LOADING,
  TOGGLE_MENU,
} from './constants';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}
