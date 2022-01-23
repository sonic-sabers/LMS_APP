import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';
// import state from '../assets/Data';
import Data from '../constants/Data';
export default class Prevcourse extends Component {
  constructor(props) {
    super(props);
    this.initData = Data;
    this.state = {
      data: this.initData,
    };
  }
  render() {
    const items = this.state.data.map(item => {
      return (
        <TouchableOpacity
          key={item.id}
          style={{flex: 1, marginRight: 5, width: 160}}
          onPress={() => alert('Its an alert')}>
          <Image
            source={require('../assets/imgs/unsplash_Prev.png')}
            resizeMode="cover"
            style={{
              height: 130,
              width: 160,
              borderRadius: 5,
            }}
          />
          <ImageBackground
            source={require('../assets/imgs/Rectangle.png')}
            resizeMode="cover"
            style={{
              height: 21,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -120,
              marginBottom: 100,
            }}>
            <Text
              style={{
                fontSize: 10,
                color: colors.white,
                alignSelf: 'center',
              }}>
              HOT
            </Text>
          </ImageBackground>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
                textAlign: 'left',
              }}>
              {item.Latestcourse}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                textAlign: 'left',
              }}>
              {item.Trainer}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  textAlign: 'left',
                  marginLeft: 2,
                }}>
                {item.rating} - stars
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '400',
                  textAlign: 'left',
                }}>
                {item.reviews}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'left',
            // marginLeft: 10,
            color: '#222',
            marginVertical: 10,
          }}>
          Continue you Previous classes
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: 10,marginLeft:-10

          }}>
          {items}
        </ScrollView>
      </View>
    );
  }
}
