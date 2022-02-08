import React, { useState } from 'react';

import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  // TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground, FlatList,
} from 'react-native';
import {
  ImageBackgrounds,
  Loginbutton,
  Mybutton,
  Socialbutton,
  Toinput,Myheader,
} from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../constants';

export default function Course({ navigation }) {
  const [people, setPeople] = useState([
    { name: 'Outcome', id: '1' },
    { name: 'Sessions', id: '2' },
    { name: 'Requirements', id: '3' },
    { name: 'Curriculam', id: '4' },
    { name: 'Outcome', id: '5' },
    { name: 'Sessions', id: '6' },
    { name: 'Requirements', id: '7' },
  ]);
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Myheader Screenname="Homescreen" Headername="Course Details"/>
      <ScrollView>
        <FlatList
          // numColumns={2}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity style={{
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 7,
              paddingVertical:3,
              marginLeft: 10,
              marginTop: 10,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily:'Poppins-Regular',
            }}
              onPress={() => alert(item.name)}
            >
              <Text style={{ fontSize: 14, fontWeight: '400' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <ImageBackground
          source={require('../../assets/imgs/Rectangle981phptp.png')}
          resizeMode="cover"
          style={styles.image}>
          <View>
            <Image
              source={require('../../assets/imgs/Group10786phptp.png')}
              resizeMode="cover"
              style={{
                height: 50,
                width: 50,
                borderRadius: 5,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: colors.white,
                alignSelf: 'center',
                marginTop: 7,
              }}>
              Have a look at course
            </Text>
          </View>
        </ImageBackground>

        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '500',
              color: colors.black,
              fontFamily:'Poppins-Regular',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              marginTop: 10,
              fontFamily:'Poppins-Regular',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id suscipit
            at rutrum ultricies. Ut vitae elit nisi, quis tortor porta. Gravida
            donec porttitor a faucibus.{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#111',
                }}>
                Trainer Name
              </Text>
              <Text>Ratings Stuff</Text>
            </View>
            <View>
              <View style={styles.sellerbox}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#111',
                  }}>
                  Bestseller
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#111',
                }}>
                30,000 Learners
              </Text>
            </View>
          </View>
          <Text>Languages and last updates</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text>$ 599.00</Text>
            </View>
            <View>
              <Text>Status Drop {'\n'}down</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <TouchableOpacity style={{ flex: 1.2, marginLeft: -30 }}>
              <Mybutton text="But Now" />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: colors.primary,
                borderWidth: 0.6,
                borderRadius: 6,
                paddingHorizontal: 0,
                flex: 1,
              }}>
              <Text>Add to Cart</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '500',
                color: colors.black,
              }}>
              What you'll learn
            </Text>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="check" size={25} color="#222" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="check" size={25} color="#222" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="check" size={25} color="#222" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Lorem ipsum dolor sit amet
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '500',
                color: colors.black,
              }}>
              Requirements
            </Text>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="check" size={25} color="#222" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Core,java,Frontend
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text>sdfvfddfb </Text>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width: '100%',
    paddingHorizontal: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
  },
  sellerbox: {
    backgroundColor: '#FFF06B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 23,
    width: 90,
  },
});
