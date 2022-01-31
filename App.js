import {View} from 'react-native';
import React from 'react';
import Appcontainer from './src/navigation/Appcontainer';
import {Provider as PaperProvider} from 'react-native-paper';

//put 1 for login 2 for Home screen
let x = 2;
export default function App() {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <Appcontainer login={x} />
      </View>
    </PaperProvider>
  );
}
