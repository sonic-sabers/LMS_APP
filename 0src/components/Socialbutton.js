import {StyleSheet, Text, View,Image, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Socialbutton({ScreenName, Name,logo}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenName)}>
        <View style={styles.buttons}>
          {/* <Icon name="arrow-right" size={18} color={colors.black} /> */}
      <Image source={logo} style={{width: 50, height: 50}} />
          
          <Text style={{fontSize: 16, color: colors.black, fontWeight: '500'}}>
            {Name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#EDEEF0",
    width: '75%',
    marginHorizontal: 50,
    // height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
});
