import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar, SafeAreaView } from 'react-native';
import Header from './src/components/Header.js';
export default class App extends React.Component{

  constructor() {
    super();
    this.state ={}
  }
  render(){
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.question}>¿Percibe algún olor?</Text>
      </View>
    </View>
     
    
  );
}
}

const styles = StyleSheet.create({
      container:{flex: 1, justifyContent:'center', alignItems:'center'},
      question:{ fontSize: 40, fontWeight: 'bold'}
});
