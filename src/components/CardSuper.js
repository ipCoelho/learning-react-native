import {StyleSheet, View} from 'react-native';
import React from 'react';

const CardSuper = ({children}) => <View style={style.box}>{children}</View>;

export default CardSuper;

const style = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5,
    elevation: 20,
    shadowColor: 'black',
  },
});
