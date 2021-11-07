import React from 'react';
import {  View,Text ,Button,Image,StyleSheet} from 'react-native';

export default class FirstScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.screen}>
        <Image source={require('../assets/index.png')} style={styles.image} />
        <Text style={styles.textstyle}>‘The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.’</Text>
        <Text>— Arnold Schwarzenegger, seven-time Mr. Olympia</Text>
        <View style={{marginTop:100,width:200,}}>
          <Button title="Lets Start  --->" color="green" onPress={()=> this.props.navigation.navigate('SecondScreen')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgreen'
  },
  image:{
    height:220,
    width:220,
    borderRadius:200
  },
  textstyle:{
    paddingTop:80,
    fontWeight:'bold',
    fontSize:15,
    color:'black'
  }
});

