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

import {StyleSheet, Button} from "react-native";
import Historycard from "../components/Historycard";

import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import MultiSelect from 'react-native-multiple-select';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const bottom = 0.1 * h;
const trid = [380, 400, 560, 580];
const sid = 666058, tid = 519609448;

// TODO: 将此处的uid修改为当前登录用户的uid
const uid = 1;


// select location data
const items = [{
    id: '92iijs7yta',
    name: 'Shanghai'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Zhejiang'
}, {
    id: '16hbajsabsd',
    name: 'Guangdong'
}, {
    id: 'nahs75a5sg',
    name: 'Beijing'
}, {
    id: '667atsas',
    name: 'Xiamen'
}, {
    id: 'hsyasajs',
    name: 'Xinjiang'
}, {
    id: 'djsjudksjd',
    name: '天津'
}, {
    id: 'sdhyaysdj',
    name: '西藏'
},
];

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: [],

            // date range select
            startDate: null,
            endDate: null,
            displayedDate: moment(),

            // location select
            selectedItems : [],
        };
    }


    // date range select
    setDates = (dates) => {
        this.setState({
            ...dates,
        });
    };

    // location select
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
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
        const { startDate, endDate, displayedDate, selectedItems } = this.state;
        console.log(startDate, endDate);
        return (
            <View style={{flex: 1}}>
                <Header_FootPrint/>
                <View >
                    <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Pick region"
                        searchInputPlaceholderText="Search location..."
                        onChangeInput={ (text)=> console.log(text)}
                        // altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="gray"
                        tagBorderColor="gray"
                        tagTextColor="gray"
                        selectedItemTextColor="gray"
                        selectedItemIconColor="gray"
                        itemTextColor="#000"
                        displayKey="name"
                        // TODO: 1. Tag 内容似乎只支持英文字母，不支持中文字符
                        //       2. 修改颜色

                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="gray"
                        submitButtonText="Submit"
                    />
                    <View >
                        {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                    </View>
                </View>

                <DateRangePicker
                    onChange={this.setDates}
                    endDate={endDate}
                    startDate={startDate}
                    displayedDate={displayedDate}
                    presetButtons={true}
                    range
                >
                    <View style={styles.button}>
                        <Text style={{color: 'gray'}}>Select date range</Text>
                    </View>
                </DateRangePicker>

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

                <Footer />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        alignItems: "center",
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 2.5,
        marginLeft:10,
        borderColor: 'gray',
        borderWidth:1,
        borderRadius:10,
        width:'35%',
        height:30,
        fontWeight: 'bold',
        fontSize:'15',
    },
});
