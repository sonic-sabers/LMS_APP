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
} from '../components';
import {Searchscreen, PopularCategory, Latestcourse} from '../components';

const Homescreen = () => (
  <>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.primary}
      />
      <ImageBackgrounds>
        <View style={styles.container}>
          <Header />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 90}}>
            <View
              style={{
                marginVertical: 10,
              }}
            />

            <View style={{paddingHorizontal: 20}}>
              <Search
                style={{
                  marginVertical: 20,
                }}
              />
            </View>
            <View style={{paddingBottom: 20,marginLeft:10}}>
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
    // flex: 1,
    paddingTop: 20,
    // paddingBottom:-20
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Homescreen;
