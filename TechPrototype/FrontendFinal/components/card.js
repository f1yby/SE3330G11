import React, { Component } from 'react';
import {
    Box, Image, HStack, Heading, AspectRatio, Stack, Center
} from 'native-base';

import { Dimensions } from 'react-native';
import { PageSelectProvider } from "../utils/SwitchPage";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Card = (props) => {
    return <PageSelectProvider.Consumer>
        {({ Page, SelectPage, Props }) => (<Box alignItems="center" margin={w * 0.01} onTouchEnd={() => {
            Props = {};
            SelectPage('detail');
        }}>
            <Box width={w * 0.45} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600", backgroundColor: "gray.700"
            }} _web={{
                shadow: 2, borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={{ base: 3 / 4, md: 16 / 9 }}>
                        <Image source={{
                            uri: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"
                        }} alt="image" />
                    </AspectRatio>
                </Box>
            </Box>
        </Box>)}
    </PageSelectProvider.Consumer>;
};

export default Card;
