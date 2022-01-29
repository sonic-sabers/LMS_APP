import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appnavigator from './Appnavigator';
import Authnavigator from './Authnavigator';
let x = 0;

export default function Appcontainer({login}) {
  return (
    <View style={{flex:1,height: '100%',width: '100%'}}>
      {login % 2 == 0 ? <Appnavigator /> : <Authnavigator />}
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
