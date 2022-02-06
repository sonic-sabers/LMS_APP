import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default Mytextinput = props => {
  const [hidePass, setHidePass] = React.useState(true);
  const {placeholder, label, error} = props;
  return (
    <>
      <TextInput
        placeholderTextColor="#70747E"
        {...props}
        placeholder={placeholder}
        style={styles.input}
      />

      {error ? (
        <Text
          style={{
            color: 'red',
            fontSize: 13.5,
            marginBottom: -10,
            marginLeft: 11,
          }}>
          {error}
        </Text>
      ) : (
        <Text
          style={{
            color: 'red',
            fontSize: 13.5,
            marginBottom: -10,
            marginLeft: 11,
          }}></Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    //     marginTop: 15,
    // backgroundColor: colors.primary,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1.5,
    borderColor: '#CFD1D4',
    // marginVertical: 9,
    marginTop:6,
    fontSize: 18,
    marginBottom:4,
  },
});

// export default FormInput;

// export default FormInput;
