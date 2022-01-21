// import React, {Component} from 'react';
// import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Search from 'react-native-search-box';
import {Header, ImageBackgrounds} from '../components';
import {colors} from '../constants';

class Mycourse extends Component {
  state = {
    names: [
      {
        name: 'Development',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 11,
      },
      {
        name: 'Teaching',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 12,
      },
      {
        name: 'Computer',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 13,
      },
      {
        name: 'Teaching1',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 14,
      },
      {
        name: 'Computer1',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 15,
      },
      {
        name: 'Development1',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 16,
      },
      {
        name: 'Teaching2',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 17,
      },
      {
        name: 'Computer3',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 18,
      },
      {
        name: 'Development2',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 19,
      },
      {
        name: 'Computer2',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 110,
      },
      {
        name: 'Teaching3',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 111,
      },
      {
        name: 'Development3',
        course: 'Adobe illustrator for  \n all beginner artist',
        Instructor: 'Amit Trivedi',
        price: ' 599.00 ',
        reviews: ' (432)',
        student: ' 4K ',
        id: 112,
      },
    ],
  };
  render() {
    return (
      <ImageBackgrounds>
        <View style={{padding: 8}}>
          <Header />

          <View style={{magrinVertical: 20, marginTop: 10}}>
            <Search />
          </View>
          </View>
          <View style={{justifyContent:'center',marginTop:10,   height: 40, backgroundColor: '#1A21BC',width: '100%',alignItems: 'center',paddingRight:-20}}> 
            <Text
              style={{
                alignSelf: 'center',
              }}>
              To add Enroll
            </Text>
          </View>
        <View style={{padding: 8}}>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.names.map((item, index) => (
              <>
                <TouchableOpacity
                  onPress={() =>
                    alert(' you pressed course by ' + item.Instructor)
                  }>
                  <View key={item.id} style={styles.item}>
                    <View style={{}}>
                      <Image
                        source={require('../assets/imgs/unsplash_1.png')}
                        resizeMode="cover"
                        style={{
                          height: 110,
                          width: 104,
                          borderRadius: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        paddingLeft: 10,
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '800',
                        }}>
                        {item.course}
                      </Text>
                      {/* <Text>{item.name}</Text> */}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                        }}>
                        {item.Instructor}
                      </Text>
                      <Text>{item.student} student</Text>
                    </View>
                    <View style={{justifyContent: 'flex-end',marginLeft:-11}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '900',
                        }}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            ))}
          </ScrollView>
        </View>
      </ImageBackgrounds>
    );
  }
}
export default Mycourse;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 30,
    margin: 2,
    padding: 10,
    // borderColor: '#2a4944',
    // borderWidth: 1,
    marginTop: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
});

// // import state from '../assets/Data';
// export default class Mycourse extends Component {

//   render() {
//     return (
//       <ImageBackgrounds>
//         <View style={{padding: 20}}>
//           {/* <Text
//           style={{
//             fontSize: 20,
//             fontWeight: '500',
//             textAlign: 'left',
//             // marginLeft: 10,
//             color: '#111',
//             marginVertical: 10,
//           }}>
//           Latest Course
//         </Text> */}
//           <Header />
//           <View style={{magrinVertical: 20, marginTop: 10}}>
//             <Search />
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {this.state.names.map((item, index) => (
//               <TouchableOpacity onPress={() => alert('Its an alert')}>
//                 <View
//                   style={{
//                     flex: 1,
//                     marginBottom: 10,
//                     backgroundColor: '#F8F8F8',
//                     flexDirection: 'row',
//                     // justifyContent: 'space-evenly',
//                   }}>
//                   <View style={{flex: 1}}>
//                     <Image
//                       source={require('../assets/imgs/unsplash_1.png')}
//                       resizeMode="cover"
// style={{
//   height: 130,
//   width: 124,
//   borderRadius: 5,
// }}
//                     />
//                   </View>

//                   <View key={item.id} style={styles.item}>
// <Text
//   style={{
//     fontSize: 15,
//     fontWeight: '800',
//   }}>
//   {item.course}
// </Text>
//                     <Text
//                       style={{
//                         fontSize: 12,
//                         fontWeight: '400',
//                       }}>
//                       {item.Instructor}
//                     </Text>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 14,
//                           fontWeight: '400',
//                           textAlign: 'left',
//                           marginLeft: 2,
//                         }}>
//                         {item.price} - stars
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: 11,
//                           fontWeight: '400',
//                           textAlign: 'left',
//                         }}>
//                         {item.reviews}
//                       </Text>
//                     </View>

//                     <View
//                       style={{
//                         justifyContent: 'flex-end',
//                         flexDirection: 'row',
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 15,
//                           fontWeight: 'bold',
//                           textAlign: 'left',
//                           marginLeft: 2,
//                         }}>
//                         INR
//                         <Text
//                           style={{
//                             fontWeight: '900',
//                             color: '#000',
//                           }}>
//                           {item.student}
//                         </Text>
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//           <TouchableOpacity onPress={() => alert('Its an alert')}>
//             <View
//               style={{
//                 justifyContent: 'flex-end',
//                 flexDirection: 'row',
//               }}>
//               <Text
//                 style={{
//                   fontWeight: '900',
//                   color: '#1A21BC',
//                   fontSize: 18,
//                   marginLeft: 10,
//                 }}>
//                 see more
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ImageBackgrounds>
//     );
//   }
// }
// {
//   /* </TouchableOpacity> */
// }
// {
//   /* </Image> */
// }
// // export default Latestcourses;

// const styles = StyleSheet.create({
//   item: {
//     // flexDirection: 'row',
//     // marginHorizontal: 9.5,
//     // flex: 4,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // padding: 30,
//     // margin: 2,
//     // marginHorizontal:50,
//   },
// });
