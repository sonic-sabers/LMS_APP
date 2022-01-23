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
import Toregister from '../components/Toregister';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';

export default function Register({navigation}) {
  const ScreenName = 'Bottomtab';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [hidePass, setHidePass] = React.useState(true);
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [hasEmailErrors, setEmailErrors] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
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
                Enter your details
              </Text>
              <TextInput
                label="Full Name"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                // placeholder="Enter email address"
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
              <TextInput
                label="Enter email address"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
              {/* TO add different one */}
              <TextInput
                label="Enter mobile Number"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                
                onChangeText={text => setText(text)}
                defaultValue={text}
              />

              <TextInput
                label="Enter your address"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                onChangeText={text => setText(text)}
                defaultValue={text}
              />

              <TextInput
                label="Enter zip code"
                placeholderTextColor="#000"
                style={{
                  marginTop: 5,
                  backgroundColor: colors.primary,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
              <View style={{marginLeft: 10, marginRight: 10}}>
                <PasswordInputText
                  value={Password}
                  onChangeText={Password => setPassword(Password)}
                  useNativeDriver={false}
                  // underlineColorAndroid={'black'}
                  baseColor="black"
                  // style={{borderBottomWidth: 2,paddingBottom:-10}}
                />
              </View>
              <View
                style={{
                  borderColor: '#333',
                  borderWidth: 0.5,
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: -10,
                  height: 1,
                }}
              />
              <View style={{marginLeft: 12, marginRight: 12}}>
                <PasswordInputText
                  value={Password}
                  onChangeText={Password => setPassword(Password)}
                  useNativeDriver={false}
                  // underlineColorAndroid={'black'}
                  baseColor="black"
                  // style={{borderBottomWidth: 2,paddingBottom:-10}}
                />
              </View>
              <View
                style={{
                  borderColor: '#333',
                  borderWidth: 0.5,
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: -10,
                  height: 1,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 15,
                  marginHorizontal: 8,
                }}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  style={{color: '#fff'}}
                />
                <Text style={{fontWeight: '500'}}>
                  By registering, I agree to LMS Terms of Service and Privacy
                  Policy.
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Mybutton screenName="Otpscreen" text="Continue" />
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  marginBottom: 40,
                  flexDirection: 'row',
                  marginTop:10
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.black,
                      fontWeight: '400',
                    }}>
                    Already have an account?
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                  {/* onPress={() => navigation.navigate(Loginscreen)}> */}
                  
                    <Text
                      style={{
                        fontSize: 15,
                        color: colors.primary,
                        fontWeight: '700',
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackgrounds>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#EDEEF0',
    width: '80%',
    marginHorizontal: 30,
    height: 50,
    borderRadius: 7,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 12,
  },
});
