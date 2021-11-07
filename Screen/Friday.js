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
            <Text>The miracle isn't that I finished. The miracle is that I had the courage to start.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/back.png')} style={styles.image} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Biceps</Text>
            <Text>Take care of your body. Its the only place you have to live.</Text>
            <Text>____________________________________________________________</Text>
            <Image source={require('../assets/biceps.png')} style={styles.image} />
          </View>
          <View style={styles.screen}>
            <Text style={styles.textstyle}>Abs</Text>
            <Text>Fitness: if it came in a bottle, everybody would have a great body.</Text>
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