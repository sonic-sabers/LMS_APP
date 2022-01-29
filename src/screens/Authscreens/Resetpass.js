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
} from '../../components';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function Resetpass({navigation}) {
  const ScreenName = 'Homescreen';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const [hidePass, setHidePass] = React.useState(true);
  const [hidecPass, setHidecPass] = React.useState(true);

  const validationSchema = Yup.object({
    password: Yup.string().trim().min(8, 'Password is too short!'),
    // .required('Password is required!'),
    confirmPassword: Yup.string().equals(
      [Yup.ref('password'), null],
      'Password does not match!',
    ),
  });

  const userInfo = {
    password: '',
    confirmPassword: '',
  };

  const [error, setError] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <ScrollView
          style={{backgroundColor: '#fff', flex: 1}}
          showsVerticalScrollIndicator={false}>
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
                  marginLeft: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Loginscreen')}>
                  <Icon
                    name="chevron-left"
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
                Reset your password
              </Text>
              <Formik
                initialValues={userInfo}
                onSubmit={(values, formikActions) => {
                  setTimeout(() => {
                    console.log(values);
                    formikActions.resetForm();
                    formikActions.setSubmitting(false);
                    navigation.navigate('Appnavigator');
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
                  const {password, confirmPassword} = values;

                  return (
                    <>
                      <Mytextinput
                        value={password}
                        error={touched.password && errors.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        autoCapitalize="none"
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={hidePass ? true : false}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-end',

                          marginRight: 16,
                        }}>
                        {!touched.password || errors.password ? (
                          //For error time
                          <>
                            <View
                              style={{
                                marginTop: -48,
                                marginBottom: 25,
                              }}>
                              <Icon
                                name={hidePass ? 'eye-slash' : 'eye'}
                                size={20}
                                color="grey"
                                onPress={() => setHidePass(!hidePass)}
                              />
                            </View>
                          </>
                        ) : (
                          //For non error time
                          <>
                            <View style={{marginTop: -39, marginBottom: 27}}>
                              <Icon
                                name={hidePass ? 'eye-slash' : 'eye'}
                                size={20}
                                color="grey"
                                onPress={() => setHidePass(!hidePass)}
                              />
                            </View>
                          </>
                        )}
                      </View>
                      <View>
                        <Mytextinput
                          value={confirmPassword}
                          error={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          autoCapitalize="none"
                          label="confirmPassword"
                          placeholder="Confirm Password"
                          secureTextEntry
                          secureTextEntry={hidecPass ? true : false}
                        />

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',

                            marginRight: 16,
                          }}>
                          {!touched.confirmPassword ||
                          errors.confirmPassword ? (
                            <>
                              <View
                                style={{
                                  marginTop: -49,
                                  marginBottom: 55,
                                }}>
                                <Icon
                                  name={hidecPass ? 'eye-slash' : 'eye'}
                                  size={20}
                                  color="grey"
                                  onPress={() => setHidecPass(!hidecPass)}
                                />
                              </View>
                            </>
                          ) : (
                            <>
                              <View style={{marginTop: -40, marginBottom: 55}}>
                                <Icon
                                  name={hidecPass ? 'eye-slash' : 'eye'}
                                  size={20}
                                  color="grey"
                                  onPress={() => setHidecPass(!hidecPass)}
                                />
                              </View>
                            </>
                          )}
                        </View>
                      </View>
                      <View style={{marginTop: 0}}>
                        <Mybutton
                          onPress={handleSubmit}
                          screenName="Otpscreen"
                          text="Reset"
                        />
                      </View>
                    </>
                  );
                }}
              </Formik>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
}
