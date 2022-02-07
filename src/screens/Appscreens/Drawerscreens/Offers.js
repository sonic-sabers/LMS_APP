import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Myheader } from '../../../components';
var width = Dimensions.get('window').width - 5;
const ratio = 170 / 408;

const Myimages = () => {
    const navigation = useNavigation();
    return ( <
        TouchableOpacity onPress = {
            () => navigation.navigate('Offerdetails') } >
        <
        Image source = { require('../../../assets/imgs/Banner.png') }
        style = {
            {
                width: width,
                height: width * ratio,
                resizeMode: 'contain',
                paddingBottom: -40,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                marginRight: 10,
            }
        }
        /> <
        /TouchableOpacity>
    );
};

export default function Offers({ navigation }) {
    return ( <
        View style = {
            { flex: 1, backgroundColor: '#fff' } } >
        <
        Myheader Headername = "Offers"
        Screenname = "Bottomtab" / >
        <
        ScrollView style = {
            { padding: 5, marginBottom: 5 } } >
        <
        Myimages / >
        <
        Myimages / >
        <
        Myimages / >
        <
        Myimages / >
        <
        Myimages / >
        <
        Myimages / >
        <
        Myimages / >
        <
        /ScrollView> <
        /View>
    );
}

const styles = StyleSheet.create({});