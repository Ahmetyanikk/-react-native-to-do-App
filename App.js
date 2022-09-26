/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component{

  render(){
    return(
      <View style={style.welcome_area}>
        <Text style={style.welcome_text}>Hello World</Text>
      </View>
      
    )
  }

}
const style = StyleSheet.create({
  welcome_area:{paddingTop:150,backgroundColor:'red'},
  welcome_text:{color:'white',fontsize:20}
});


