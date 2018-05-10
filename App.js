import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/state/rpgRedux'
import AppMain from './src/screen/AppMain';

const store = createStore(reducer)

console.log(store)

const AppMainWithStore = () => (
  <AppMain store={store}/>
)

export default AppMainWithStore;
