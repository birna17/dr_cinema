import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducer from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
      <AppContainer style={{ backgroundColor: '#555' }} />
    </Provider>
  );
}
