import React, {Component} from 'react';
import {Box} from "native-base";
import DetailInfo from '../components/DetailInfo';
import DetailNavi from '../components/DetailNavi';
import Header_FootPrint from '../components/Header';
import Footer from '../components/Footer';

const DetailScreen=()=>{
    return(
        <Box>
            <Header_FootPrint />
                <DetailNavi/>
                <DetailInfo/>
        </Box>
    );
}

export default DetailScreen;