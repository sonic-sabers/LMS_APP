//npm i @react-native-community/masked-view  @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated@2.2.4 react-native-safe-area-context react-native-screens @react-navigation/native

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Loginscreen} from '../screens';
import { Homescreen ,Categories,Catrgoryscreen,Mycourse} from '..';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function Homestack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Catrgoryscreen" component={Catrgoryscreen} />
        <Stack.Screen name="Mycourse" component={Mycourse} />
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
