// The types of actions that you can dispatch to modify the state of the store
export const actionTypes = {
  INITIALISE: 'INITIALISE',
  LOAD_GAME: 'LOAD_GAME',
  NEW_GAME: 'NEW_GAME',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  init: () => {
    return {type: actionTypes.INITIALISE, payload: null}
  },
  load: () => {
    return {type: actionTypes.LOAD_GAME, payload: null}
  },
  new: () => {
    return {type: actionTypes.NEW_GAME, payload: null}
  }
}

// Initial state of the store
const initialState = {
  gameState: 'UNSTARTED'
}

// Function to handle actions and update the state of the store.
export const reducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {
    case actionTypes.INITIALISE: {
      return {
        gameState: 'INITIAL',
      }
    }
    case actionTypes.NEW_GAME: {
      return {
        gameState: 'NEW',
      }
    }
    case actionTypes.LOAD_GAME: {
      return {
        gameState: 'LOAD',
      }
    }
  }

  return state
}
