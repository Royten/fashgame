import { createSelector } from 'reselect'

/**
 * Global state
 */
const selectGlobal = (state) => state.get('global')

/**
 * Loading state
 */
const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
)

const makeSelectMenuShowing = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('menuShowing')
)

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectMenuShowing,
  makeSelectLocationState
}
