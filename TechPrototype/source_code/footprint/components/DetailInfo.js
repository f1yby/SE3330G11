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
    VStack,
    Text,
    Center,
    AspectRatio,
    Stack,
    Icon,
    Pressable,
} from 'native-base';
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const DetailInfo = () => {
    const [liked, setliked] = React.useState(0);
    const [collected, setColleted] = React.useState(0);
    return <Box alignItems="center">
        <Box w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={4 / 3}>
              <Image source={{
              uri: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
            }} alt="image" />
            </AspectRatio>
            <Center bg="primary.300" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <HStack space={2}  justifyContent="space-between">
            <Stack space={2}>
              <Heading size="md" ml="-1" bold>
                发帖标题
              </Heading>
              <Text fontSize="xs" _light={{
              color: "primary.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                用户名称
              </Text>
            </Stack>
            <HStack space={4}>
                <Pressable
                // py="3"
                // flex={1}
                onPress={() => setliked(1)}>
                <Icon 
                    as={AntDesign}
                    mb="1"
                    name={liked === 0 ? 'hearto' : 'heart'}
                    size="xl"
                    color={liked === 0 ? "primary.400" : "red.400"}
                    size="sm"
                    mt="10%"
                    size="lg"
                />
                </Pressable>
                <Icon as={AntDesign} name="message1" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                 <Icon as={AntDesign} name="export" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                <Pressable
                onPress={() => setColleted(1)}>
                 <Icon as={AntDesign} 
                    name={collected === 0 ? "addfolder": "folder1"} size="lg" 
                    color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                </Pressable>
                </HStack>
            </HStack>
            <Text fontWeight="400">
              发布的文字内容，发布的文字内容，发布的文字内容，不超过30字，
              发布的文字内容，不超过30字，发布的文字内容，不超过30字
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.500" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  发布时间
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };

export default DetailInfo;