import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyBPcOsqWIg4DTGJ3M4_Uu2D-ubj-b5-YSU',
      authDomain: 'manager-c6000.firebaseapp.com',
      databaseURL: 'https://manager-c6000.firebaseio.com',
      projectId: 'manager-c6000',
      storageBucket: 'manager-c6000.appspot.com',
      messagingSenderId: '342584529127'
    };
    firebase.initializeApp(config);
  }
  render() {
    // the third arugment is a store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
