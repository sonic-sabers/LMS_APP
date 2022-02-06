import React, { useState } from 'react';

import {
    StyleSheet,
    Button,
    Image,
    Text,
    TouchableOpacity,
    View,
    // ScrollView,
    KeyboardAvoidingView,
    SafeAreaView,
    ImageBackground, FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import {
    ImageBackgrounds,
    Loginbutton,
    Mybutton, Onlinecourse,
    Socialbutton,
    Toinput, Myheader, Mycategory, Latestcourse, Mycourses
} from '../../components';
export default function Errorscreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ flex: 1 }}>
                <Myheader Screenname='Homescreen' Headername='' filter={false} />
                <View style={{ alignItems: 'center', MarginTop: 20, flex: 1 }}>
                    <Text style={{ fontSize: 36, fontWeight: '700', fontFamily: 'Poppins', color: "#1A21BC" }}>OOPS!</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', fontFamily: 'Poppins', color: "#000" }}>The page you are looking for is not found.</Text>
                    <Image
                        // source={require('../assets/imgs/Cat.png')}
                        source={require('../../assets/imgs/Cat.png')}
                        style={{
                            height: 270,
                            width: 270,
                            paddingLeft: 10,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            marginTop: 30,

                        }}
                    />
                    <Text style={{ fontSize: 12, fontWeight: '300', fontFamily: 'Poppins', color: "#000", textAlign: "center", marginVertical: 20, marginHorizontal: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, et mauris, malesuada cras. Non blandit mi ullamcorper egestas pretium ornare. Nec diam metus volutpat ipsum vitae massa donec. Risus sagittis at.</Text>
                    <View style={{ flex: 1, marginHorizontal: -20 }}>
                        <Mybutton text='Get the Course' />
                        <Loginbutton
                            text="Back To Home"
                            screenName="Homescreen"
                            colours={colors.primary}
                            bgcolor="#754bae"
                        />
                    </View>
                </View>
                {/* <Button title="Button" onPress={()=>navigation.navigate('Catrgoryscreen')}/> */}
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
