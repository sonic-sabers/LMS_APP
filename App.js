import {View} from 'react-native';
import React from 'react';
import Appcontainer from './src/navigation/Appcontainer';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/store';

//put 1 for login 2 for Home screen
let x = 2;
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={{flex: 1}}>
          <Appcontainer login={x} />
        </View>
      </PaperProvider>
    </Provider>
  );
}
