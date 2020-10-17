import React from 'react';
import {SafeAreaView, View, } from 'react-native';

import MyCounter from './components/MyCounter';
import MyNumber from './components/MyNumber';

const App = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>

        <MyNumber />

        <View style={{backgroundColor : '#f48fb1' , padding :10 }}></View>

        <MyCounter />
      </View>
    </SafeAreaView>
  );
};

export default App;
