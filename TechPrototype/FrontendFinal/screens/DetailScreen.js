import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Box} from "native-base";
import DetailInfo from '../components/DetailInfo';
import DetailNavi from '../components/DetailNavi';
import Header_FootPrint from '../components/Header';
import Footer from '../components/Footer';
import {StyleSheet} from "react-native";

const DetailScreen=()=>{
    return(
        <Box>
            <Header_FootPrint />
                <DetailNavi/>
            <ScrollView style={{height:"74%"}}>
                <DetailInfo/>
            </ScrollView>
        </Box>
    );
}

export default DetailScreen;