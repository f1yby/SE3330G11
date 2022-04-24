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

import {MapView, MapType} from "react-native-amap3d";
import {StyleSheet} from "react-native";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HistoryScreen = () => {
    const bottom = 0.1 * h;
    return (

        <View style={{flex: 1}}>
            <Header_FootPrint/>
            {/*<MapView*/}
            {/*    style={{flex:1}}*/}
            {/*    distanceFilter={10}*/}
            {/*    headingFilter={30}*/}
            {/*    myLocationEnabled={true}*/}
            {/*    myLocationButtonEnabled={true}*/}
            {/*    region={{*/}
            {/*        longitude: 116.397428,*/}
            {/*        latitude: 39.90923,*/}
            {/*        latitudeDelta: 0.1,*/}
            {/*        longitudeDelta: 0.1,*/}
            {/*    }}*/}
            {/*>*/}
            {/*</MapView>*/}
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
                </Flex>
                <Divider/>
                <Box textAlign="center" height={0.08 * h}>
                    <Text color="gray.300" size="xl" ml="30%">
                        没有更多啦！w(ﾟДﾟ)w
                    </Text>
                </Box>
            </ScrollView>

            <Footer>

            </Footer>
        </View>

    );
}

export default HistoryScreen;
