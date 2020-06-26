import React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Router from './components/router';

//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import globalReducers from './redux/reducers/globalReducers';
const globalStore = createStore(globalReducers);


class App extends Component{
  render(){
    return(
      <Provider store={globalStore}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;
