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
import React, {useState} from 'react';
import {
  ImageBackgrounds,
  Loginbutton,
  Mybutton,
  Socialbutton,
  Toinput,
  Mytextinput,
} from '../components';
import {colors} from '../constants';
import Toregister from '../components/Toregister';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
  
  //.matches(/^[0-9]+$/, "Must be only digits")
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .trim()
      .min(3, 'Invalid name!')
      .max(50, 'Too Long!')
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
    address: Yup.string()
      .trim()
      .min(3, 'Invalid address!')
      .max(50, 'Too Long!')
      .required('address is required!'),
    zip: Yup.string()
      .trim()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, 'Invalid zip!')
      .max(10, 'Too Long!')
      .required('zip is required!'),
    number: Yup.string()
      .required('required')
      .matches(/^[0-9]+$/, "Must be only digits")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'to short')
      .max(10, 'to long'),
  });

  const userInfo = {
    fullname: '',
    email: '',
    number: '',
    address: '',
    zip: '',
    password: '',
    confirmPassword: '',
  };

  const [error, setError] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
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
                marginLeft: 10,
              }}>
              Enter your details
            </Text>

            <Formik
              initialValues={userInfo}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  console.log(values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                  navigation.navigate('Entermail');
                }, 3000);
              }}
              validationSchema={validationSchema}
              // onSubmit={signUp}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => {
                {
                  /* console.log(values) */
                }
                const {
                  fullname,
                  email,
                  password,
                  confirmPassword,
                  zip,
                  address,
                  number,
                } = values;

                return (
                  <>
                    <Mytextinput
                      value={fullname}
                      error={touched.fullname && errors.fullname}
                      onChangeText={handleChange('fullname')}
                      onBlur={handleBlur('fullname')}
                      autoCapitalize="none"
                      label="Full Name"
                      placeholder="Enter Full Name"
                    />

                    <Mytextinput
                      value={email}
                      error={touched.email && errors.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      autoCapitalize="none"
                      label="Email"
                      placeholder="Enter email address"
                    />
                    <Mytextinput
                      value={number}
                      error={touched.number && errors.number}
                      onChangeText={handleChange('number')}
                      onBlur={handleBlur('number')}
                      autoCapitalize="none"
                      label="number"
                      placeholder="Enter Mobile number"
                      keyboardType="numeric"
                    />

                    <Mytextinput
                      value={address}
                      error={touched.address && errors.address}
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      autoCapitalize="none"
                      label="address"
                      placeholder="Enter your address "
                    />

                    <Mytextinput
                      value={zip}
                      error={touched.zip && errors.zip}
                      onChangeText={handleChange('zip')}
                      onBlur={handleBlur('zip')}
                      autoCapitalize="none"
                      label="zip"
                      placeholder="Enter Zip"
                      keyboardType="numeric"
                    />

                    <Mytextinput
                      value={password}
                      error={touched.password && errors.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      autoCapitalize="none"
                      label="Password"
                      placeholder="Enter Password"
                      secureTextEntry
                    />

                    <Mytextinput
                      value={confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      autoCapitalize="none"
                      label="confirmPassword"
                      placeholder="Confirm Password"
                      secureTextEntry
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
                      <Text style={{fontWeight: '500', width: '90%'}}>
                        By registering, I agree to LMS Terms of Service and
                        Privacy Policy.
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      {!checked ? (
                        <>
                          <Text
                            style={{
                              color: 'red',
                              fontSize: 16,
                              marginLeft: 11,
                              alignSelf: 'center',
                            }}>
                            Agree conditions first
                          </Text>
                          <Mybutton
                            screenName="Otpscreen"
                            text="Continue"
                            disabled={true}
                          />
                        </>
                      ) : (
                        <>
                          <Text
                            style={{
                              color: 'red',
                              fontSize: 16,
                              // marginBottom: -10,
                              marginLeft: 11,
                              alignSelf: 'center',
                            }}></Text>
                          <Mybutton
                            screenName="Otpscreen"
                            submitting={isSubmitting}
                            onPress={handleSubmit}
                            text="Continue"
                          />
                        </>
                      )}
                    </View>

                    <View
                      style={{
                        alignSelf: 'center',
                        marginBottom: 40,
                        flexDirection: 'row',
                        marginTop: 10,
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
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Loginscreen')}>
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
                  </>
                );
              }}
            </Formik>
            {/* )}
              </Formik> */}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 12,
  },
});
{
  /* <Formik
                initialValues={{email: ''}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}>
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => ( */
}
