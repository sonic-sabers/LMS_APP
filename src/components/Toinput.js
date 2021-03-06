import {Text, View} from 'react-native';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {colors} from '../constants';
export default function Toinput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
        style={styles.inputContainer}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#000" 
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 45,
    borderColor: colors.primary,
    borderWidth: 1.5,
    marginVertical: 20,
    color: colors.primary,
    fontSize: 14,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
