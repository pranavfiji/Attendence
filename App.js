import * as React from 'react';
import { Text, View, StyleSheet, Constructor,} from 'react-native';
import Constants from 'expo-constants';
import AppHeader from './components/AppHeader'
import Submit from './components/submit'
 import db from './config'

export default class App extends React.Component {
  constructor(){
      super();
      this.state={
        attendence:[]
      } 
  }
  componentDidMount(){
      this.attendenceRanker();
  }

  attendenceRanker=()=>{
      var markedAttend=[];
      var attendenceRef=db.ref("people")
      attendenceRef.on("value",(data)=>{
        var attendList=data.val();

        for( var eachPerson in attendList){
          if(attendList[eachPerson]["Attendence"]===Present){
            attendList[eachPerson]["personName"]=eachPerson
            markedAttend.push(attendList[eachPerson])
          }
        }
        this.setState({
          attendence:markedAttend,
        })
      })
  }
  render(){
  return (
     <View>
      <AppHeader/>
      <Text style={styles.Text}  > 1. Jake Wilder </Text>
      <Text style={consistent.Text}>2.James Smith</Text>
      <Text style={styleSheet.Text}>3.Haisle Howaey</Text>
      <Text style={textStyles.Text}>4. John William</Text>
       <Submit/>
     </View>
  );
}
}
const styles=StyleSheet.create({

  Text:{
    color: 'red',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:40

  }
})

const consistent=StyleSheet.create({

  Text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:41

  }
})

const styleSheet=StyleSheet.create({

  Text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:42

  }
})
const textStyles=StyleSheet.create({

  Text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:43

  }
})
