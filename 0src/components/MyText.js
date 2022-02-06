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
  colourr: {
    color: colors.primary,
    marginVertical: 10,
    fontSize: 26,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    color: colors.black,
    marginTop: 70,
  },
});
export default MyText;
