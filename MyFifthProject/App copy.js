import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just yellow text!</Text>
      <Text style={styles.largeGreen}>Big old green text</Text>
      <Text style={styles.yellow, styles.largeGreen}>Yellow text, then large green text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  marginTop: 60,
},
largeGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20,

},

yellow: {
  color: 'yellow',
  fontSize: 20,
}
}
);
  
