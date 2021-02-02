import * as React from 'react';
import { Text, View, StyleSheet, Component, TouchableOpacity } from 'react-native';

class Submit extends React.Component{
  render(){
    return(
      <View   > 
      
        <TouchableOpacity stlye={style.textContainer}>
        <Text styles={style.text}> Submit</Text>
         </TouchableOpacity>

      </View>
    );
  }
}
const style=StyleSheet.create({
  textContainer:{
    
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    
    width: 200,
    height: 50,
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
     
 

 

export default Submit;