import * as React from 'react';
import { Text, View, StyleSheet, Component } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>School Attendence</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});

export default AppHeader;