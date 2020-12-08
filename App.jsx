import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './src/routes';
import cinemasReducer from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(cinemasReducer)}>
      <AppContainer style={{ backgroundColor: '#555' }} />
    </Provider>
  );
}
