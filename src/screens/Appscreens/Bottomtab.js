import * as React from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { windowWidth } from '../../constants';
let windowWidthmain = windowWidth / 3;
import { ImageBackgrounds, Mycourses } from '../../components';
import { Homescreen, Mycourse, Course ,Homestack,Errorscreen,Myprofile} from '..';
import { LogBox } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

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
      <ImageBackgrounds style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContentT: 'center', alignItems: 'center' }}>
          <Text>Feed!</Text>
        </View>
      </ImageBackgrounds>
    </>
  );
}

function Profile() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Button
          title="Open drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs({props}) {
  // function MyD() ={ props.Mydrawer };
  const MyD = () => {
    props.data
  }

  return (
    <Tab.Navigator
      initialRouteName="Homescreen"
      activeColor={colors.primary}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        style: {},
      }}
      barStyle={{
        backgroundColor: '#f9f9f9',
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        elevation: 3,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: '#000',
        shadowOpacity: 0.4,
        position: 'relative',
      }}>
      <Tab.Screen
        name="Homescreen"
        component={Homestack}
        // Mydrawer
        data ={MyD}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Homescreen1"
        component={Homescreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="search" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Mycourses"
        component={Mycourse}
        options={{
          tabBarLabel: 'My Course',
          tabBarIcon: ({ color }) => (
            <Icon name="laptop" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Myprofile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <>
              <Icon name="user-circle" color={color} size={24} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Bottomtab() {
  const Mydrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <NavigationContainer independent={true}>
      <MyTabs data={Mydrawer} />
    </NavigationContainer>
  );
}
