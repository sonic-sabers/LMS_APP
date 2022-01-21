import * as React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {windowWidth} from '../constants';

let windowWidthmain = windowWidth / 3;
import {LogBox} from 'react-native';
import {ImageBackgrounds} from '../components';
import { Homescreen,Mycourse } from '../screens';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
function Feed() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
      <ImageBackgrounds style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed!</Text>
        </View>
      </ImageBackgrounds>
    </>
  );
}

function Profile() {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile!</Text>
      </View>
    </>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={colors.primary}
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#CE4418',
          paddingBottom: 3,
        },
      }}
      barStyle={{backgroundColor: '#f9f9f9'}}
      screenOptions={{
        tabBarOptions: {
          style: {
            backgroundColor: '#f9f9f9',
          },
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Homescreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Mycourse"
        component={Mycourse}
        options={{
          tabBarLabel: 'My Course',
          tabBarIcon: ({color}) => (
            <Icon name="laptop" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <>
              {/* <View style={{backgroundColor: colors.black,height:40,width: 80,alignItems: 'center'}}> */}
              <Icon name="user-circle" color={color} size={24} />
              {/* </View> */}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Bottomtab() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
