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

import {Dimensions, Platform} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";
import {MapView, Polyline} from "react-native-amap3d";
import {askTraceByTrid, convertTracePoints2ArrJSON} from "../example/components/Position"
import {AMapSdk, Marker} from "../lib/src";
import config from "../config";
import moment from "moment";
import MyMapView from "./MyMapView";

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
        points: [],
        initial_zoom_level: 17.5,
        initial_longitude: 31.020923,
        initial_latitude: 121.432887,
    }

    componentWillMount() {
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );
        console.log("componentDidMount:", this.props.id);
        this.date = moment(config.baseDate).add(this.props.trace.date, "days").format(config.dateFormat);
        this.location = this.props.trace.location;
        askTraceByTrid(sid, tid, this.props.id)
            .then(
                res => {
                    // alert("成功!");
                    console.log('History SUCCESS', res);
                    let newpoints = convertTracePoints2ArrJSON(res.data.tracks[0].points);
                    console.log('History SUCCESS2', newpoints);
                    this.setState({points: convertTracePoints2ArrJSON(res.data.tracks[0].points)});
                    // let latitude_min = 180, longitude_min = 180, latitude_max = 0, longitude_max = 0;
                    // for (var i = 0, l = newpoints.length; i < l; i++) {
                    //     latitude_min = Math.min(latitude_min, newpoints[i].latitude);
                    //     latitude_max = Math.max(latitude_max, newpoints[i].latitude);
                    //     longitude_min = Math.min(longitude_min, newpoints[i].longitude);
                    //     longitude_max = Math.max(longitude_max, newpoints[i].longitude);
                    // }
                    // this.initial_long = newpoints[0].latitude;
                    // this.initial_lati = newpoints[0].longitude;
                    // this.setState({
                    //     initial_latitude: (latitude_min + latitude_max) / 2.0,
                    //     initial_longitude: (longitude_min + longitude_max) / 2.0,
                    //     initial_zoom_level: 5
                    // });
                    // this.forceUpdate();
                }
            )
            .catch(err => {
                    console.log('History 获取失败', err);
                }
            )

    }
    render() {
        console.log("MYTEST location!:", this.props.id, this.state.initial_longitude, this.state.initial_latitude, this.state.initial_zoom_level);
        this.date = moment(config.baseDate).add(this.props.trace.date, "days").format(config.dateFormat);
        this.location = this.props.trace.location;
        return <PageSelectProvider.Consumer>
            {({Page, SelectPage, Props, SetProps}) =>
                (<Box width={0.95 * w} direction="column" margin={0.02 * w} height={0.4 * w}
                      onTouchEnd={
                          () => {
                              SetProps({points: this.state.points, })
                              SelectPage('mapDetailInfo');
                              console.log("go to mapdetail:", Props.points);
                          }
                }
                    >
                        <AspectRatio w="100%" ratio={{base: 25 / 9, md: 16 / 9}}>
                            {/*<MyMapView latitude={31.020923} longtitude={121.432887}*/}
                            {/*    zoom={10} points={this.state.points}/>*/}
                            <MapView
                                initialCameraPosition={{  // 初始化位置
                                    target: {
                                        latitude: 31.020923,
                                        longitude: 121.432887,
                                        // latitude: this.state.initial_latitude,
                                        // longitude: this.state.initial_longitude,
                                    },
                                    zoom: this.state.initial_zoom_level,
                                    // southwest: {
                                    //     latitude: 30.020923,
                                    //     longitude: 122.432887
                                    // },
                                    // northeast: {
                                    //     latitude: 32.020923,
                                    //     longitude: 120.432887
                                    // }

                                }}

                                // zoomControlsEnabled={false} // 放大缩小按钮
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
                                    position={this.state.points[this.state.points.length - 1]}
                                />
                            </MapView>
                        </AspectRatio>
                        <Text mt={0.02 * w} color="gray.400" bold size="xl">
                            {this.date} {this.location} 上海交通大学
                        </Text>
                    </Box>
                )}
        </PageSelectProvider.Consumer>
    }
}

export default Historycard;