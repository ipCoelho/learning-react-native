import React from 'react';
import {View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  separator: {
    width: '90%',
    height: 5,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 30,
  },
});

const Separator = () => <View style={style.separator} />;

export default Separator;
