import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const usersData = [
  {
    title: 'This is a Title.',
    desc: 'This is a Description.',
    image: {
      uri: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    },
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
  {
    title: 'This is a Title2.',
    desc: 'This is a Description2.',
    image: {
      uri: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    },
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
];

const Card = ({item}) => {
  <View>
    <Text style={card.title}>{item.title}</Text>
    <Text style={card.desc}>{item.desc}</Text>
    <Image style={card.image} source={{uri: item.image.uri}} />
    <Text style={card.text}>{item.text}</Text>
  </View>;
};
const App = () => (
  <ScrollView style={card.padding}>
    <View>
      <FlatList data={usersData} renderItem={Card} />
    </View>
  </ScrollView>
);

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

export default App;
