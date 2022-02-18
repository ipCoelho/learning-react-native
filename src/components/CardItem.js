import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heart,
  bookmark,
  heartOutlined,
  bookmarkOutlined,
} from '../assets/vectors';
import TouchableIcon from './TouchableIcon';

const CardItem = ({title, location, imageUri, text}) => {
  const handleImageClick = text => console.log(text);

  // const [heartStatus, setHeartStatus] = useState(false);
  // const [bookmarkStatus, setBookmarkStatus] = useState(false);

  const [iconsState, setIconsState] = useState({heart: false, bookmark: false});

  // function handleIcon({icon, status}) {
  //   console.log(icon);
  //   toString(icon).includes('heart')
  //     ? setHeartStatus(status)
  //     : setBookmarkStatus(status);

  //   console.log(
  //     'heartStatus: ',
  //     heartStatus,
  //     ' | bookmarkStatus',
  //     bookmarkStatus,
  //   );
  // }

  // function handleHeartIcon(state) {
  //   console.log('heart: ', state);
  //   setIconsState({...iconsState, heart: state});
  // }

  // function handleBookmarkIcon(state) {
  //   console.log('bookmark: ', state);
  //   setIconsState({...iconsState, book: state});
  // }

  function handleIconState(icon, state) {
    // {icon: <nome>, state: <true|false>}
    const obj = {...iconsState};
    obj[icon] = state;
    setIconsState(obj);
  }

  return (
    <View style={card.padding}>
      <Text style={card.title}>{title}</Text>
      <Text style={card.desc}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageClick(title)}>
        <Image style={card.image} source={{uri: imageUri}} />
      </TouchableOpacity>
      {/* <Text>
        heart: {String(iconsState.heart)}, bookmark:{' '}
        {String(iconsState.bookmark)}
      </Text> */}
      <View style={card.flexRow}>
        <TouchableIcon
          style={card.gap}
          iconChecked={heart}
          iconUnchecked={heartOutlined}
          iconName="heart"
          onPress={state => handleIconState('heart', state)}
          iconState={iconsState.heart}
        />
        <TouchableIcon
          style={card.gap}
          iconChecked={bookmark}
          iconUnchecked={bookmarkOutlined}
          iconName="bookmark"
          onPress={state => handleIconState('bookmark', state)}
          iconState={iconsState.bookmark}
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
    marginBottom: 3,
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
  gap: {marginRight: 5, marginTop: 5},
});

export default CardItem;
