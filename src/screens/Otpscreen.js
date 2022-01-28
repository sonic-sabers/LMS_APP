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
  OtpInput,
} from '../components';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

export default function Otpscreen() {
  const navigation = useNavigation();

  const ScreenName = 'Homescreen';
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [text, setText] = React.useState('');

  const [codeArr, setCodeArr] = React.useState([]);
  const [number, setNumber] = React.useState();
  const code = codeArr.join('');
  const [confirm, setConfirm] = React.useState(null); //if null means no otp message send

  handleCode = (e, index) => {
    const codeArray = [...code];
    codeArray[index] = e;
    setCodeArr(codeArray);
  };

  const UserInfo = {
    otp: '',
  };
  const validationSchema = Yup.object({
    otp: Yup.string()
      .trim()
      // .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Invalid OTP!')
      .max(4, 'Too Long!')
      .required('OTP is required!'),
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          <View
            style={{
              padding: 24,
            }}>
            <KeyboardAvoidingView behaviour="position">
              <Text style={styles.icon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="left" size={31} color="#000" />
                </TouchableOpacity>
              </Text>
              <Text style={styles.enterotp}>Enter OTP</Text>
              {/* <Formik
                initialValues={UserInfo}
                onSubmit={(values, formikActions) => {
                  setTimeout(() => {
                    console.log(values);
                    formikActions.resetForm();
                    formikActions.setSubmitting(false);
                    navigation.navigate('Bottomtab');
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
                  const {otp} = values;
                  return ( */}
                    <>
                      <OtpInput
                        onChangeText={(e, index) => handleCode(e, index)}
                        value={codeArr}
                        noOfInput={4}
                      />
                      {/* <OtpInput
                        noOfInput={4}
                        value={otp}
                        error={touched.otp && errors.otp}
                        onChangeText={handleChange('otp')}
                        // onBlur={handleBlur('otp')}
                      /> */}
                      <View style={styles.timer}>
                        <View>
                          <Text style={styles.texttimer}>00:30</Text>
                        </View>
                        <View>
                          <TouchableOpacity onPress={() => alert('OTP Send')}>
                            <Text style={styles.resendOtp}>Resend OTP</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{marginTop: 0}}>
                        <Mybutton
                          screenName="Bottomtab"
                          text="Submit"
                          onPress={() => navigation.navigate("Bottomtab")}
                          // onPress={handleSubmit}
                        />
                      </View>
                    </>
                  {/* );
                }}
              </Formik> */}
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  icon: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.black,
  },
  borderStyleHighLighted: {
    borderColor: '#000',
  },
  texttimer: {
    fontSize: 15,
    color: colors.black,
    fontWeight: '600',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timer: {
    //   alignSelf: 'center',
    marginBottom: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  resendOtp: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '700',
  },
  enterotp: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.black,
    marginTop: 10,
  },
});
