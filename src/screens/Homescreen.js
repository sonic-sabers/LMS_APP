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
import {Header, ImageBackgrounds, MyText, Prevcourse, TTrainers} from '../components';
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
          <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:90}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              {/* <Searchscreen /> */}
            </View>
              <Search style={{magrinVertical:20}}/>
            <PopularCategory />
            <Latestcourse />
            <TTrainers />
            <Prevcourse/>
          </ScrollView>
        </View>
      </ImageBackgrounds>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Homescreen;
