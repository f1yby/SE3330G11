import React, {Component} from 'react';
import {
    Box,
    Image,
    AspectRatio,
    Stack,
    Center,
    VStack,
    Icon,
    Text,
    Button,
    View,
    Flex,
    Pressable,
    Container,
    ScrollView,
    Divider
} from 'native-base';
import {Dimensions} from 'react-native';
import Footer from '../components/Footer'
import Profile from '../components/Profile';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Picdisplay = () => {
    return (<Box width={0.94 * w} direction="column" margin={0.01 * w}>
        <AspectRatio w="100%" ratio={{base: 16 / 9, md: 16 / 9}}>
            <Image source={{
                uri: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"
            }} alt="image" borderRadius="xl"/>
        </AspectRatio>
        <Text mt={0.01 * w} color="gray.500" bold>
            日期
        </Text>
        <Text mt={0.01 * w} color="gray.500" bold>
            地点
        </Text>
    </Box>);
}

const PersonalScreen = () => {
    const bottom = 0.1 * h;
    return (<>
        <View>
            <Profile/>
            <ScrollView width="100%" mb={0.1 * h} height={h * 0.5}
                        _contentContainerStyle={{
                            mt: "1%", mb: bottom, mr: "0", ml: "0",
                        }}>
                <Flex direction="column" margin="2%" justifyContent="center">
                    <Center>
                        <Button variant="subtle" width="80%" colorScheme="primary" borderRadius="full" _text={{
                            color: "coolGray.500"
                        }}>
                            点击查看我的足迹历史
                        </Button>
                    </Center>
                    <Picdisplay/>
                    <Picdisplay/>
                    <Picdisplay/>
                    <Picdisplay/>
                </Flex>
            </ScrollView>
            {/* <Footer/> */}
        </View>
        <Footer/>
    </>);

}

export default PersonalScreen;
