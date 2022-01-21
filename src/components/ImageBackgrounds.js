import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {MyText} from '.';

const ImageBackgrounds = (props) => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/imgs/Background.png')}
      resizeMode="cover"
      style={styles.image}>
      <View>{props.children}</View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    // fontWeight: "bold",
    // textAlign: "center",
    // backgroundColor: "#000000c0"
  },
});

export default ImageBackgrounds;
