import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View, Button, TouchableOpacity
} from 'react-native';
import Search from 'react-native-search-box';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Header,
  ImageBackgrounds,
  MyText,
  Prevcourse,
  TTrainers,
  Banner,
} from '../../components';
import { Searchscreen, PopularCategory, Latestcourse } from '../../components';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { __ } from '@utility/translation';

const Homescreen = ({ props }) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.primary}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          onPress={() => { props.data }}

        />
        {/* <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      /> */}
        {/* <Button
        title="Open drawer" /> */}
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            // style={{paddingTop: 5}}
            contentContainerStyle={{ flexGrow: 1 }}>
            <Banner />
            <View style={{ marginLeft: 10, marginBottom: 80, flex: 1 }}>
              <PopularCategory />
      
              <Latestcourse seemore all />
              <TTrainers />
              <Prevcourse />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }, seemore: {
    fontWeight: '900',
    color: '#1A21BC',
    fontSize: 18,
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
});

export default Homescreen;
