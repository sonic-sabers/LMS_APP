import React, { Component } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity, FlatList,
} from 'react-native';
import { colors } from '../constants';
import Data from '../constants/Data';
import { useNavigation } from '@react-navigation/native';
import { __ } from '@utility/translation';
import { withNavigation } from 'react-navigation';


export default function PopularCategory() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.top}>Popular category in our platform</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={Data}
        horizontal
        renderItem={({ item }) => (
          <View key={item.id} style={{ marginTop: 10 }}>
            <ImageBackground
              key={item.id}
              source={require('../assets/imgs/imgIMG.png')}
              resizeMode="cover"
              imageStyle={{ borderRadius: 6 }}
              style={styles.image}>
              <TouchableOpacity
                // onPress={() => alert('You choose ' + item.category)}
                onPress={() => navigation.navigate('Catrgoryscreen', {
                  itemCategory: item.category,
                  otherParam: 'anything you want here',
                  itemId: 'svs saascds csd  dvsd',
                  Lastscreen:'PopularCategory',

                })}
              >
                <View style={styles.item}>
                  <Text style={styles.itemname1}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )
        }
      />
      <TouchableOpacity style={{
        marginRight: 10
      }} onPress={() => navigation.navigate('Categories')}>
        <View style={styles.opacity}>
          <Text style={styles.seemore}> {__('see more')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 30,
    // margin: 2,

    // marginHorizontal:50,
  },
  opacity: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,

  },
  image: {
    flex: 1,
    height: 65,
    width: 160,
    marginRight: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemname1: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    // marginTop: 70,
    color: colors.white,
  },
  top: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -0,
    color: '#111',
    marginBottom: 10,
    marginTop: -20,
  },
  seemore: {
    fontWeight: '900',
    color: '#1A21BC',
    fontSize: 18,
    marginLeft: 10,

  },
});
