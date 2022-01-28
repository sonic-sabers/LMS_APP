import * as React from 'react';
import {
	View,
	Text,
	Button,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import {Mybutton, Loginbutton, ImageBackgrounds} from '../components';
import MyCarousel from '../components/MyCarousel';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Carouselscreen({navigation}) {
	return (
		<ImageBackgrounds
			style={{flex: 1, backgroundColor: colors.white, padding: 20}}>
			<SafeAreaView>
				<ScrollView>
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
							<Text style={{color: colors.primary, fontWeight: '700'}}> Skip </Text>
							<Icon name="arrow-right" size={18} color={colors.primary} />
						</TouchableOpacity>
						<MyCarousel />
						<View style={{justifyContent: 'space-evenly'}}>
							<Mybutton
								screenName="Register"
								colours={colors.primary}
								text="Register"
							/>
							<Loginbutton
								screenName="Loginscreen"
								colours={colors.primary}
								bgcolor="#754bae"
							/>
			
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</ImageBackgrounds>
	);
}
