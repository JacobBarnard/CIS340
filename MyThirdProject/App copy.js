import React from 'react';
import {Text, View, TextInput } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>Hey, My name is {props.name}, I am student in CIS340</Text>
    </View>
  );
}

export default function MultiComp(){
  return (
    <View 
     style={{
          flex: 1,
          justifyContent: 'center',
          alignItems:'center'
      }}>
      <Text> 
        Welcome to CIS340
      </Text>
      <Student name = "Jacob Barnard"/>
      <Student name = "Alice" />
      <Student name = "Bob"/>
      <Student name = "Jon Clark"/>
    </View>
  );
}

