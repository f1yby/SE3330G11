import React, {Component} from 'react';
import {
  Box,
  Image,
  HStack,
  Heading,
  AspectRatio,
  Stack,
  Center,
  VStack,
  Icon,
  Text,
  Button,
  Flex,
  Pressable
} from 'native-base';

import AntDesign from "react-native-vector-icons/AntDesign"
import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const Profile=()=>{
    console.log(w);
    console.log(h);
    console.log(0.2 * w);
    return(
    <Box bg="cyan.400"  width="100%" height={0.4 * h} >
    <VStack space={2} >
        <HStack justifyContent="space-around" mt="20%" mr={0.1 * w} >
            <Image source={{
            uri: "http://www.gx8899.com/uploads/allimg/2018032308/t5sso3lhjgd.jpg"
            }} alt="Aang flying and surrounded by clouds" rounded="full" size={0.25 * w} maxW="144px" maxH="144px"/>
            <Box justifyContent="space-around">
                <VStack space={2} >
                    <Text color="white" fontSize="xl" bold>
                        用户名
                    </Text>
                    <Text fontSize="sm" color="white">
                        足迹账号：XXXXXX
                    </Text>
                </VStack>
            </Box>
            <Box >
            <Icon as={AntDesign} name="bells" size={w * 0.07} color="gray.500" _dark={{
                            color: "gray.700"
                        }} margin="auto" />
            </Box>
        </HStack>
         <HStack justifyContent="flex-start" mt={0.05 * w}>
            <HStack width={w * 0.4}  height={0.1 * w} flexDirection="row" ml={0.1 * w}>
                <VStack  width={w * 0.15} flexDirection="column" bold>
                    <Text size="md" color="white">
                        XX
                    </Text>
                    <Text size="md" color="gray.500" margin="auto" bold>
                        关注
                    </Text>
                </VStack>
                <VStack  width={w * 0.15} flexDirection="column" bold>
                    <Text size="md" color="white">
                        XX
                    </Text>
                    <Text size="md" color="gray.500" margin="auto" bold>
                        粉丝
                    </Text>
                </VStack>
                <VStack  width={w * 0.15} flexDirection="column" bold>
                    <Text size="md" color="white">
                        XX
                    </Text>
                    <Text size="md" color="gray.500" margin="auto" bold>
                        获赞与收藏
                    </Text>
                </VStack>
            </HStack>
            <Box width={0.3 * w} ml={0.15 *w}>
                <Button size="md" variant="subtle" margin="auto" borderRadius="full">
                    编辑资料
                </Button>
            </Box>
        </HStack>
    </VStack>
  </Box>
    );
}

export default Profile;