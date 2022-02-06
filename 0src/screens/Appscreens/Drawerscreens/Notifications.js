import {StyleSheet, TouchableOpacity, Text,ScrollView, View} from 'react-native';
import React from 'react';
import {Myheader} from '../../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Offers = () => {
  return (
    <View
      style={{
        backgroundColor: '#F0F0F0',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
      }}>
      <Icon name="bell-alert" size={34} color="orange" />
      <Text style={{fontSize: 17, fontWeight: '600', marginLeft: 10}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      </Text>
    </View>
  );
};

export default function Notifications({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          // padding: 10,
          alignItems: 'center',
          // marginBottom: 5,
          backgroundColor: '#fff',
          padding: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: '#444',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={34} color="#292D32" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '500',
            color: '#292D32',
            alignSelf: 'center',
            marginLeft: 7,
          }}>
          Notifications
        </Text>
      </View>
      <ScrollView>
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
        <Offers />
      </ScrollView>
    </View>
  );
}
