import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImageBackgrounds} from '../../components';
export default function Drawercontent(props) {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Hi hellocd</Text> */}

      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg',
                }}
                size={90}
              />
              <Title style={styles.title}>Welcome, User Name</Title>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cart-outline" color={color} size={size} />
              )}
              label="My Cart"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
            
              icon={({color, size}) => (
                <Icon  name="cart-arrow-down" color={color} size={size} />
              )}
              label="My Enrollments"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="My Quizes"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="text-box-plus-outline" color={color} size={size} />
              )}
              label="Certificates"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Offer"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bell-alert" color={color} size={size} />
              )}
              label="Notifications"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="heart-outline" color={color} size={size} />
              )}
              label="Favourite"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="battlenet" color={color} size={size} />
              )}
              label="FAQ"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="share-variant" color={color} size={size} />
              )}
              label="Share"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
