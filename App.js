import {View} from 'react-native';
import React from 'react';
import Appcontainer from './src/navigation/Appcontainer';

let x = 2;

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Appcontainer login={x} />
    </View>
  );
}
