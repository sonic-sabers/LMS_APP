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
import Icon from 'react-native-vector-icons/FontAwesome5';

class Mycourse extends Component {
  render() {
    return (
      <>
        <View style={{}}>
          <Header dropdown />
        </View>
        <View style={styles.enroll}>
          <View style={{margin: 10}}>
            <Icon name="list-alt" size={28} color={colors.white} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginRight: 10,
            }}>
            <View>
              <Text
                style={{color: colors.white, fontWeight: '700', fontSize: 15,   fontFamily:'Poppins-Regular',}}>
                My Enrollments
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name="arrow-right" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
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
    // justifyContent: 'center',
    // marginTop: 10,
    // height: 40,
    backgroundColor: '#1A21BC',
    width: '100%',
    alignItems: 'center',
    // paddingRight: -20,
    flexDirection: 'row',
  },
});
