import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar, Button  } from 'react-native';
import Header from './src/components/Header.js';
import Constants from 'expo-constants'
export default class App extends React.Component{

  constructor() {
    super();
    this.state ={}
    
  }
  render(){
  return (
    <View style={{flex:1}}>
      <View style={styles.statusBar} />
      <Header/>
      <View style={styles.container}>
        <Text style={styles.textWithShadow}>¿Percibe algún olor?</Text>
        <View style={styles.containerButton}>
          <Button
            title="Sí"/>
          <Button
            title="No"/>
        </View>
      </View>
    </View>
     
    
  );
}
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#7a7cff'
      },
      statusBar: {
        backgroundColor: "#0026ca",
        height: Constants.statusBarHeight,
      },
      textWithShadow:{
        color:'white',
        fontSize: 40, 
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    containerButton:{

      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'red'
    }
});
