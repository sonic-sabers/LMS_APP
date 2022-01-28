import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  // TextInput,
  KeyboardAvoidingView,
  SafeAreaView,ScrollView
} from 'react-native';
import React from 'react';
import {
  ImageBackgrounds,
  Mybutton,
  Socialbutton,
  ForgetP,
  MyText,
} from '../components';
import {colors} from '../constants';
import Toregister from '../components/Toregister';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PasswordInputText from 'react-native-hide-show-password-input';
import {LogBox} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
export default function Loginscreen({navigation}) {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [hasEmailErrors, setEmailErrors] = React.useState(false);

  const UserInfo = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            padding: 24,
          }}>
          <KeyboardAvoidingView behaviour="position">
            <MyText> Welcome back! {'\n'} Sign in to continue!</MyText>
            <Formik
              initialValues={UserInfo}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  console.log(values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                  navigation.navigate('Bottomtab')
                }, 3000);
              }}
              validationSchema={validationSchema}
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
                }
                const {email, password} = values;
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
            

                    <ForgetP ScreenName="Resetpass" />
                    <View style={{marginTop: 30}}>
                      <Mybutton
                        submitting={isSubmitting}
                        onPress={handleSubmit}
                        text="Login"
                      />
                    </View>
                  </>
                );
              }}
            </Formik>
            <Text style={styles.or}>or</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Bottomtab')}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Bottomtab')}>
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
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  email: {
    marginTop: 15,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
    placeholderTextColor: '#111',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  Space: {
    marginTop: 15,
  },
  or: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '400',
  },
});
