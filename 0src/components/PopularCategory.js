import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';
import Data from '../constants/Data';

class PopularCategory extends Component {
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
        <View key={item.id} style={{marginTop: 10}}>
          <ImageBackground
            key={item.id}
            source={require('../assets/imgs/imgIMG.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 6}}
            style={styles.image}>
            <TouchableOpacity
              onPress={() => alert('You choose ' + item.category)}>
              <View style={styles.item}>
                <Text style={styles.itemname1}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    });

    return (
      <View>
        <Text style={styles.top}>Popular category in our platform</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: 10,marginLeft:-10
          }}>
          {items}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('Its an alert')}>
          <View style={styles.opacity}>
            <Text style={styles.seemore}>see more</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PopularCategory;

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
