import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  ImageBackgrounds,
  Loginbutton,
  Mybutton,
  Socialbutton,
  Toinput,
} from '../components';
import {colors} from '../constants';
import Toregister from '../components/Toregister';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
// const navigation = useNavigation();

// export default function Loginscreen({navigation}) {
export default function ForgetP({ScreenName}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          // marginTop: 5,
          marginRight: 10,
        }}
        onPress={() => navigation.navigate(ScreenName)}>
        <Text style={{color: colors.black, fontWeight: '800'}}>
          Forget Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
