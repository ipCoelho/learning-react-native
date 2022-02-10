import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
    width: 320,
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
});

const CardItem = ({obj: {title, desc, image, text}}) => {
  <View>
    <Text style={card.title}>{title}</Text>
    <Text style={card.desc}>{desc}</Text>
    <Image style={card.image} source={{uri: image}} />
    <Text style={card.text}>{text}</Text>
  </View>;
};

export default CardItem;
