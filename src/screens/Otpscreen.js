import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  // TextInput,
  ScrollView,
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
  OtpInput,
} from '../components';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function Otpscreen({navigation}) {
  const ScreenName = 'Homescreen';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [text, setText] = React.useState('');

  const [codeArr, setCodeArr] = React.useState([]);
  const [number, setNumber] = React.useState();
  const code = codeArr.join('');
  const [confirm, setConfirm] = React.useState(null); //if null means no otp message send

  handleCode = (e, index) => {
    const codeArray = [...code];
    codeArray[index] = e;
    setCodeArr(codeArray);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackgrounds>
        <ScrollView>
          <View
            style={{
              // flex: 1,
              padding: 24,
              // backgroundColor: colors.white,
              // justifyContent: 'space-evenly',
            }}>
            <KeyboardAvoidingView behaviour="position">
              <Text
                style={{
                  //   marginVertical: 10,
                  fontSize: 26,
                  //   textAlign: 'center',
                  //   alignSelf: 'center',
                  //   textAlignVertical: 'center',
                  fontWeight: '500',
                  color: colors.black,
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="left" size={31} color="#000" />
                </TouchableOpacity>
              </Text>
              <Text
                style={{
                  //   marginVertical: 10,
                  fontSize: 26,
                  //   textAlign: 'center',
                  //   alignSelf: 'center',
                  //   textAlignVertical: 'center',
                  fontWeight: '500',
                  color: colors.black,
                  marginTop: 10,
                }}>
                Enter OTP
              </Text>

              <OtpInput
                onChangeText={(e, index) => handleCode(e, index)}
                value={codeArr}
                noOfInput={4}
              />
              <View
                style={{
                  //   alignSelf: 'center',
                  marginBottom: 40,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.black,
                      fontWeight: '400',
                    }}>
                    00:30
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => alert('OTP Send')}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: colors.primary,
                        fontWeight: '700',
                      }}>
                      Resend OTP
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginTop: 0}}>
                <Mybutton screenName="Bottomtab" text="Submit" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackgrounds>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#000',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
