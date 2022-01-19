//npm i @react-native-community/masked-view  @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated@2.2.4 react-native-safe-area-context react-native-screens @react-navigation/native

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import MyCarousel from './src/components/MyCarousel';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Carouselscreen, Loginscreen} from './src/screens';
// import Loginscreen from "./src/screens/Loginscreen";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

//Dummy screens for navigations
function HomeScreen({navigation}) {
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

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Carouselscreen" component={Carouselscreen} />
          <Stack.Screen name="Loginscreen" component={Loginscreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
