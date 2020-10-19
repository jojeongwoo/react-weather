import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
  <View style= {styles.container}>
    <StatusBar barStyle="dark-content" />git remote add origin https://github.com/jojeongwoo/react-weather.git
    <Text style= {styles.font}>Getting the great weather</Text>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FDF6AA',
  },

  font: {
    fontSize: 20,
    color: '#2c2c2c'
  }
});
