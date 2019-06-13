import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar, Button,TouchableOpacity   } from 'react-native';
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
        <View style={{flex:2, justifyContent:'center', backgroundColor:'#ecfffd'}}>
        <Text style={styles.textWithShadow}>¿Percibe algún olor?</Text>

        <View style={styles.containerButton}>

          <TouchableOpacity style={styles.button}>
           <Text style={styles.textWithShadow}>SÍ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor:'#304ffe'}]}>
           <Text style={styles.textWithShadow}>NO</Text>
          </TouchableOpacity>
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
        textShadowColor: 'rgba(0, 0, 0, 0.85)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        alignSelf:'center'
    },
    containerButton:{
      marginTop:10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button:{
      padding:30,
      backgroundColor:'#65ba69',
      borderRadius:70,
      borderWidth: 1,
      borderColor: '#fff'
    }
});
