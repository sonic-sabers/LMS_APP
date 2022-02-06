import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Toregister({ScreenName, Name}) {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:"row"}}>
      <Text style={{fontSize: 15, color: colors.black, fontWeight: '400'}}>
        Don't have an account ? </Text>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenName)}>
        <Text style={{fontSize: 15, color: colors.primary, fontWeight: '700'}}>
           Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#EDEEF0',
    width: '75%',
    marginHorizontal: 50,
    // height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
