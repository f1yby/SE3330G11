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
import {addPoints, askTraceByTrid, convertTracePoints2ArrJSON} from "../example/components/Position"

import {StyleSheet} from "react-native";
import Historycard from "../components/Historycard";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const bottom = 0.1 * h;
const trid = [380, 400, 560, 580];
const sid = 666058, tid = 519609448;

export default class extends React.Component {

    state = {
        points: []
    };
    // async componentDidMount()
    // {
    //     for (var i = 0; i < trid.length; i++) {
    //         askTraceByTrid(sid, tid, trid[i])
    //             .then(
    //             res => {
    //                 alter("成功!");
    //                 console.log('History 获取成功', res);
    //                 this.setState({points: [...points, convertTracePoints2ArrJSON(res.data.tracks[0].points)]});
    //             }
    //         )
    //             .catch(err => {
    //                 console.log('History 获取失败', result);
    //             }
    //         )
    //     }
    // }
    render() {

        return (

            <View style={{flex: 1}}>
                <Header_FootPrint/>
                <ScrollView width="100%" mt="0" mb={0.1 * h} height={h * 0.8}
                            _contentContainerStyle={{
                                mt: "1%",
                                mb: bottom,
                                mr: "0",
                                ml: "0",
                            }}>
                    <Flex direction="column" margin="auto" justifyContent="center">
                        {
                            trid.map((TRID) => {
                                return <Historycard id={TRID}/>
                            }
                        )
                        }
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
}
