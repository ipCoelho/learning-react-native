import React from 'react';
import {FlatList, View, Text, TouchableOpacityBase} from 'react-native';
import CardItem from './components/CardItem';
// import Icons from 'react-native-vector-icons/FontAwesome';

const usersData = [
  {
    title: 'This is a Title.',
    desc: 'This is a Description.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
  {
    title: 'This is a Title2.',
    desc: 'This is a Description2.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
  {
    title: 'This is a Title3.',
    desc: 'This is a Description3.',
    imageUri:
      'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
    text: "This is a very long text, very very long, so long that's not even possible to describe with words how insanity big this is, and it even has multiple lines, as you can see, very long indeed.",
  },
];

const App = () => (
  <View style={{backgroundColor: '#999999'}}>
    <Text>Hello World</Text>
    <FlatList
      data={usersData}
      // renderItem={({item}) => CardItem{{...item}}}
      renderItem={({item}) => {
        <CardItem
          title={item.title}
          desc={item.desc}
          imageUri={item.imageUri}
          text={item.text}
        />;
      }}
    />
  </View>
);

export default App;

// SafeAreaView = Component to safely add components without having the issue of
// TouchableOpacity =

// <TouchableOpacity OnPress=() => funcaoASerExecutada(params)>
//    <Components ...></Components>
// </TouchableOpacity>

// useState(false);
