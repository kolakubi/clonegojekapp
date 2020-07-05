import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import globalReducer from './redux/reducers/globalReducers';
const globalStore = createStore(globalReducer);

const reduxApp = () => {
    return(
        <Provider store={globalStore}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => reduxApp);
