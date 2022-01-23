import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  // TextInput,
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

export default function Loginscreen({navigation}) {
  const ScreenName = 'Resetpass';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [hidePass, setHidePass] = React.useState(true);
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [hasEmailErrors, setEmailErrors] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackgrounds>
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
                marginVertical: 10,
                fontSize: 26,
                textAlign: 'center',
                alignSelf: 'center',
                textAlignVertical: 'center',
                fontWeight: '500',
                color: colors.black,
                marginTop: 70,
              }}>
              Welcome back! {'\n'} Sign in to continue!
            </Text>

            <TextInput
              label="Enter email address"
              style={{
                marginTop: 15,
                backgroundColor: colors.primary,
                marginHorizontal: 10,
                placeholderTextColor: '#111',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              // placeholder="Enter email address"
              onChangeText={text => setText(text)}
              defaultValue={text}
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
                width: '92%',
                alignSelf: 'center',
                marginTop: -8.5,
                height: 1,
              }}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginTop: 5,
                marginRight: 10,
              }}
              onPress={() => navigation.navigate(Entermail)}>
              <Text style={{color: colors.black, fontWeight: '800'}}>
                Forget Password?
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: 30}}>
              <Mybutton screenName="Bottomtab" text="Login" />
            </View>

            <Text
              style={{
                alignSelf: 'center',
                marginVertical: 10,
                fontSize: 18,
                fontWeight: '400',
              }}>
              or
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenName)}>
              <View style={styles.buttons}>
                {/* <Icon name="arrow-right" size={18} color={colors.black} /> */}
                <Image
                  source={require('../assets/imgs/google.png')}
                  style={{width: 27, height: 27, marginRight: 17}}
                />
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.black,
                      fontWeight: '500',
                    }}>
                    Log In With Google
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenName)}>
              <View style={styles.buttons}>
                {/* <Icon name="arrow-right" size={18} color={colors.black} /> */}
                <Image
                  source={require('../assets/imgs/facebook.png')}
                  style={{width: 27, height: 27, marginRight: 17}}
                />
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.black,
                      fontWeight: '500',
                    }}>
                    Log In With Facebook
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{alignSelf: 'center', marginBottom: 40}}>
              <Toregister ScreenName="Register" />
            </View>
          </KeyboardAvoidingView>
        </View>
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
