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
import {Header, ImageBackgrounds, Mycourses} from '../../components';
import {colors} from '../../constants';
import Data from '../../constants/Data';

class Mycourse extends Component {
  render() {
    return (
      <>
        <View style={{padding: 8}}>
          <Header />

          <View style={{magrinVertical: 20, marginTop: 10}}>
            <Search />
          </View>
        </View>
        <View style={styles.enroll}>
          <Text
            style={{
              alignSelf: 'center',
            }}>
            To add Enroll
          </Text>
        </View>
        <Mycourses />
      </>
    );
  }
}
export default Mycourse;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 2,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  enroll: {
    justifyContent: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#1A21BC',
    width: '100%',
    alignItems: 'center',
    paddingRight: -20,
  },
});
