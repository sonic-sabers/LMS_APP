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
  Mytextinput,
} from '../components';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
export default function Entermail({navigation}) {
  const ScreenName = 'Bottomtab';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const UserInfo = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email!').required('Email is required!'),

  });

  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
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
                  marginBottom: 20,
                }}>
                Enter your email
              </Text>

              <Formik
                initialValues={UserInfo}
                onSubmit={(values, formikActions) => {
                  setTimeout(() => {
                    console.log(values);
                    formikActions.resetForm();
                    formikActions.setSubmitting(false);
                    navigation.navigate('Otpscreen');
                  }, 3000);
                }}
                validationSchema={validationSchema}>
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
                  }
                  const {email} = values;
                  return (
                    <>
                      <Mytextinput
                        value={email}
                        error={touched.email && errors.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        autoCapitalize="none"
                        label="Email"
                        placeholder="Enter email address"
                      />

                      <View
                        style={{
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
                        <Mybutton
                          submitting={isSubmitting}
                          onPress={handleSubmit}
                          text="Send OTP"
                        />
                      </View>
                    </>
                  );
                }}
              </Formik>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
