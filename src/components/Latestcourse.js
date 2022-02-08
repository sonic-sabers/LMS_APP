import React, { Component } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity, FlatList,
} from 'react-native';
import { colors } from '../constants';
import Data from '../constants/Data';
import { __ } from '@utility/translation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export default function Latestcourse(props) {
  const navigation = useNavigation();


  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'left',
          // marginLeft: 10,
          color: '#111',
          marginVertical: 10,
          fontFamily: 'Poppins-Regular',

        }}>
        Latest course
      </Text>
  
      <FlatList
        // scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={Data}
        listMode="SCROLLVIEW"
        horizontal={true}
        nestedScrollEnabled={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              key={item.id}
              style={{
                flex: 1,
                marginRight: 7,
                // width: 160,
                backgroundColor: '#F8F8F8',
                borderRadius: 10,
                elevation: 2,
                shadowOffset: { width: 0, height: 3 },
                shadowColor: '#000',
                shadowOpacity: 0.5,
                position: 'relative',
                borderRadius:10
              }}
              onPress={() => alert('Its an alert')}>

              <View style={{
                flex: 1,
                // padding: 5,
              }}>
                <Image
                  source={require('../assets/imgs/unsplash_1.png')}
                  resizeMode="cover"
                  style={{
                    // flex: 1,
                    height: 135,
                    width: 190,
                    // marginHorizontal: 9.5,
                    borderRadius: 5,
                    marginTop: -10,
                    // marginLeft: -10,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}
                />
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', marginTop: -125, marginBottom: 95, }}>
                  <View>
                    {(item.status == "Online") ?

                      (<>
                        <ImageBackground
                          source={require('../assets/imgs/Online.png')}
                          resizeMode="cover"
                          style={{
                            height: 21,
                            width: 50,
                            justifyContent: 'center',
                            alignItems: 'center',

                            //  marginTop: -120, marginBottom: 100,
                            // marginLeft: -10, 
                          }}>
                          <Text
                            style={{
                              fontSize: 10,
                              color: colors.white,
                              alignSelf: 'center',
                              fontFamily: 'Poppins-Regular',
                            }}>
                            Online
                          </Text>
                        </ImageBackground>
                      </>) : (
                        <ImageBackground
                          source={require('../assets/imgs/Rectangle.png')}
                          resizeMode="cover"
                          style={{
                            height: 21,
                            width: 50,
                            justifyContent: 'center',
                            alignItems: 'center',

                            //  marginTop: -120, marginBottom: 100,
                            // marginLeft: -10, 
                          }}>
                          <Text
                            style={{
                              fontSize: 10,
                              color: colors.white,
                              alignSelf: 'center',
                              fontFamily: 'Poppins-Regular',
                            }}>
                            HOT
                          </Text>
                        </ImageBackground>
                      )}
                  </View>
                  <View style={{ flexDirection: 'row', }}>
                    {((item.status == "Offline" || item.status == "Online")) &&
                      <Image
                        source={require('../assets/imgs/download.png')}
                        resizeMode="cover"
                        style={{
                          height: 39,
                          width: 39,
                          borderRadius: 5,
                          // marginLeft: -6,
                        }}
                      />
                    }
                    {(item.status == "Online") &&

                      <Image
                        source={require('../assets/imgs/Mobile.png')}
                        resizeMode="cover"
                        style={{
                          height: 39,
                          width: 39,
                          borderRadius: 5,
                          marginLeft: -7,
                        }}
                      />
                    }
                    {(item.status == "F2F" || item.status == "Online") &&
                      // {(props.all ||(item.status == "F2F")) &&
                      <Image
                        source={require('../assets/imgs/Offline.png')}
                        resizeMode="cover"
                        style={{
                          height: 39,
                          width: 39,
                          borderRadius: 5,
                          marginLeft: -9,

                        }}
                      />
                    }
                  </View>
                </View>
              </View>
              <>
                {(item.status == "Online") ? (<View style={{ padding: 5, backgroundColor: "rgba(177,38,5,0.7)", zIndex: 2000, width: "100%", marginTop: -60 }}>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 10,
                          color: colors.white,
                          // alignSelf: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontWeight: '400',
                        }}>
                        Staring From
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.white,
                          // alignSelf: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontWeight: '700',
                        }}>
                        25-01-2022
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 10,
                          color: colors.white,
                          // alignSelf: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontWeight: '400',
                          // alignSelf: 'end'
                          textAlign: 'right'
                        }}>
                        Duration
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.white,
                          // alignSelf: 'center',
                          fontFamily: 'Poppins-Regular',
                          fontWeight: '700',
                        }}>
                       5-Months
                      </Text>
                    </View>
                  </View>
                </View>) : null}
              </>

              <View style={{
                flex: 1,
                padding: 10,
              }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    textAlign: 'left',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.Latestcourse}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    textAlign: 'left',
                    fontFamily: 'Poppins-Regular',
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
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item.rating} - ⭐⭐⭐⭐
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: '400',
                      textAlign: 'left',
                      fontFamily: 'Poppins-Regular',
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
          </View>
        )}
      />

      <TouchableOpacity style={{
        marginRight: 10
      }} onPress={() => navigation.navigate('Mycourse')}>
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
            {__('see more')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
// }


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
