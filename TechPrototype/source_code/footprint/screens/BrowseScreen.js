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
    View,
  } from 'native-base';

import {Dimensions} from 'react-native';
import Footer from "../components/Footer";
import Header_FootPrint from "../components/Header";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BrowseScreen = () =>{
    return (
      <View>
        <Header_FootPrint />
          <ScrollView width="100%" height={0.8 * h}  mb={0.1 * h}
          _contentContainerStyle={{
              // px: "20px",
              mt: "1%",
              mb: "50px",
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
              <Divider />
              <Box textAlign="center" height={0.08 * h}>
                <Text color="gray.300" size="xl" ml="30%">
                  没有更多啦！w(ﾟДﾟ)w
                </Text>
              </Box>
          </ScrollView>

      </View>);
}

export default BrowseScreen;
