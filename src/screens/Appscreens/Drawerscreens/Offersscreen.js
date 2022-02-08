import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image, Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Mybutton, Myheader } from '../../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const ratio = 170 / 400;

export default function Offersscreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <Myheader Screenname='Offers' Headername='Offer Details' />
      <ScrollView style={{ paddingBottom: 10 }}>
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
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", lineHeight: 30, fontFamily: 'Poppins-Regular' }}>Heading</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", lineHeight: 23, fontFamily: 'Poppins-Regular', color: '#000', marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae pharetra at mauris vestibulum. Orci, senectus habitant quam sed turpis felis scelerisque dictum. Ullamcorper diam viverra tristique imperdiet lectus elit fusce dictumst. At interdum magna condimentum felis sit. Cursus interdum aenean sed leo. Etiam ornare ac aliquet morbi diam varius elit lorem a. Condimentum nibh arcu egestas diam.</Text>
          <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 24, fontFamily: 'Poppins-Regular', marginTop: 10 }}>Terms {'&'} Conditions</Text>
          <View style={{ paddingLeft: 5,marginBottom:20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="check" size={20} color="#292D32" style={{ marginTop: 5, marginRight: 3 }} />
              <Text style={{ fontSize: 14, fontWeight: "400", lineHeight: 23, fontFamily: 'Poppins-Regular', color: '#292D32', marginTop: 5, }}>Ipsum leo euismod aliquet iaculis at.</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Icon name="check" size={20} color="#292D32" style={{ marginTop: 5, marginRight: 3 }} />
              <Text style={{ fontSize: 14, fontWeight: "400", lineHeight: 23, fontFamily: 'Poppins-Regular', color: '#292D32', marginTop: 5, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget a volutpat nibh ante euismod. Tincidunt.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="check" size={20} color="#292D32" style={{ marginTop: 5, marginRight: 3 }} />

              <Text style={{ fontSize: 14, fontWeight: "400", lineHeight: 23, fontFamily: 'Poppins-Regular', color: '#292D32', marginTop: 5, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum vitae at leo amet.</Text>
            </View>

          </View>
          <Mybutton text="Grab Now" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
