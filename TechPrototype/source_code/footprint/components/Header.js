import React, {Component} from 'react';
import {
  Container,
  Box,
  Image,
  Flex,
  HStack,
  Spacer,
  Heading,
  NativeBaseProvider,
} from 'native-base';
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class Header_FootPrint extends Component {
  render() {
    return (
        <NativeBaseProvider>
      <Container height={h * 0.1} width="100%" borderColor="gray.100" borderBottomWidth="3">
        <HStack space={3} alignItems="center" justifyContent="space-between" mt="4%">
          <Image
            ml="5%"
            source={require('../image/protrait.jpeg')}
            alt="image"
            size={w * 0.1}
            resizeMode={'contain'}
            borderRadius="300px"
          />
          <Image
            ml="25%"
            source={require('../image/LogoC.png')}
            alt="image"
            size={w * 0.08}
            resizeMode={'contain'}
          />
          <Heading
            color="primary.400"
            bold
            ml="0"
            textAlign="left"
            width="40%"
            fontSize="30px"
          >
            足迹
          </Heading>
          <Image
            ml="5%"
            source={require('../image/bell.png')}
            alt="image"
            size={w * 0.1}
            resizeMode={'contain'}
            borderRadius={h * 0.03}
          />
        </HStack>
      </Container>
        </NativeBaseProvider>
    );
  }
}

export default Header_FootPrint;
