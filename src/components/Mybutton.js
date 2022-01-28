import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
export default function Mybutton({screenName, submitting, text, onPress}) {
  const navigation = useNavigation();
  const color = submitting ? '#000' : colors.white;
  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.navigate(screenName)}
        onPress={!submitting ? onPress : null}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#000046', '#1A21BC']}
          style={[styles.buttons, {color}]}>
          <View
            style={[
              {
                flex: 1,
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              },
              {color},
            ]}>
            <Text style={[{fontSize: 16, fontWeight: '500',color:"white"},{color},]}>{text}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.primary,
    width: '80%',
    marginHorizontal: 30,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
});
