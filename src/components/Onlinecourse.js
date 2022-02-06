import React, { Component } from 'react';
import {
	Text,
	Image,
	ImageBackground,
	View,
	StyleSheet,
	Pressable,
	ScrollView,
	TouchableOpacity, FlatList
} from 'react-native';
import Search from 'react-native-search-box';
import { Header, ImageBackgrounds, Mycourses } from '../components';
import { colors } from '../constants';
import Data from '../constants/Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Onlinecourse(props) {
	return (
		<View {...props}>
			<FlatList
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				data={Data}
				listMode="SCROLLVIEW"
				nestedScrollEnabled={true}
				renderItem={({ item }) => (
					<>
						{(item.status == props.filter|| props.all) && (
							<View key={item.icon}>

								<TouchableOpacity
									// key={item.id}
									onPress={() =>
										alert(' you pressed course by ' + item.Instructor)
									}>
									<View style={styles.item}>

										<Image
											source={require('../assets/imgs/unsplash_1.png')}
											resizeMode="cover"
											style={{
												height: 100,
												width: 90,
												borderRadius: 5,
											}}
										/>
										<View style={{
											marginHorizontal: 5,
											flex: 1
										}}>
											<View style={{
												width: "95%",
											}}>
												<Text
													style={{
														fontSize: 18,
														fontWeight: '800',
														fontFamily: 'poppins',

													}}>
													{item.course}
												</Text>
											</View>
											{/* <Text>vrvrv</Text> */}
											<View style={{
												justifyContent: 'space-between',
												// width: '80%',
												flex: 1
											}}>
												<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

													<Text
														style={{
															fontSize: 14,
															fontFamily: 'poppins',
															fontWeight: '500',
														}}>
														{item.Instructor}
													</Text>

													<View style={{ flexDirection: 'row', alignItems: 'center', }}>
														{(props.all ||(props.filter=="Offline")) &&
															<Image
																source={require('../assets/imgs/download.png')}
																resizeMode="cover"
																style={{
																	height: 39,
																	width: 39,
																	borderRadius: 5,
																	marginHorizontal: -2,
																}}
															/>
														}
														{(props.all ||(props.filter=="Online")) &&

															<Image
																source={require('../assets/imgs/Mobile.png')}
																resizeMode="cover"
																style={{
																	height: 39,
																	width: 39,
																	borderRadius: 5,
																	marginHorizontal: -2,
																}}
															/>
														}
														{(props.all ||(props.filter=="F2F")) &&
															<Image
																source={require('../assets/imgs/Offline.png')}
																resizeMode="cover"
																style={{
																	height: 39,
																	width: 39,
																	borderRadius: 5,
																	marginHorizontal: -2,

																}}
															/>
														}

													</View>

												</View>
												<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

													<View style={{ flexDirection: 'row', alignItems: 'center' }}>
														<Icon name="account-outline" size={18} color="#000" />
														<Text>{item.student} student </Text>
														<Icon name="star" size={18} color="#FFA927" />
														<Text> {item.rating} </Text>
													</View>
													<View style={{ justifyContent: 'flex-end', }}>
														<Text
															style={{
																fontSize: 16,
																fontWeight: '700',
																fontFamily: 'poppins',
																color: '#000000'
															}}>
															₹{item.price}
														</Text>
													</View>
												</View>
											</View>
										</View>
									</View>
								</TouchableOpacity>
							</View>
						)
						}
					</>
				)}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		margin: 2,
		padding: 10,
		marginVertical: 7,
		backgroundColor: '#F8F8F8',
		borderRadius: 8,
		marginRight: 10
	},
});
