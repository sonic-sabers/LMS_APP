import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Myheader } from '../../../components';
var width = Dimensions.get('window').width - 5;
const ratio = 170 / 408;

const reviews = [{
        title: 'Zelda, Breath of Fresh Air',
        rating: 5,
        body: 'lorem ipsum',
        key: '1',
    },
    {
        title: 'Gotta Catch Them All (again)',
        rating: 4,
        body: 'lorem ipsum',
        key: '2',
    },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
];

export default function Offerdetails({ navigation }) {
    return ( <
        SafeAreaView style = {
            { flex: 1, backgroundColor: '#fff' } } >
        <
        Myheader Headername = "Offer Details"
        Screenname = "Offers" / >
        <
        View style = {
            { padding: 10 } } >
        <
        Image source = { require('../../../assets/imgs/Banner.png') }
        style = {
            {
                width: width,
                height: width * ratio,
                resizeMode: 'contain',
                marginTop: -15,
                marginLeft: -10,
                // borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            }
        }
        />{' '} <
        Text style = {
            {
                fontWeight: '400',
                fontSize: 12,
                fontFamily: 'poppins',
                color: '#000',
                marginTop: 10,
                lineHeight: 25,
            }
        } > { ' ' }
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent vitae pharetra at mauris vestibulum.Orci, senectus habitant quam sed turpis felis scelerisque dictum.Ullamcorper diam viverra tristique imperdiet lectus elit fusce dictumst.At interdum magna condimentum felis sit.Cursus interdum aenean sed leo.Etiam ornare ac aliquet morbi diam varius elit lorem a.Condimentum nibh arcu egestas diam. { ' ' } <
        /Text>{' '} <
        Text style = {
            {
                fontWeight: '700',
                fontSize: 20,
                fontFamily: 'poppins',
                color: '#0B121F',
            }
        } > { ' ' }
        Heading { ' ' } <
        /Text>{' '} <
        Text style = {
            {
                fontWeight: '700',
                fontSize: 16,
                fontFamily: 'poppins',
                color: '#000',
                marginTop: 10,
                lineHeight: 24,
            }
        } > { ' ' }
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent vitae pharetra at mauris vestibulum.Orci, senectus habitant quam sed turpis felis scelerisque dictum.Ullamcorper diam viverra tristique imperdiet lectus elit fusce dictumst.At interdum magna condimentum felis sit.Cursus interdum aenean sed leo.Etiam ornare ac aliquet morbi diam varius elit lorem a.Condimentum nibh arcu egestas diam. { ' ' } <
        /Text>{' '} <
        Text style = {
            {
                fontWeight: '700',
                fontSize: 20,
                fontFamily: 'poppins',
                color: '#0B121F',
            }
        } > { ' ' }
        Heading { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /SafeAreaView>
    );
}

const styles = StyleSheet.create({});