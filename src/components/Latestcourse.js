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
import Data from '../constants/Data';
export default class LatestLatestcourse extends Component {
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
          style={{
            flex: 1,
            marginRight: 5,
            width: 160,
            backgroundColor: '#F8F8F8',
            padding: 10,
            borderRadius: 10,
            elevation: 2,
            shadowOffset: {width: 0, height: 3},
            shadowColor: '#000',
            shadowOpacity: 0.5,
            position: 'relative',
          }}
          onPress={() => alert('Its an alert')}>
          <Image
            source={require('../assets/imgs/unsplash_1.png')}
            resizeMode="cover"
            style={{
              // flex: 1,
              height: 110,
              width: 160,
              // marginHorizontal: 9.5,
              borderRadius: 5,
              marginTop: -10,
              marginLeft: -10,
              // justifyContent: 'center',
              // alignItems: 'center',
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
              marginTop: -100,
              marginBottom: 100,
              marginLeft: -10,
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
          <View style={styles.item}>
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
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'left',
                marginLeft: 2,
              }}>
              INR
              <Text
                style={{
                  fontWeight: '900',
                  color: '#000',
                }}>
                {item.Price}
              </Text>
            </Text>
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
            color: '#111',
            marginVertical: 10,
          }}>
          Latest course
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: 10,
            marginLeft: -10,
          }}>
          {items}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('Its an alert')}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontWeight: '900',
                color: '#1A21BC',
                fontSize: 18,
                marginLeft: 10,
              }}>
              see more
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
{
  /* </TouchableOpacity> */
}
{
  /* </Image> */
}

const styles = StyleSheet.create({
  item: {
    // flexDirection: 'row',
    // marginHorizontal: 9.5,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 30,
    // margin: 2,
    // marginHorizontal:50,
  },
});

{
  /*           */
}
