import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

function MyText(props) {
  return (
    <>
      <Text {...props} style={{...styles.colourr, ...props.style}}>
        {props.children}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  colourr: {color: colors.primary},
});
export default MyText;
