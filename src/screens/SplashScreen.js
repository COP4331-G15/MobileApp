import React from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-ionicons';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { Bold, CornerUpLeft } from 'react-feather';


const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton="1500"
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Begin your expense management journey with MERIDIAN</Text>
                <Text style={styles.text}>It's time to make your friends pay up!</Text>
                < View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <LinearGradient
                        colors={['white', 'white']}
                        style={styles.signIn}
                    >
                    <Text style={styles.textSign}>Get Started  </Text>
                    <Feather name="arrow-right" color="black" size={20}/>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1B1921'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#009387',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 24,
  },
  text: {
      color: 'white',
      fontSize: 17,
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
  },
  textSign: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold'
  }
});
