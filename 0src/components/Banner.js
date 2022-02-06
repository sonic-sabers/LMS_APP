import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../constants';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const images = [
  {
    id: 1,
    image: require('../assets/imgs/Banner.png'),
    header: 'Better way to learning  \n is calling you!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 2,
    image: require('../assets/imgs/Banner.png'),
    header: 'Find yourself  by doing  \n whatever you do !',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 3,
    image: require('../assets/imgs/Banner.png'),
    header: 'It’s not just learning, \n It’s a promise!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 4,
    image: require('../assets/imgs/Banner.png'),
    header: 'It’s not just learning, \n It’s a promise!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 5,
    image: require('../assets/imgs/Banner.png'),
    header: 'It’s not just learning, \n It’s a promise!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 6,
    image: require('../assets/imgs/Banner.png'),
    header: 'It’s not just learning, \n It’s a promise!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
];

const renderItem = ({item}) => {
  return (
    <View key={item.id}
      style={{
        // borderWidth: 1,
        // padding: 20,
        // borderRadius: 20,
        alignItems: 'center',
        // backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        // elevation: 2,
      }}>
      <Image
        source={item.image}
        style={{
          width: '95%',
          height: 120,
          paddingBottom: -40,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          // elevation: 2,
        }}
      />
    </View>
  );
};

const Banner = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{marginTop:20}} >
      <Carousel
        ref={isCarousel}
        data={images}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        autoplayInterval={3500}
        autoplay
        enableMomentum={false}
        loop
        style={{
          marginBottom:-10,
          // paddingTop:20
        }}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 10,
          backgroundColor: colors.white,
          borderColor: colors.primary,
          borderWidth: 4,
          marginHorizontal: -10,
          marginTop:-7.8,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Banner;
