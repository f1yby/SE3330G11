import React, {Component} from 'react';
import {Center, Box, Image, HStack, Spacer, Pressable} from 'native-base';
import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box
      // flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      height= "10%"
      mb="0"
      alignSelf="center"
      borderColor="gray.100"
      borderTopWidth="3"
      // bgColor="primary.600"
     >
      <Center flex={1} />
      <HStack alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          // cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}>
          <Center>
            {/*<Icon*/}
            {/*  mb="1"*/}
            {/*  as={*/}
            {/*    <MaterialCommunityIcons*/}
            {/*      name={selected === 0 ? 'home' : 'home-outline'}*/}
            {/*    />*/}
            {/*  }*/}
            {/*  color="white"*/}
            {/*  size="sm"*/}
            {/*/>*/}
            <Image
              mb="50%"
              source={
                selected === 0
                  ? require('../image/map.png')
                  : require('../image/map2.png')
              }
              size={w * 0.08}
              alt="map"
            />
          </Center>
        </Pressable>
        <Pressable
          // cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            {/*<Icon*/}
            {/*  mb="1"*/}
            {/*  as={<MaterialIcons name="search" />}*/}
            {/*  color="white"*/}
            {/*  size="sm"*/}
            {/*/>*/}
            <Image
              mb="50%"
              source={
                selected === 0
                  ? require('../image/shot.png')
                  : require('../image/shot2.png')
              }
              size={w * 0.08}
              alt="shot"
            />
          </Center>
        </Pressable>
        <Pressable
          // cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}>
          <Center>
            <Image
              mb="50%"
              source={
                selected === 0
                  ? require('../image/neighborhood.png')
                  : require('../image/neighborhood2.png')
              }
              size={w * 0.075}
              alt="neighborhood"
            />
          </Center>
        </Pressable>
        <Pressable
          // cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <Image
              mb="50%"
              source={
                selected === 0
                  ? require('../image/person.png')
                  : require('../image/person2.png')
              }
              size={w * 0.08}
              alt="person"
            />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
