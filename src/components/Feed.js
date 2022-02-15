import {FlatList, View} from 'react-native';
import React from 'react';
import Separator from './Separator';
import CardItem from './CardItem';

const usersData = [
  {
    title: 'Que lugar mais lindo!',
    location: 'Osasco',
    desc: 'This is a Description.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
  {
    title: 'Que lugar mais lindo!',
    location: 'Itapevi',
    desc: 'This is a Description2.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
  {
    title: 'Que lugar mais lindo!',
    location: 'Barueri',
    desc: 'This is a Description3.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={usersData}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => CardItem({...item})}
      />
    </View>
  );
};

export default Feed;

// const styles = StyleSheet.create({});
