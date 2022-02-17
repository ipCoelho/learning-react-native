import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {heart, heart_o, bookmark, bookmark_o} from '../assets/vectors';
import TouchableIcon from './TouchableIcon';

const CardItem = ({title, location, imageUri, text}) => {
  const handleImageClick = text => console.log(text);

  const [iconStatus, setIconStatus] = useState(false);

  function handleIcon(checked, icon) {
    console.log(iconStatus);
    // iconStatus = checked;
    setIconStatus(iconStatus === checked);
  }

  return (
    <View style={card.padding}>
      <Text style={card.title}>{title}</Text>
      <Text style={card.desc}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageClick(title)}>
        <Image style={card.image} source={{uri: imageUri}} />
      </TouchableOpacity>
      <Text></Text>
      <View style={card.flexRow}>
        <TouchableIcon
          style={card.gap}
          iconChecked={heart}
          iconUnchecked={heart_o}
          onPress={handleIcon}
          iconState={iconStatus}
        />
        <TouchableIcon
          style={card.gap}
          iconChecked={bookmark}
          iconUnchecked={bookmark_o}
          onPress={handleIcon}
          iconState={iconStatus}
        />
      </View>
      <Text style={card.text}>{text}</Text>
    </View>
  );
};

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

export default CardItem;
