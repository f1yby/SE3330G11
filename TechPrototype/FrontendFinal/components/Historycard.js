import React, { Component } from 'react';
import {
  Box,
  Image,
  HStack,
  Heading,
  AspectRatio,
  Stack,
  Center,
  Text
} from 'native-base';

import { Dimensions } from 'react-native';
import { PageSelectProvider } from "../utils/SwitchPage";
import {MapView, Polyline} from "react-native-amap3d";
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Historycard = () => {
  return <PageSelectProvider.Consumer>
    {({ Page, SelectPage, Props }) => (<Box width={0.95 * w} direction="column" margin={0.02 * w} height={0.4 * w} onTouchEnd={() => {
      Props = {};
      SelectPage('detail');
    }}>
      <AspectRatio w="100%" ratio={{ base: 25 / 9, md: 16 / 9 }}>

        <MapView
            initialCameraPosition={{  // 初始化位置
              target: {
                latitude: 37.91095,
                longitude: 116.37296,
              },
              zoom: 10,  // 初始化大小等级
            }}
            zoomControlsEnabled={false}  // 放大缩小按钮
            scrollGesturesEnabled={false}
            compassEnabled={false}
            myLocationEnabled={false}
            myLocationButtonEnabled={false}
            rotateGesturesEnabled={false}
            tiltGesturesEnabled={false}
            scaleControlsEnabled={false}
        >
          {/*<Polyline width={5} color="rgba(255, 0, 0, 0.5)" points={line1} />*/}
        </MapView>
      </AspectRatio>
      <Text mt={0.02 * w} color="gray.400" bold size="xl">
        2022.4.16 上海交通大学
      </Text>
    </Box>
    )}
  </PageSelectProvider.Consumer>
}

export default Historycard;