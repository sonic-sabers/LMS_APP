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
import Search from 'react-native-search-box';
import {Header, ImageBackgrounds, Mycourses} from '../components';
import {colors} from '../constants';
import Data from '../constants/Data';

export default class Onlinecourse extends Component {
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
        //)})
        <>
          {item.status == this.props.filter && (
            <View key={item.id}>
              <TouchableOpacity
                // key={item.id}
                onPress={() =>
                  alert(' you pressed course by ' + item.Instructor)
                }>
                <View style={styles.item}>
                  <View style={{}}>
                    <Image
                      source={require('../assets/imgs/unsplash_1.png')}
                      resizeMode="cover"
                      style={{
                        height: 110,
                        width: 104,
                        borderRadius: 5,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      paddingLeft: 10,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '800',
                      }}>
                      {item.course}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '500',
                      }}>
                      {item.Instructor}
                    </Text>
                    <Text>{item.student} student</Text>
                  </View>
                  <View style={{justifyContent: 'flex-end', marginLeft: -11}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '900',
                      }}>
                      ₹{item.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </>
      );
    });

    return (
      <View style={{padding: 8, marginBottom: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>{items}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 2,
    padding: 10,
    marginVertical: 7,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
});
