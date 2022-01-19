import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Mybutton, Loginbutton} from '../components';
import MyCarousel from '../components/MyCarousel';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Carouselscreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white, padding: 20}}>
      <View style={{justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: 20,
            marginRight: 20,
          }}
          onPress={() => navigation.navigate(Loginscreen)}>
          <Text style={{color: colors.primary, fontWeight: '700'}}>Skip </Text>
          <Icon name="arrow-right" size={18} color={colors.primary} />
        </TouchableOpacity>
        <MyCarousel />
        <View style={{justifyContent: 'space-evenly'}}>
          <Mybutton
            screenName="ProfileScreen"
            colours={colors.primary}
            text="Register"
          />
          <Loginbutton
            screenName="Loginscreen"
            colours={colors.primary}
            bgcolor="#754bae"
          />
          {/* <TouchableOpacity onPress={() => navigation.navigate(ProfileScreen)}>
            <View style={styles.buttons}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.primary,
                  fontWeight: '500',
                }}>
                Log In
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.white,
    width: '75%',
    marginHorizontal: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    marginTop: 20,
  },
});
