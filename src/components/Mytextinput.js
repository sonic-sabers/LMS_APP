// import React from 'react';
// import { View, StyleSheet, Text, TextInput } from 'react-native';

// export default Mytextinput = (props) => {
//   const { placeholder, label, error } = props;
//   return (
//     <>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginBottom: 5,
//         }}
//       >
//         <Text style={{ fontWeight: 'bold' }}>{label}</Text>
//         {error ? (
//           <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
//         ) : null}
//       </View>
//       <TextInput {...props} placeholder={placeholder} style={styles.input} />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: '#1b1b33',
//     height: 35,
//     borderRadius: 8,
//     fontSize: 16,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
// });

import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
// import {TextInput} from 'react-native-paper';
export default Mytextinput = props => {
  const {placeholder, label, error} = props;
  return (
    <>
      {/* <Text style={{ fontWeight: 'bold' }}>{label}</Text> */}

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
      ) : null}
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
    borderColor: "#CFD1D4",
    marginVertical:5,
    fontSize:   18,
  },
});

// export default FormInput;

// export default FormInput;
