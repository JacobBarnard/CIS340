import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{height: 300}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style= {{flex: 1, backgroundColor: 'blue'}} />
      <View style={{flex: 1, backgroundColor: 'yellow'}}/>
    </View>
  );
}


  
