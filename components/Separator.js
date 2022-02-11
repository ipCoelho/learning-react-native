import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  separator: {
    width: '80%',
    height: '5',
    backgroundColor: '#444444',
  },
});

const Separator = ({title, desc, imageUri, text}) => (
  <View style={style.separator}> </View>
);

export default Separator;
