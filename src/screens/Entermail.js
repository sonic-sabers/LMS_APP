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
} from '../components';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';

export default function Entermail({navigation}) {
  const ScreenName = 'Bottomtab';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [text, setText] = React.useState('');
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
                Enter your email
              </Text>
              <TextInput
                label="Enter email address"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                // placeholder="Enter email address"
                onChangeText={text => setText(text)}
                defaultValue={text}
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenName)}>
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
                <Mybutton screenName="Otpscreen" text="Send OTP" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackgrounds>
    </SafeAreaView>
  );
}
