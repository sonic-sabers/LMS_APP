import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Carouselscreen,
  Entermail,
  Loginscreen,
  Register,
  Otpscreen,
  Resetpass,
} from '../screens';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colors} from 'react-native-elements';
import Appnavigator from './Appnavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {
  return (
    <View style={{flex: 1, height: '100%', width: '100%',marginBottom:-20}}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
              <Stack.Screen name="Carouselscreen" component={Carouselscreen} />
              <Stack.Screen name="Appnavigator" component={Appnavigator} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Resetpass" component={Resetpass} />
              <Stack.Screen name="Loginscreen" component={Loginscreen} />
              <Stack.Screen name="Otpscreen" component={Otpscreen} />
              <Stack.Screen name="Entermail" component={Entermail} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </View>
  );
}
