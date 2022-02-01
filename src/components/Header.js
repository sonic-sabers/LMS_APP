import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

let Username = 'My name';

export default function Header({dropdown}) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
      }}>
      {/* 
      <View style={styles.headers}>
        <View style={styles.header2}>
          <Text style={styles.text1}>Hello, {Username}</Text>
          <Text style={styles.text2}>What do you want to learn today?</Text>
        </View>
        <View>
          <Text> DropDown</Text>
        </View>
      </View> */}
      <View style={styles.header1}>
        <Image
          source={require('../assets/imgs/MenuIcon1.png')}
          style={{
            height: 28,
            width: 28,
            paddingLeft: 10,
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
          flex: 1,
        }}>
        <View>
          <Text style={styles.text1}>Hello, {Username}</Text>
          <Text style={styles.text2}>What do you want to learn today?</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!dropdown ? (
            <View>
              <Text> DropDown || </Text>
            </View>
          ) : null}

          <Text> Filter</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headers: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header1: {
    height: 31,
    width: 31,
    backgroundColor: colors.white,
    // borderWidth: 0.4,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.4,
    position: 'relative',
    // borde
  },
  header2: {},
  text1: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -0,
    color: '#0B121F',
  },
  text2: {fontSize: 12, fontWeight: '300', marginLeft: -0, color: '#70747E'},
});
// font-family: Poppins;
// font-size: 20px;
// font-style: normal;
// font-weight: 500;
// line-height: 30px;
// letter-spacing: 0.01em;
// text-align: left;

{
  /* <Icon name="opera" color={colors.primary} size={20} /> */
}
