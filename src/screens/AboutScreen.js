import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export function AboutScreen({route, navigation}){
  return (
    <View style={styles.container}>
    <Feather
      style={styles.closeIcon}
      name={'x-circle'}
      color="#009387"
      size={30}
      onPress={() => {
        navigation.goBack();
      }}
    />
      <Text style={styles.title}>MERIDIAN</Text>
      <Text style={styles.descriptionText}>
        Meridian is a money management application that
        allows users to create, read from, update, and
        delete groups that contain other users that have
        a financial relationship to the original user.
        </Text>
        <Text style = {styles.descriptionText}>
        Meridian allows users to keep track of
        finances for all kinds of events.
        </Text>
        <Text style = {styles.descriptionText}>
        From vacations to dinners, from loans to everyday expenses, this
        application provides a platform to conveniently
        manage your finances.
      </Text>

      <View style={styles.developers}>
      <Feather name={'code'} color="#009387" size={25} />
      <Text style={styles.dev}>  with  </Text>
      <FontAwesome name={'heart'} color="red" size={20} />
      <Text style={styles.dev}>  by  G15</Text>

      </View>


      <Text style={styles.creditsText}>
        Nas Lyazghi
      </Text>
      <Text style={styles.creditsText}>
        Jeffrey Ramos
      </Text>
      <Text style={styles.creditsText}>
        Ryan Gordon
      </Text>
      <Text style={styles.creditsText}>
        Erik Bates
      </Text>
      <Text style={styles.creditsText}>
        Austin Traub
      </Text>
      <Text style={styles.creditsText}>
        Moises "David" Cortes Lugo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 130,
  },

  title: {
    fontSize: 30,
    color: '#009387',
    textAlign: 'center',
    marginBottom: 50,

  },

  developers: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 6,
    marginTop: 45,
  },

  dev: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  descriptionText: {
    fontSize: 17,
    color: 'white',
    paddingBottom: 10,
    paddingLeft: 7,
    textAlign: 'center',
  },

  devText: {
    paddingTop: 80,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  creditsText: {
    paddingTop: 2,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },

  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
