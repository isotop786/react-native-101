import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Cat from './Component/Cat'
import Animal from './Component/Animal'
import Pizza from './Component/Input'
import Scroll from './Component/Scroll'
import Maruf from './Component/Maruf'
import FList from './Component/FList';
import SList from './Component/SectionList'
export default function App() {
  return (

   <ScrollView style={{padding:10}} >

     <Cat name="maruf"/>  
     <Cat name="karu"/>

     {/* <Animal type="cat" name="tommy"/>
     <Animal type="dog" name="ala"/> */}
     <Pizza/>

     <FList/>

     <SList/>
     {/* <Scroll/> */}
     
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
