import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {heart, heart_o, bookmark, bookmark_o} from '../assets/vectors';
import TouchableIcon from './TouchableIcon';

const card = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  desc: {
    color: 'grey',
    marginTop: -2,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 3,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 20,
    marginTop: 5,
    marginStart: 5,
    marginEnd: 5,
  },
  padding: {padding: 20},
  flexRow: {flexDirection: 'row'},
  gap: {marginRight: 5},
});

const handleImageClick = text => console.log(text);

const CardItem = ({title, location, imageUri, text}) => {
  return (
    <View style={card.padding}>
      <Text style={card.title}>{title}</Text>
      <Text style={card.desc}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageClick(title)}>
        <Image style={card.image} source={{uri: imageUri}} />
      </TouchableOpacity>
      <View style={card.flexRow}>
        <TouchableIcon
          style={card.gap}
          iconChecked={heart_o}
          iconUnchecked={heart}
        />
        <TouchableIcon
          style={card.gap}
          iconChecked={bookmark_o}
          iconUnchecked={bookmark}
        />
      </View>
      <Text style={card.text}>{text}</Text>
    </View>
  );
};

export default CardItem;
