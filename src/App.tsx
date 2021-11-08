import React from 'react';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import compose from 'redux-devtools-extension';

import reducer from './store/reducer'

import MainNavbar from './components/Navbar';
import Game from './views/Game';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

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
