import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native'

export default class Header extends Component{
    render(){

        return(
                <SafeAreaView>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        width:80,
        height: 26,
        resizeMode:'contain'

    }
});