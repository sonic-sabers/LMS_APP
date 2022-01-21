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
export default class Latestcourse extends Component {
  state = {
    names: [
      {
        name: 'Development',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 11,
      },
      {
        name: 'Teaching',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 12,
      },
      {
        name: 'Computer',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 13,
      },
      {
        name: 'Teaching1',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 14,
      },
      {
        name: 'Computer1',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 15,
      },
      {
        name: 'Development1',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 16,
      },
      {
        name: 'Teaching2',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 17,
      },
      {
        name: 'Computer3',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 18,
      },
      {
        name: 'Development2',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 19,
      },
      {
        name: 'Computer2',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 110,
      },
      {
        name: 'Teaching3',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 111,
      },
      {
        name: 'Development3',
        course: 'Core Java for \n bignner',
        Trainer: 'Trainer name',
        rating: '4',
        reviews: ' (432)',
        Price: ' 1999 ',
        id: 112,
      },
    ],
  };
  render() {
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
          Latest Course
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.names.map((item, index) => (
            <TouchableOpacity style={{flex: 1, marginRight: 5}}  onPress={() => alert('Its an alert')}>
              <Image
                source={require('../assets/imgs/unsplash_1.png')}
                resizeMode="cover"
                style={{
                  // flex: 1,
                  height: 130,
                  width: 160,
                  // marginHorizontal: 9.5,
                  borderRadius: 5,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}
              />

              <View key={item.id} style={styles.item}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    textAlign: 'left',
                  }}>
                  {item.course}
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
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('Its an alert')}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
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
// export default Latestcourses;

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
