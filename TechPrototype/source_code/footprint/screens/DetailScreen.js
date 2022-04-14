import React, {Component} from 'react';
import {Box} from "native-base";
import DetailInfo from '../components/DetailInfo';
import DetailNavi from '../components/DetailNavi';

const DetailScreen=()=>{
    return(
        <Box>
            <DetailNavi/>
            <DetailInfo/>
        </Box>
    );
}

export default DetailScreen;