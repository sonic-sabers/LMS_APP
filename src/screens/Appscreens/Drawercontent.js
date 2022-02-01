import React from 'react';
import {View, StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
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

import {Notifications, Mycourse, Course} from '..';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImageBackgrounds} from '../../components';
import {colors} from '../../constants';
export default function Drawercontent(props) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/imgs/Background.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              <TouchableOpacity style={styles.userInfoSection} 
                 onPress={() => {
                  props.navigation.navigate('Favourite');
                }}>
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
              </TouchableOpacity>

              <DrawerItem
                style={{marginBottom: -5}}
                icon={({color, size}) => (
                  <Icon name="cart-outline" color={color} size={size} />
                )}
                label="My Cart"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                style={{marginBottom: -5}}
                icon={({color, size}) => (
                  <Icon name="cart-arrow-down" color={color} size={size} />
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
                style={{marginBottom: -5}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="text-box-plus-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Certificates"
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
                style={{marginBottom: -5}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Offer"
                onPress={() => {
                  props.navigation.navigate('Notifications');
                }}
                style={{marginBottom: -5}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="bell-alert" color={color} size={size} />
                )}
                label="Notifications"
                onPress={() => {
                  props.navigation.navigate('Notifications');
                }}
                style={{marginBottom: -5}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="heart-outline" color={color} size={size} />
                )}
                label="Favourite"
                onPress={() => {
                  props.navigation.navigate('BookmarkScreen');
                }}
                style={{marginBottom: -5}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="battlenet" color={color} size={size} />
                )}
                label="FAQ"
                onPress={() => {
                  props.navigation.navigate('SettingsScreen');
                }}
                style={{marginBottom: -5}}
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
              <Icon name="exit-to-app" color={colors.primary} size={size} />
            )}
            // label="Sign Out"
            label={() => (
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: -10,
                }}>
                Logout
              </Text>
            )}
            style={{labelColor: colors.primary}}
            onPress={() => {
              signOut();
            }}
          />
        </Drawer.Section>
      </ImageBackground>
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
    marginBottom: 9,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
