import React from 'react';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer'

import MainNavbar from './components/Navbar';
import AnamBoard from './components/AnamBoard';
import TopicList from './components/TopicList'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

function App() {
  return (
    <Provider store={store}>
      <Container>
        <MainNavbar />
        <Row>
          <Col><AnamBoard /></Col>
          <Col><TopicList /></Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default React.memo(App);
