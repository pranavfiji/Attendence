import * as React from 'react';
import { Text, View, StyleSheet, Component } from 'react-native';

class Attendence extends React.Component{

  render(){
    return(
        <TouchableOpacity style={style.button}> Present<TouchableOpacity>
        <TouchableOpacity stlye={style.redButton}> Absent <TouchableOpacity>

        <TouchableOpacity style={secondStyle.button}>Present <TouchableOpacity>
        <TouchableOpacity stlye={secondStyle.redButton}> Absent<TouchableOpacity>

        <TouchableOpacity stlye={thirdStyle.button}>Present <TouchableOpacity>
        <TouchableOpacity style={thirdStyle.redButton}> Absent<TouchableOpacity>

        <TouchableOpacity style={fourthStyle.button}>Present <TouchableOpacity>
        <TouchableOpacity style={fourthStyle.redButton}> Absent<TouchableOpacity>
    )
  }
}
const style=StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    
  },
  redButton:{
     borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:40,
    marginLeft:30
  }
})

const secondStyle=StyleSheet.create({
  button:{
     borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:41,
    
  },
  redButton:{
     borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:41,
    marginLeft:30
  }
})
const thirdStyle=StyleSheet.create({
  button:{
     borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:42,
    
  },
  redButton:{
     borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:42,
    marginLeft:30
  }
})

const fourthStyle=StyleSheet.create({
  button:{
     borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:43,
    
  },
  redButton:{
     borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: 'red',
    
    marginTop:43,
    marginLeft:30
  }
})
