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

export default function Resetpass({navigation}) {
  const ScreenName = 'Homescreen';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [Password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
          <View
            style={{
              padding: 24,
            }}>
            <KeyboardAvoidingView behaviour="position">
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '500',
                  color: colors.black,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Loginscreen')}>
                  <Icon
                    name="left"
                    size={31}
                    color="#000"
                    style={{
                      marginLeft: 1,
                      fontWeight: '900',
                    }}
                  />
                </TouchableOpacity>
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '500',
                  color: colors.black,
                  marginTop: 10,
                  marginLeft:10
                }}>
                Reset your password
              </Text>
              <View style={{marginLeft: 12, marginRight: 12}}>
                <PasswordInputText
                  value={Password}
                  onChangeText={Password => setPassword(Password)}
                  useNativeDriver={false}
                  baseColor="black"
                />
              </View>
              <View style={{marginLeft: 12, marginRight: 12}}>
                <PasswordInputText
                  value={Password}
                  onChangeText={Password => setPassword(Password)}
                  useNativeDriver={false}
                  baseColor="black"
                />
              </View>

              <View style={{marginTop: 0}}>
                <Mybutton screenName="Otpscreen" text="Reset" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
}
