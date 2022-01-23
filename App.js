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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: '#3B5998',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Bottomtab" component={Bottomtab} />
            <Stack.Screen name="Carouselscreen" component={Carouselscreen} />
            <Stack.Screen name="Entermail" component={Entermail} />
            <Stack.Screen name="Loginscreen" component={Loginscreen} />
            <Stack.Screen name="Otpscreen" component={Otpscreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Resetpass" component={Resetpass} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}








// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default App;