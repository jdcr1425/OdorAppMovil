import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native'
import Constants from 'expo-constants'


  
  

export default class Header extends Component{
    render(){

        return(
                <View style={styles.header}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        width:80,
        height: 26,
        resizeMode:'contain'
    },
    header:{
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#304ffe'
        
    }, 
   
});