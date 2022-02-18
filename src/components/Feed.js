import {FlatList, View} from 'react-native';
import React from 'react';
import Separator from './Separator';
import CardItem from './CardItem';
import CardSuper from './CardSuper';

const usersData = [
  {
    title: 'Koala (Coala)',
    location: 'Australia',
    desc: 'This is a Description.',
    imageUri:
      'https://c.files.bbci.co.uk/C3A1/production/_123218005_gettyimages-a0034-000002.jpg',
    text: 'The koala or koala bear is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats.',
  },
  {
    title: 'Tiger',
    location: 'Indonesia',
    desc: 'This is a Description2.',
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Adult_male_Royal_Bengal_tiger.jpg/800px-Adult_male_Royal_Bengal_tiger.jpg',
    text: 'The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates such as deer and wild boar.',
  },
  {
    title: 'Dolphin',
    location: 'Ocean',
    desc: 'This is a Description3.',
    imageUri:
      'https://www.cmaquarium.org/app/uploads/2021/06/2021.04-Nick-Underwater-0001-1024x683.jpg',
    text: 'Dolphin is the common name of aquatic mammals within the infraorder Cetacea. The term dolphin usually refers to the extant families Delphinidae, Platanistidae, Iniidae, Pontoporiidae, and the extinct Lipotidae. There are 40 extant species named as dolphins.',
  },
  {
    title: 'Rattlesnake',
    location: 'Mexico',
    desc: 'This is a Description3.',
    imageUri:
      'https://assets.technologynetworks.com/production/dynamic/images/content/356401/rattlesnake-venom-protein-aids-development-of-blood-clotting-drug-356401-1280x720.jpg?cb=11529178',
    text: 'Rattlesnakes are the venomous snakes forming the genera Crotalus and Sistrurus of the subfamily Crotalinae. All rattlesnakes are vipers. The scientific name Crotalus is derived from the Greek κρόταλον, meaning "castanet".',
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={usersData}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => (
          <CardSuper>
            <CardItem {...item} />
          </CardSuper>
        )}
      />
    </View>
  );
};

export default Feed;

// const styles = StyleSheet.create({});
