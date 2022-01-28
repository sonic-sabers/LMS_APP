import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Search from 'react-native-search-box';

import {ScrollView} from 'react-native-gesture-handler';
import {
  Header,
  ImageBackgrounds,
  MyText,
  Prevcourse,
  TTrainers,
  Banner,
} from '../components';
import {Searchscreen, PopularCategory, Latestcourse} from '../components';

const Homescreen = ({navigation}) => (
  <>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.primary}
      />
      <ImageBackgrounds>
        <View style={styles.container}>
          {/* <View style={{padding: 20, marginTop: -15}}> */}
            <Header />
          {/* </View> */}
          {/* <View
              style={{
                marginVertical: 10,
              }}
            /> */}
          {/* 
            <View style={{paddingHorizontal: 20,marginBottom:10}}>
              <Search
                style={{
                  marginVertical: 20,
                }}
              />
            </View> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{}}
            contentContainerStyle={{flexGrow: 1}}>
          <Banner />
            <View style={{ marginLeft: 10,marginBottom: 180,flex:1}}>
              <PopularCategory />
              <Latestcourse />
              <TTrainers />
              <Prevcourse />
            </View>
          </ScrollView>
        </View>
      </ImageBackgrounds>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default Homescreen;
