import React, { Component } from 'react';
import {
  Box,
  Image,
  HStack,
  Heading,
  AspectRatio,
  Stack,
  Center,
  Text
} from 'native-base';

import { Dimensions } from 'react-native';
import { PageSelectProvider } from "../utils/SwitchPage";
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Historycard = () => {
  return <PageSelectProvider.Consumer>
    {({ Page, SelectPage, Props }) => (<Box width={0.95 * w} direction="column" margin={0.02 * w} height={0.4 * w} onTouchEnd={() => {
      Props = {};
      SelectPage('detail');
    }}>
      <AspectRatio w="100%" ratio={{ base: 25 / 9, md: 16 / 9 }}>
        <Image source={{
          uri: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"
        }} alt="image" borderRadius="xl" />
      </AspectRatio>
      <Text mt={0.02 * w} color="gray.400" bold size="xl">
        2022.4.16 上海交通大学
      </Text>
    </Box>
    )}
  </PageSelectProvider.Consumer>
}

export default Historycard;