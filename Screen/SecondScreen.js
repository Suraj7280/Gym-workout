import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

export default class SecondScreen extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <View style={styles.Screen}>
            <View style={styles.container}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Monday')}>
                <View style={{backgroundColor:'red',flex:1,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                  <Text style={styles.textstyle}>    Monday       </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Tuesday')}>
                <View style={{backgroundColor:'blue',flex:1,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                  <Text style={styles.textstyle}>    Tuesday       </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Wednesday')}>
                <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                  <Text style={styles.textstyle}>   Wednesday  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Thursday')}>
                <View style={{backgroundColor:'green',flex:1,justifyContent:'center',alignItems:'center',borderRadius:8}}>
                  <Text style={styles.textstyle}>    Thursday     </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Friday')}>
                <View style={{backgroundColor:'gray',flex:1,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                  <Text style={styles.textstyle}>       Friday        </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Saturday')}>
                <View style={{backgroundColor:'yellow',flex:1,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                  <Text style={styles.textstyle}>    Saturday        </Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>

      );
    }
  }

  const styles=StyleSheet.create({
    container:{
      flex:2,
      flexDirection:"row",
      justifyContent:'space-between'
    },
    Screen:{
      flexDirection:'column',
      flex:6,
      backgroundColor:'lightblue'
    },
    textstyle:{
      fontSize:30,
      fontWeight:'bold',
      color:'black'
    }
  })