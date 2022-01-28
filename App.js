//npm i @react-native-community/masked-view  @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated@2.2.4 react-native-safe-area-context react-native-screens @react-navigation/native

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import MyCarousel from './src/components/MyCarousel';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Bottomtab,
  Carouselscreen,
  Entermail,
  Homescreen,
  Loginscreen,
  Register,
  Otpscreen,
  Resetpass,
} from './src/screens';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colors} from 'react-native-elements';
// import Loginscreen from "./src/screens/Loginscreen";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

//Dummy screens for navigations
function HomeScreens({navigation}) {
  return (
    <View style={{flex: 1}}>
      <MyCarousel />
      <Button
        title="Go to ProfileScreen"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: '#111',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Carouselscreen" component={Carouselscreen} />
            <Stack.Screen name="Otpscreen" component={Otpscreen} />
            <Stack.Screen name="Entermail" component={Entermail} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Loginscreen" component={Loginscreen} />
            <Stack.Screen name="Bottomtab" component={Bottomtab} />
            <Stack.Screen name="Resetpass" component={Resetpass} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="HomeScreens" component={HomeScreens} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}





