import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default class Monday extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <ScrollView>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Chest</Text>
            <Text>You want me to do something... tell me I can't do it.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/chest.png')} style={styles.image} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Triceps</Text>
            <Text>Pain is temporary. Quitting lasts forever.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/triceps.png')} style={styles.image} />
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
      height:400,
      width:400,
    }
  }
)