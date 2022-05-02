//点击历史足迹中的地图进入的详细信息界面
import React, {Component} from 'react';
import {
    Container,
    Box,
    Image,
    Flex,
    HStack,
    Spacer,
    Heading,
    NativeBaseProvider,
    VStack,
    Text,
    Center,
    AspectRatio,
    Stack,
    Icon,
    Pressable,
} from 'native-base';
import {
    Dimensions,
    ImageBackground, Platform,
    TouchableOpacity,
    View,
} from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"
import {MapView, Polyline} from "react-native-amap3d";
import {AMapSdk} from "../lib/src";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const line1 = [
    {latitude: 40.006901, longitude: 116.097972},
    {latitude: 41.006901, longitude: 116.597972},
];

const line2 = [
    {latitude: 39.906901, longitude: 116.097972},
    {latitude: 39.906901, longitude: 116.597972},
];

const line3 = [
    {latitude: 39.806901, longitude: 116.097972},
    {latitude: 32.806901, longitude: 116.257972},
    {latitude: 33.806901, longitude: 116.457972},
    {latitude: 39.806901, longitude: 116.597972},
];


const MapDetailInfo = () => {

    const [liked, setliked] = React.useState(0);
    const [collected, setColleted] = React.useState(0);

    React.useEffect(() => {
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );
    }, []);

    return <Box alignItems="center" h={h * 1.3}>
        <Box width="100%" overflow="hidden"
            //   _dark={{
            //   borderColor: "coolGray.600",
            //   backgroundColor: "gray.700"
            // }} _web={{
            //   shadow: 2,
            //   borderWidth: 0
            // }} _light={{
            //   backgroundColor: "gray.50"
            // }}
        >
            <Stack p="5%" space={3} height={0.85 * h}>
                {/*<HStack alignItems="center" space={4} justifyContent="space-between">*/}
                {/*    <HStack alignItems="center">*/}
                {/*        <Text color="coolGray.500" _dark={{*/}
                {/*            color: "warmGray.200"*/}
                {/*        }} fontWeight="400">*/}
                {/*            发布时间*/}
                {/*        </Text>*/}
                {/*    </HStack>*/}
                {/*</HStack>*/}
                <MapView
                    initialCameraPosition={{  // 初始化位置
                        target: {
                            latitude: 31.020923,
                            longitude: 121.432887,
                        },
                        zoom: 17.5,  // 初始化大小等级
                    }}
                    // zoomControlsEnabled={false}  // 放大缩小按钮
                    // minZoom={}  // 所允许调整的最大最小 放大缩小zoom级别
                    scrollGesturesEnabled={false}
                    style={{height: "65%"}}

                >
                    <Polyline width={5} color="rgba(255, 0, 0, 0.5)" points={line1}/>
                    <Polyline width={5} points={line2} dotted/>
                    <Polyline
                        width={5}
                        colors={["#f44336", "#2196f3", "#4caf50"]}
                        onPress={() => alert("onPress")}
                        points={line3}
                        gradient
                    />
                </MapView>
            </Stack>
        </Box>
    </Box>;
};

export default MapDetailInfo;