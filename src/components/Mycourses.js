import React from 'react';
import {Tab, Text, TabView} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Onlinecourse from './Onlinecourse';
export default Mycourses = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item title="Offline" titleStyle={{fontSize: 12}} />
        <Tab.Item title="Online" titleStyle={{fontSize: 12}} />
        <Tab.Item title="F2F" titleStyle={{fontSize: 12}} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Onlinecourse filter="Offline"/>
          {/* </ScrollView> */}
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Onlinecourse filter="Online"/>
          {/* </ScrollView> */}
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Onlinecourse filter="F2F"/>
          {/* </ScrollView> */}
        </TabView.Item>
      </TabView>
    </>
  );
};
