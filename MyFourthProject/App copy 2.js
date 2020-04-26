import React, {Component, useState} from 'react';
import {TestInput, Text, View, TextInput } from 'react-native';

export default function WordConvertor() {
  const [text, setText]=useState('');
  return (
    <View style={{padding: 40}}>
      <TextInput
      style={{height: 40}}
      placeholder="Input you text here!"
      onChangeText={text => setText(text)}
      defaultValue={{text}}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '*').join('    ')}
      </Text>
    </View>
  );
  
}


