import React from 'react'
import { createStore } from 'redux'
import { reducer } from './src/state/rpgRedux'
import AppMenu from './src/screen/AppMenu';

const store = createStore(reducer)

const AppMenuWithStore = () => (
  <AppMenu store={store}>
  </AppMenu>
)

export default AppMenuWithStore;
