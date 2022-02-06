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
} from '../../components';
import {Searchscreen, PopularCategory, Latestcourse} from '../../components';

const Homescreen = ({navigation}) => (
  <>
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={colors.primary}
    />
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={{paddingTop: 5}}
          contentContainerStyle={{flexGrow: 1}}>
          <Banner />
          <View style={{marginLeft: 10, marginBottom: 180, flex: 1}}>
            <PopularCategory />
            <Latestcourse />
            <TTrainers />
            <Prevcourse />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default Homescreen;
