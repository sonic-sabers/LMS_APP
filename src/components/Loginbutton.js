import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../constants';
export default function Loginbutton({ screenName, text }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <View style={styles.buttons}>
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
              fontWeight: '500',
              fontFamily: 'poppins',
            }}>

            {text ?
              <>{text}</> :
              <>
                Log In
              </>
            }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.white,
    width: '80%',
    marginHorizontal: 30,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.primary,
    marginVertical: 20,
    alignSelf: 'center',

  },
});
