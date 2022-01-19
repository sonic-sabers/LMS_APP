import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../constants';
export default function Mybutton({screenName,text}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <View style={styles.buttons}>
          <Text style={{fontSize:16,color:colors.white,fontWeight:"500"}}> {text}</Text>
        </View>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.primary,
      width: '80%',
    marginHorizontal:30,
    height: 50,
    borderRadius: 6,
    justifyContent:'center',
    alignItems: 'center',
  },
});
