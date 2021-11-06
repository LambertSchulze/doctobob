import React from 'react';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer'

import MainNavbar from './components/Navbar';
import Game from './views/Game';

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

function App() {
  return (
    <Provider store={store}>
      <MainNavbar />
      <Game />
    </Provider>
  );
}

export default React.memo(App);
