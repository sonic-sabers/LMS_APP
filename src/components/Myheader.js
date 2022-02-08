import { StyleSheet, TouchableOpacity, Image, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Myheader({ Screenname, Headername, props, filter, Lastscreen }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          // borderBottomWidth: 0.8,
          borderColor: "#777"
        }} {...props}>
        <TouchableOpacity style={{
          marginLeft: 7,
        }} onPress={() => { Lastscreen ? navigation.goBack() : navigation.navigate(Screenname) }}

        >
          <Icon name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            marginVertical: 10,
            fontWeight: '500',
            color: colors.black,
            alignSelf: 'center',
            marginLeft: 7,
          }}>
          {Headername}
        </Text>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            flex: 1,
            marginRight: 10,
          }}>
          {filter &&
            <TouchableOpacity onPress={() => alert('csd')} style={styles.header1}>
              <Image
                source={require('../assets/imgs/Filter.png')}
                style={{
                  height: 28,
                  width: 28,
                  paddingLeft: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  // shadowRadius: 6.27,
                  // elevation: 10,
                }}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
