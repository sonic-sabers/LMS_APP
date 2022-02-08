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
import { colors } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function Catrgoryscreen({ route, navigation }) {
    const { itemId, otherParam,itemCategory,Lastscreen } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
            <Myheader style={{ marginRight: 100 }} Screenname={Lastscreen} Lastscreen
            Headername={itemCategory}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Latestcourse seemore={false} />
                    <Text
                        style={{
                            marginTop: 5,
                            fontWeight: '600',
                            // color: '#1A21BC',
                            fontSize: 18,
                            marginLeft: 10,
                            fontFamily: 'Poppins-Regular',
                            fontStyle: 'normal'
                        }}>More</Text>
                    <Onlinecourse  all  />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
