import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { colors } from '../constants';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const images = [
  {
    id: 1,
    image: require('../assets/imgs/ToDoList.png'),
    header: 'Better way to learning  \n is calling you!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 2,
    image: require('../assets/imgs/FreshFolk.png'),
    header: 'Find yourself  by doing  \n whatever you do !',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
  {
    id: 3,
    image: require('../assets/imgs/bg3.png'),
    header: 'It’s not just learning, \n It’s a promise!',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        // borderWidth: 1,
        // padding: 20,
        // borderRadius: 20,
        alignItems: 'center',
        // backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
      }}>
      <Image source={item.image} style={{width: 260, height: 260,paddingBottom:-30}} />
      <Text style={{marginVertical: 10, fontSize: 26, fontWeight: '500'}}>
        {item.name}
      </Text>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 26,
          fontWeight: '500',
          textAlign: 'center',
          alignSelf: 'center',
          textAlignVertical: 'center',
        }}>
        {item.header}
      </Text>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 16,
          fontWeight: '400',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        {item.para}
      </Text>
    </View>
  );
};

const myCarousel = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={images}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        autoplayInterval={3000}
        autoplay
        enableMomentum={false}
        loop
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 19 / 2,
          backgroundColor: colors.white,
          borderColor: colors.primary,
          borderWidth: 4,
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

export default myCarousel;
