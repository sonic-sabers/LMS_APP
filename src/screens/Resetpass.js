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
				<Icon name="left" size={31} color="#000" />
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
				Reset your password
			  </Text>
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

			  <View style={{marginTop: 0}}>
				<Mybutton screenName="Homescreen" text="Reset" />
			  </View>
			</KeyboardAvoidingView>
		  </View>
		</ScrollView>
	  </ImageBackgrounds>
	</SafeAreaView>
  );
}
