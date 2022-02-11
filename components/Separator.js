import React from 'react';
import {View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  separator: {
    width: '80%',
    height: '5',
    backgroundColor: '#444444',
    marginVertical: '5',
  },
});

const Separator = () => <View style={style.separator}> </View>;

export default Separator;
