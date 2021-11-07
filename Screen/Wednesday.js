import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default class Tuesday extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <ScrollView>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Legs</Text>
            <Text>The finish line is just the beginning of a whole new race.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/leg.png')} style={{height:270,width:390}} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Shoulder</Text>
            <Text> Strive for progress, not perfection.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/shoulder.png')} style={styles.image} />
          </View>
        </ScrollView>
      );
    }
 }

const styles = StyleSheet.create(
  {
    screen: {
        flex:1,
        alignItems:'center'
    },
    textstyle:{
      fontSize:30,
      fontWeight:'bold',
      color:'black'
    },
    image:{
      height:470,
      width:390,
    }
  }
)