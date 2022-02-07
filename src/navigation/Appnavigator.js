import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Carouselscreen,
  Entermail,
  Register,
  Otpscreen,
  Resetpass, Bottomtab, Notifications, Myprofile, Loginscreen, Homescreen,Categories,Offers,Offerdetails
} from '../screens';
const screenOptionStyle = {
  headerShown: false,
};

import Drawercontent from '../screens/Appscreens/Drawercontent';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function Feed({ navigation }) {

  function Mydrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => Mydrawer()}
      />
      {/* <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <Drawercontent {...props} />}
      screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Bottomtab" component={Bottomtab} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Homescreen" component={Homescreen} />
      {/* onPress={() => navigation.dispatch(DrawerActions.openDrawer())} */}
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Myprofile" component={Myprofile} />
      <Drawer.Screen name="LoginScreen" component={Loginscreen} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Resetpass" component={Resetpass} />
      <Drawer.Screen name="Loginscreen" component={Loginscreen} />
      <Drawer.Screen name="Otpscreen" component={Otpscreen} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Entermail" component={Entermail} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Offerdetails" component={Offerdetails} />
      {/* <Drawer.Screen name="Entermail" component={Entermail} /> */}
      {/* <Drawer.Screen name="Entermail" component={Entermail} /> */}
      {/* <Drawer.Screen name="Entermail" component={Entermail} /> */}
      {/* <Drawer.Screen name="Entermail" component={Entermail} /> */}

    </Drawer.Navigator>
  );
}

export default function Appnavigator() {
  return (
    <View style={{ flex: 1, marginBottom: -20 }}>
      <NavigationContainer independent={true}>
        <MyDrawer />
      </NavigationContainer>
    </View>
  );
}

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Appscreen from '../screens/Appscreens/Appscreen';

// export default function Appnavigator() {
//   return (
//     <>
//       <Appscreen />
//     </>
//   );
// }
