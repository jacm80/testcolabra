import React from 'react';
// import { StatusBar } from 'react-native';
// import { Text, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { AppLoading } from 'expo';

import reducers from './reducers';

import AppWithNavigationState from './navigators/AppNavigator';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

import rootSaga from './sagas';
const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isReady: false,
  //   };
  //   StatusBar.setHidden(true);
  // }

  render() {
    // if (!this.state.isReady) {
    //   return ( 
    //     <AppLoading startAsync={this.cacheResourcesAsync} 
    //       onFinish = { () => this.setState({ isReady: true }) }
    //     />
    //   );
    // }

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}