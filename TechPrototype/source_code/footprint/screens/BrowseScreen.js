import Card from "../components/card";
import React, {Component} from 'react';
import {
    Container,
    Box,
    Image,
    Flex,
    Text,
    ScrollView,
    Stack,
    Divider,
    Center,
  } from 'native-base';

import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BrowseScreen = () =>{
    return (
    <ScrollView width="100%" mt={h * 0.10}
    _contentContainerStyle={{
        // px: "20px",
        mt: "1%",
        mb: "4",
        mr:"0",
        ml:"0",
      }}>
        <Flex direction="row"  margin="1%" flexWrap="wrap" justifyContent="space-around">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Flex>
        {/* <Divider /> */}
          {/* <Center  margin="auto" height="5%">
            <Text color="gray.300" size="xl">
              没有更多啦！w(ﾟДﾟ)w
            </Text>
          </Center> */}
    </ScrollView>);
}

export default BrowseScreen;