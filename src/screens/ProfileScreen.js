import React from 'react';
import {Alert, View, StyleSheet, Text} from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import {AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Avatar } from "react-native-elements";
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/';

let username;
let email;

var getUsername = async () => {
  try {
    username = await AsyncStorage.getItem('@username_Key')
    if (username === null) {
      Alert.alert('error on username retrieval');
    }
  } catch (e) {
    Alert.alert('failure');
  }
}

var getEmail = async () => {
  try {
    email = await AsyncStorage.getItem('@email_Key');
    if (email === null) {
      Alert.alert('error on email retrieval');
    }
  } catch (e) {
    Alert.alert('failure');
  }
}

getUsername();
getEmail();

export function ProfileScreen({navigation, props, token}){
  return (
    <View style={styles.container}>
    <Avatar size = "xlarge"
      overlayContainerStyle={{backgroundColor: '#009387'}}
      rounded title={username.substring(0,1)}/>
      <Text style={styles.nameText}> {username}</Text>
      <Text style={styles.email}> {email}</Text>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },

  nameText: {
    fontSize: 48,
    paddingTop: 60,
    color: 'white'
  },

  email: {
    fontSize: 24,
    paddingTop: 20,
    color: 'white'
  }
});
