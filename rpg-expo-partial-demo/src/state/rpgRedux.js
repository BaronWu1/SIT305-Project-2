// The types of actions that you can dispatch to modify the state of the store
export const actionType = {
  INITIALISE: 'INITIALISE',
  LOAD_GAME: 'LOAD_GAME',
  NEW_GAME: 'NEW_GAME',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  init: () => {
    return {type: actionType.INITIALISE, payload: null}
  },
  load: () => {
    return {type: actionType.LOAD_GAME, payload: null}
  },
  new: () => {
    return {type: actionType.NEW_GAME, payload: null}
  }
}

// Initial state of the store
const initialState = {
  gameState: 'UNINITIALISED'
}

// Function to handle actions and update the state of the store.
export const reducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {
    case actionType.INITIALISE: {
      return {
        gameState: 'INITIALISED GAME',
      }
    }
    case actionType.NEW_GAME: {
      return {
        gameState: 'NEW GAME',
      }
    }
    case actionType.LOAD_GAME: {
      return {
        gameState: 'LOADED GAME',
      }
    }
  }

  return state
}
