import React from 'react';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import Monday from './Screen/Monday';
import Tuesday from './Screen/Tuesday';
import Wednesday from './Screen/Wednesday';
import Thursday from './Screen/Thursday';
import Friday from './Screen/Friday';
import Saturday from './Screen/Saturday';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends React.Component{

  constructor(props){
      super(props)
      this.state={}
  }

  render(){
      return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="FirstScreen" >
                      {({navigation})=><FirstScreen navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="SecondScreen">
                      {({navigation})=><SecondScreen navigation={navigation}/>}
                  </Stack.Screen> 
                  <Stack.Screen name="Monday">
                      {({navigation})=><Monday navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="Tuesday">
                      {({navigation})=><Tuesday navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="Wednesday">
                      {({navigation})=><Wednesday navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="Thursday">
                      {({navigation})=><Thursday navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="Friday">
                      {({navigation})=><Friday navigation={navigation}/>}
                  </Stack.Screen>
                  <Stack.Screen name="Saturday">
                      {({navigation})=><Saturday navigation={navigation}/>}
                  </Stack.Screen>
                  
              </Stack.Navigator>
          </NavigationContainer>
      );
  };
}

