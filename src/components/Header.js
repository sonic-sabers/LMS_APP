import {StyleSheet, Text,Image, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

let Username = "My name"

export default function Header() {
  return (
    <View style={{backgroundColor:"#fff",marginTop:-20,padding:10}}>
      <View style={styles.headers}>
        <View style={styles.header1}>
          <Image source = {require('../assets/imgs/MenuIcon1.png')}  style={{height:23,width:23}}/>
        </View>
        <View style={styles.header2}>
          <Text style={styles.text1}>Hello, {Username}</Text>
          <Text style={styles.text2}>What do you want to learn today?</Text>
        </View>
        <View>
          <Text> DropDown</Text>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  headers: {flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'},
  header1: {
    height: 31,
    width: 31,
    backgroundColor: colors.white,
    // borderWidth: 0.4,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:3,
    shadowOffset:{width: 0, height:2},
    shadowColor:"#000",
    shadowOpacity: 0.4,
    position: 'relative',
    // borde
    
  },
  header2: {},
  text1: {fontSize: 20, fontWeight: '500',textAlign: 'left',  marginLeft: -0,color:'#111'},
  text2: {fontSize: 14, fontWeight: '300',  marginLeft: -0,color:'#111'},
});
// font-family: Poppins;
// font-size: 20px;
// font-style: normal;
// font-weight: 500;
// line-height: 30px;
// letter-spacing: 0.01em;
// text-align: left;

          {/* <Icon name="opera" color={colors.primary} size={20} /> */}