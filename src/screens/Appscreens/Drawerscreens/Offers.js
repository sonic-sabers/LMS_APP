// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const offers = ({navigation}) => {
//   return (
//     <View>
//       <Text>fdbsdfb</Text>
//     </View>
//   );
// };

// export default function Offers() {
//   return (
//     <View>
//       <Text></Text>
//       <offers />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image, Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Myheader } from '../../../components';

const { width } = Dimensions.get('window');
const ratio = 170 / 408;
const Myimages = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Offersscreen')}>
    <Image
      source={require('../../../assets/imgs/Banner.png')}
      // source={require('../assets/imgs/Banner.png')}
      style={{
        width,
        height: width * ratio,
        paddingBottom: -40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        resizeMode: 'contain'
        // elevation: 2,
      }}
    />
  </TouchableOpacity>
  );
};

export default function offers({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <Myheader Screenname='Bottomtab' Headername='Offers' />
      <ScrollView style={{ paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Offersscreen')}>
          <Image
            source={require('../../../assets/imgs/Banner.png')}
            // source={require('../assets/imgs/Banner.png')}
            style={{
              width,
              height: width * ratio,
              paddingBottom: -40,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              resizeMode: 'contain'
              // elevation: 2,
            }}
          />
        </TouchableOpacity>
        <Myimages />
        <Myimages />
        <Myimages />
        <Myimages />
        <Myimages />
        <Myimages />
        <Myimages />
        <Myimages />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
