import React from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import CardItem from './CardItem';

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

const App = () => (
  <ScrollView style={{padding: 20}}>
    <View>
      <FlatList data={usersData} renderItem={CardItem} />
    </View>
  </ScrollView>
);

export default App;
