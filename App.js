import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAUktXHqPACV7uCxfpW2-OyyCVWKqAIEWg',
      authDomain: 'employees-8ef16.firebaseapp.com',
      databaseURL: 'https://employees-8ef16.firebaseio.com',
      projectId: 'employees-8ef16',
      storageBucket: 'employees-8ef16.appspot.com',
      messagingSenderId: '639805281984'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
