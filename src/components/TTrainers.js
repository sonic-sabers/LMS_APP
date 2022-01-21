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
export default class TTrainers extends Component {
  state = {
    names: [
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 11,
      },
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 12,
      },
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 13,
      },
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 14,
      },
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 15,
      },
      {
        Trainer: 'Trainer name',
        name: 'Programmer',
        course: 'Core Java for \n bignner',
        rating: '4',
        reviews: ' (4051)',

        id: 16,
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
            // marginTop: 10,
            marginVertical:10
          }}>
          Top trainers
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.names.map((item, index) => (
            <TouchableOpacity
              style={{flex: 1, marginRight: 5}}
              onPress={() => alert('Its an alert')}>
              <Image
                source={require('../assets/imgs/unsplash2.png')}
                resizeMode="cover"
                style={{
                  height: 130,
                  width: 160,
                  borderRadius: 5,
                }}
              />
              <View key={item.id} style={styles.item}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}>
                  {item.Trainer}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}>
                  {item.name}
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
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('Its an alert')}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop:10
              
            }}>
            <Text
              style={{
                marginTop: 5,
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

const styles = StyleSheet.create({
  item: {},
});
