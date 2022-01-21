import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Loginbutton, Mybutton, Socialbutton, Toinput} from '../components';
import {colors} from '../constants';
import Toregister from '../components/Toregister';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';

export default function Loginscreen({navigation}) {

const ScreenName="Homescreen";
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [hidePass, setHidePass] = React.useState(true);
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [hasEmailErrors, setEmailErrors] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}} behaviour='padding'>
      <View
        style={{
          flex: 1,
          padding: 24,
          backgroundColor: colors.white,
          // justifyContent: 'space-evenly',
        }}>
        <KeyboardAvoidingView>
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

          <Input
            style={{height: 40, marginTop: 15}}
            placeholder="Enter email address"
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
              width: '95%',
              alignSelf: 'center',
              marginTop: -10,
              height:1
            }}
          />
          {/* <View style={{flexDirection: 'row'}}>
          <Input
            style={{height: 40, width: '60%'}}
            placeholder="Password"
            onChangeText={Password => setPassword(Password)}
            // defaultValue={text}
            secureTextEntry={hidePass ? true : false}
            // textContentType="username"
            // returnKeyType="next"
            // keyboardType="email-address"
            // autoCapitalize="none"
            // error={hasEmailErrors}
          />
          <Icon
            name={hidePass ? 'eye-slash' : 'eye'}
            size={19}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
            style={{alignSelf: 'center', marginBottom: 19, paddingRight: 10}}
          />
        </View> */}
          <View style={{marginTop: 30}}>
            <Mybutton screenName="Homescreen" text="Login" />
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
            <Toregister />
          </View>
        </KeyboardAvoidingView>
      </View>
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
