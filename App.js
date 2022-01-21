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
  Homescreen,
  Loginscreen,
} from './src/screens';
// import Loginscreen from "./src/screens/Loginscreen";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

//Dummy screens for navigations
// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1}}>
//       <MyCarousel />
//       <Button
//         title="Go to ProfileScreen"
//         onPress={() => navigation.navigate('ProfileScreen')}
//       />
//     </View>
//   );
// }

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
          <Stack.Screen name="Bottomtab" component={Bottomtab} />
          <Stack.Screen name="Carouselscreen" component={Carouselscreen} />
          <Stack.Screen name="Homescreen" component={Homescreen} />
          <Stack.Screen name="Loginscreen" component={Loginscreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// import React,{useState} from 'react';
// import './i18n/i18n';
// import {View, Text,Pressable} from 'react-native';
// import {useTranslation} from 'react-i18next';
  
// const App = () => {
    
//   const {t, i18n} = useTranslation();
  
//   const [currentLanguage,setLanguage] =useState('en');
  
//   const changeLanguage = value => {
//     i18n
//       .changeLanguage(value)
//       .then(() => setLanguage(value))
//       .catch(err => console.log(err));
//   };
  
//   return (
//    <View
//         style={{
//           flex: 1,
//           backgroundColor: 'white',
//           alignItems: 'center',
//           justifyContent: 'space-evenly',
//         }}>
//         <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
//           {t('hello')}
//         </Text>
//         <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
//           {t('this line is translated')}
//         </Text>
//         <Pressable
//           onPress={() => changeLanguage('en')}
//           style={{
//             backgroundColor:
//               currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
//             padding: 20,
//           }}>
//           <Text>Select English</Text>
//         </Pressable>
//         <Pressable
//           onPress={() => changeLanguage('hi')}
//           style={{
//             backgroundColor:
//               currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
//             padding: 20,
//           }}>
//           <Text>हिंदी का चयन करें</Text>
//         </Pressable>
//       </View>
//   );
// };
  
// export default App;