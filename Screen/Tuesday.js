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
            <Text style={styles.textstyle}>Back</Text>
            <Text>I spend about 75% of my time at the gym finding the right song for my workout.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/back.png')} style={styles.image} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Biceps</Text>
            <Text>Winners find a way, losers find an excuse.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/biceps.png')} style={styles.image} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Abs</Text>
            <Text> The secret of getting ahead is getting started.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/abs.png')} style={{height:550,width:390}} />
            
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