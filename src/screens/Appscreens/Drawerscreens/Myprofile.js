import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Tab, Text, TabView} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Onlinecourse from '../../../components/Onlinecourse';

export default function Myprofile({navigation}) {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          // padding: 10,
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={34} color="#292D32" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '500',
            color: '#292D32',
            alignSelf: 'center',
            marginLeft: 7,
          }}>
          Course Details
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginBottom:10
        }}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg',
          }}
          // source={require('../assets/imgs/Banner.png')}
          style={{
            width: 150,
            height: 150,
            paddingBottom: -40,
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            // elevation: 2,
          }}
        />
        <TouchableOpacity
          style={{
            marginLeft: 130,
            marginTop: -20,
            backgroundColor: '#fff',
            height: 28,
            width: 28,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.4,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="camera" size={20} color="#292D32" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              color: '#292D32',
              // alignSelf: 'center',
              // marginLeft: 7,/
            }}>
            Student Name
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#292D32',
              alignSelf: 'center',
              marginLeft: 7,
            }}>
            B.Tech Graduate
          </Text>
        </View>
        {/* <Text>scdsccd</Text> */}
      </View>
      <View>
        <View>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
            }}
            // {...props}
            inactiveColor='green'
            activeColor='black'
            indicatorStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: 'pink'}}
            variant="primary">
            <Tab.Item title="Personal Details" titleStyle={{fontSize: 12}} />
            <Tab.Item title="My Orders" titleStyle={{fontSize: 12}} />
          </Tab>

          <TabView  inactiveColor='green'
            activeColor='black' value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{width: '100%'}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Onlinecourse filter="Online" />
              </ScrollView>
            </TabView.Item>
            <TabView.Item style={{width: '100%'}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Onlinecourse filter="offline" />
              </ScrollView>
            </TabView.Item>
          </TabView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
