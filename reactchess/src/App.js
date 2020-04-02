import React from 'react';
import { Provider } from 'react-redux';

import Interface from '../src/components/interface/Interface';
import store from './store';
import blackKnight from '../src/blackKnight.png';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header className="header">
        <h1 className="primary-header">React-Redux Chess</h1>
        <span>
          {' '}
          <img
            src={blackKnight}
            className="chess-logo"
            alt="A black knight chess piece"
          />{' '}
        </span>
      </header>

      <Interface />
    </Provider>
  );
}

export default App;
