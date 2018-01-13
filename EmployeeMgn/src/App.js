// Root Component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAYgC_TBRjWhY7RUhXv-t18aXcmlEcyF_k',
      authDomain: 'employeemgn.firebaseapp.com',
      databaseURL: 'https://employeemgn.firebaseio.com',
      projectId: 'employeemgn',
      storageBucket: '',
      messagingSenderId: '1094246209134'
  };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
