// The types of actions that you can dispatch to modify the state of the store
export const types = {
  LOAD_GAME: 'LOAD_GAME',
  NEW_GAME: 'NEW_GAME',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  load: () => {
    return {type: types.LOAD_GAME, payload: null}
  },
  new: () => {
    return {type: types.NEW_GAME, payload: null}
  }
}

// Initial state of the store
const initialState = {
  gameState: 'NEW_GAME'
}

// Function to handle actions and update the state of the store.
export const reducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {
    case types.NEW_GAME: {
      return {
        gameState: 'NEW_GAME',
      }
    }
    case types.LOAD_GAME: {
      return {
        gameState: 'LOAD_GAMEZ',
      }
    }
  }

  return state
}
