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
    Image,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/Feather';
  import {useNavigation} from '@react-navigation/native';
  const Myimages = () => {
      return (
          <>
        <Image
          source={require('../../../assets/imgs/Banner.png')}
          // source={require('../assets/imgs/Banner.png')}
          style={{
            width: '100%',
            height: 150,
            paddingBottom: -40,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            // elevation: 2,
          }}
        />
      </>
    );
  };
  
  export default function offers() {
      const navigation = useNavigation();
      return (
          <View style={{flex: 1, backgroundColor: '#fff', padding: 15}}>
        {/* <Text>Hi srjhfbsv</Text> */}
        <View
          style={{
            flexDirection: 'row',
            //   padding: 10,
            alignItems: 'center',
            marginTop: -10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
  
            elevation: 7,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
            Offers
          </Text>
        </View>
        <ScrollView>
          <Image
            source={require('../../../assets/imgs/Banner.png')}
            // source={require('../assets/imgs/Banner.png')}
            style={{
              width: '100%',
              height: 150,
              paddingBottom: -40,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              // elevation: 2,
            }}
          />
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
  