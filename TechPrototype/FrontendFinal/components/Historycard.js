import React, {Component} from 'react';
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

import {Dimensions} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";
import {MapView, Polyline} from "react-native-amap3d";
import {askTraceByTrid,convertTracePoints2ArrJSON} from "../example/components/Position"
import {Marker} from "../lib/src";
import config from "../config";
import moment from "moment";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const sid = 666058, tid = 519609448;
class Historycard extends Component {
    constructor(props) {
        super(props);
        // console.log("componentDidMount:", this.props.id);
    }
    date = "";
    location = "";
    state = {
        points: []
    }
    async componentDidMount() {
        console.log("componentDidMount:", this.props.id);
        this.date = moment(config.baseDate).add(this.props.trace.date,"days").format(config.dateFormat);
        this.location = this.props.trace.location;
        askTraceByTrid(sid, tid, this.props.id)
            .then(
                res => {
                    // alert("成功!");
                    console.log('History SUCCESS', res);
                    let newpoints=convertTracePoints2ArrJSON(res.data.tracks[0].points);
                    console.log('History SUCCESS2', newpoints);
                    this.setState({points: convertTracePoints2ArrJSON(res.data.tracks[0].points)});
                }
            )
            .catch(err => {
                    console.log('History 获取失败', result);
                }
            )

    }
    render() {
        console.log("MYTEST:", this.state.points);
        this.date = moment(config.baseDate).add(this.props.trace.date,"days").format(config.dateFormat);
        this.location = this.props.trace.location;
        //TODO: 修复bug 显示undefined
        return <PageSelectProvider.Consumer>
            {({Page, SelectPage, Props}) =>
                (<Box width={0.95 * w} direction="column" margin={0.02 * w} height={0.4 * w}
                      onTouchEnd={
                        () => {
                          Props.points = this.state.points;
                          SelectPage('mapDetailInfo');
                      }}>
                        <AspectRatio w="100%" ratio={{base: 25 / 9, md: 16 / 9}}>

                            <MapView
                                initialCameraPosition={{  // 初始化位置
                                    target: {
                                        latitude: 31.020923,
                                        longitude: 121.432887,
                                    },
                                    zoom: 17.5,
                                    // southwest: {
                                    //     latitude: 30.020923,
                                    //     longitude: 122.432887
                                    // },
                                    // northeast: {
                                    //     latitude: 32.020923,
                                    //     longitude: 120.432887
                                    // }

                                }}

                                zoomControlsEnabled={false} // 放大缩小按钮
                                scrollGesturesEnabled={false}
                                compassEnabled={false}
                                myLocationEnabled={false}
                                myLocationButtonEnabled={false}
                                rotateGesturesEnabled={false}
                                tiltGesturesEnabled={false}
                                scaleControlsEnabled={false}
                            >
                                <Polyline
                                    width={5}
                                    points={this.state.points}
                                    color="rgba(40,113,62,1)"
                                />
                                {/*<Polyline width={5} color="rgba(255, 0, 0, 0.5)" points={line1} />*/}
                                <Marker
                                    key={'start'}
                                    icon={require("../example/images/point.png")}
                                    position={this.state.points[0]}
                                />
                                <Marker
                                    key={'end'}
                                    icon={require("../example/images/point.png")}
                                    position={this.state.points[this.state.points.length-1]}
                                />
                            </MapView>
                        </AspectRatio>
                        <Text mt={0.02 * w} color="gray.400" bold size="xl">
                            {this.date}  {this.location}  上海交通大学
                        </Text>
                    </Box>
                )}
        </PageSelectProvider.Consumer>
    }
}

export default Historycard;