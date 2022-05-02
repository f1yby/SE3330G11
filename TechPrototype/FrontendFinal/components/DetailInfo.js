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
    { latitude: 40.006901, longitude: 116.097972 },
    { latitude: 41.006901, longitude: 116.597972 },
];

const line2 = [
    { latitude: 39.906901, longitude: 116.097972 },
    { latitude: 39.906901, longitude: 116.597972 },
];

const line3 = [
    { latitude: 39.806901, longitude: 116.097972 },
    { latitude: 32.806901, longitude: 116.257972 },
    { latitude: 33.806901, longitude: 116.457972 },
    { latitude: 39.806901, longitude: 116.597972 },
];




const DetailInfo = () => {

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
        <Box width="100%"  overflow="hidden"
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
          <Box width="100%" >
            <AspectRatio width="100%" height={0.41 * h} justifyContent="center" >
              <Image source={{
              uri: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
            }} alt="image" 
            resizeMode="cover"/>
            </AspectRatio>
            <Center bg="primary.300" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack  p="5%"  space={3} height={0.85 * h}>
            <HStack space={2}  justifyContent="space-between">
            <Stack space={2}>
              <Heading size="md" ml="-1" bold>
                发帖标题
              </Heading>
              <Text fontSize="xs" _light={{
              color: "primary.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                用户名称
              </Text>
            </Stack>
            <HStack space={4}>
                <Pressable
                // py="3"
                // flex={1}
                onPress={() => setliked(1)}>
                <Icon 
                    as={AntDesign}
                    mb="1"
                    name={liked === 0 ? 'hearto' : 'heart'}
                    size="xl"
                    color={liked === 0 ? "primary.400" : "red.400"}
                    size="sm"
                    mt="10%"
                    size="lg"
                />
                </Pressable>
                <Icon as={AntDesign} name="message1" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                 <Icon as={AntDesign} name="export" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                <Pressable
                onPress={() => setColleted(1)}>
                 <Icon as={AntDesign} 
                    name={collected === 0 ? "addfolder": "folder1"} size="lg" 
                    color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                </Pressable>
                </HStack>
            </HStack>
            <Text fontWeight="400">
              发布的文字内容，发布的文字内容，发布的文字内容，不超过30字，
              发布的文字内容，不超过30字，发布的文字内容，不超过30字，发布的文字内容，不超过30字，
                发布的文字内容，不超过30字。
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.500" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  发布时间
                </Text>
              </HStack>
            </HStack>
              {/*<HStack alignItems="center" space={4} justifyContent="space-between">*/}
              {/*    <HStack alignItems="center">*/}
              {/*        <Text color="coolGray.500" _dark={{*/}
              {/*            color: "warmGray.200"*/}
              {/*        }} fontWeight="600" fontSize="16">*/}
              {/*            足迹*/}
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
                  style={{height:"65%"}}

              >
                  <Polyline width={5} color="rgba(255, 0, 0, 0.5)" points={line1} />
                  <Polyline width={5} points={line2} dotted />
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

export default DetailInfo;