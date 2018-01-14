// Root Component
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
