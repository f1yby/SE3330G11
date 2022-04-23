import React, {Component} from 'react';
import {
    Flex,
    ScrollView,
    View,
    Text,
    Divider,
    Box
} from 'native-base';

import {Dimensions} from 'react-native';
import HistoryCard from "../components/Historycard";
import Footer from '../components/Footer';
import Header_FootPrint from "../components/Header";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HistoryScreen = () => {
    const bottom = 0.1 * h;
    return (
        <>
            <View>
                <Header_FootPrint/>
                <ScrollView width="100%" mt="0" mb={0.1 * h} height={h * 0.8}
                            _contentContainerStyle={{
                                mt: "1%",
                                mb: bottom,
                                mr: "0",
                                ml: "0",
                            }}>
                    <Flex direction="column" margin="auto" justifyContent="center">
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                    </Flex>
                    <Divider/>
                    <Box textAlign="center" height={0.08 * h}>
                        <Text color="gray.300" size="xl" ml="30%">
                            没有更多啦！w(ﾟДﾟ)w
                        </Text>
                    </Box>
                </ScrollView>
            </View>
            <Footer>

            </Footer>
        </>);
}

export default HistoryScreen;
