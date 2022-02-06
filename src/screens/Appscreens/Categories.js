import React, { useState } from 'react';

import {
	StyleSheet,
	Button,
	Image,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	KeyboardAvoidingView,
	SafeAreaView,
	ImageBackground, FlatList,
} from 'react-native';
import {
	ImageBackgrounds,
	Loginbutton,
	Mybutton,
	Socialbutton,
	Toinput, Myheader,Mycategory
} from '../../components';
import { colors } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Categories({ navigation }) {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<Myheader Screenname='Homescreen' Headername='Categories' />
			<Mycategory />
			{/* <Button title="Button" onPress={()=>navigation.navigate('Catrgoryscreen')}/> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	item: {
		marginBottom: 4,
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'poppins',
		marginLeft: 10,
	}
});
