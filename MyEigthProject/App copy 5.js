import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if(permissionResult.granted == false){
      alert("Permission is required!");
      return;
    }
    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  

  return (
    <View style={styles.container}>
      <Image source = {{uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617.jpg"}}
        style={styles.logo}>
      </Image>
      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress= {openImagePickerAsync}>
        <Text style={styles.buttonText}>
          Pick image
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#778899",
  },

  button: {
    
    backgroundColor: "#008b8b",
    padding: 10,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#9b08f1",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20,
  },

  buttonText:{
    fontSize: 20,
    color: "blue"
  }

});
