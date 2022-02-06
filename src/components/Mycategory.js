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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from '../constants/Data';
import { useNavigation } from '@react-navigation/native';
export default function Mycategory() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={Data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20, alignItems: 'center' }}
                        onPress={() => navigation.navigate('Catrgoryscreen', {
                            itemCategory: item.category,
                            otherParam: 'anything you want here',
                            itemId:'svs saascds csd  dvsd'
                        })}
                    >
                        <Icon name={item.icon} size={25} color="#000" />
                        <Text style={styles.item}>{item.category}</Text>
                    </TouchableOpacity>
                )
                }
            />
        </View >
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

