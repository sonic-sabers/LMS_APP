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
    ForgetP,
    Mytextinput,
  } from '../components';
  import {colors} from '../constants';
  import Toregister from '../components/Toregister';
  import {Input} from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import PasswordInputText from 'react-native-hide-show-password-input';
  import {LogBox} from 'react-native';
  import {TextInput} from 'react-native-paper';
  import {useNavigation} from '@react-navigation/native';
  
  import {Formik} from 'formik';
  import * as Yup from 'yup';
  
  // import client from '../api/client';
  
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .trim()
      .min(3, 'Invalid name!')
      .required('Name is required!'),
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
    confirmPassword: Yup.string().equals(
      [Yup.ref('password'), null],
      'Password does not match!',
    ),
  });
  
  // export default function Loginscreen({navigation}) {
  export default function Tochecklogin() {
    const navigation = useNavigation();
  
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
              padding: 24,
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
  
              <Formik
                initialValues={userInfo}
                validationSchema={validationSchema}
                onSubmit={signUp}>
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => {
                  const {fullname, email, password, confirmPassword} = values;
                  return (
                    <>
                      <Mytextinput />
  
                      <TextInput
                        label="Enter email address"
                        style={{
                          marginTop: 15,
                          backgroundColor: colors.primary,
                          marginHorizontal: 10,
                          placeholderTextColor: '#111',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                        onChangeText={text => setText(text)}
                        defaultValue={text}
                      />
                      <View style={{marginLeft: 12, marginRight: 12}}>
                        <PasswordInputText
                          value={Password}
                          onChangeText={Password => setPassword(Password)}
                          useNativeDriver={false}
                          baseColor="black"
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
  
                      <ForgetP ScreenName="Resetpass" />
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
                      <TouchableOpacity
                        onPress={() => navigation.navigate(Homescreen)}>
                        <View style={styles.buttons}>
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
                      <TouchableOpacity
                        onPress={() => navigation.navigate(Homescreen)}>
                        <View style={styles.buttons}>
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
                    </>
                  );
                }}
              </Formik>
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
  