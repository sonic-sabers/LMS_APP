import { StyleSheet, View, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tab, Text, } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Onlinecourse from '../../../components/Onlinecourse';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => {
  return (
    <>
      <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
    </>
  )
};

const SecondRoute = () => {
  return (
    <>
      <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
    </>
  )
};

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});



export default function Myprofile({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Personal Details' },
    { key: 'second', title: 'My Orders' },
  ]);
  return (
    <View style={{ flex: 1, padding: 10 }}>
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
          marginBottom: 10
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
            shadowOffset: { width: 0, height: 2 },
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
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.container}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({ route, color }) => (
                <Text style={{ fontWeight: '600', fontFamily: 'Poppins-Regular', fontSize: 14, color: "#1a21bc" }}>
                  {route.title}
                </Text>
              )}
              style={{ backgroundColor: 'white', borderTopColor: 'rgba(9,9,9,3)', borderTopWidth: 1 }}
              activeColor={colors.primary}
              inactiveColor={'#e8bca19'}
              bounces
              tabStyle={{ backgroundColor: '#fff', marginVertical: -7 }}
              indicatorStyle={{ width: 2, color: colors.black, height: 2 }}
            />
          )}

        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
