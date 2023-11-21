import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/root.store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}

export default App;
