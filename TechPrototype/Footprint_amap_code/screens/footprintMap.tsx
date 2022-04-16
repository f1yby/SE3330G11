import * as React from "react";
import {MapView, Marker, Polyline} from "react-native-amap3d";
import {
    Button,
    FlatList,
    ListRenderItemInfo,
    NativeSyntheticEvent,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {geolocationInit, getAddress, getCurrentPosition, getWalkingRoute, getDrivingRoute} from "../components/Position";
import {Geolocation} from "react-native-amap-geolocation";

export default class extends React.Component {

    state = {
        // TODO: 状态码: 字符串
        // normal 显示地图页面
        // planRoute  路径规划状态——可添加删去 Marker
        // planRouteShow  路径规划完成状态——显示规划完成的路径
        // footprintRecord  足迹记录状态——实时记录并显示用户足迹在页面上，并显示用户的打卡点
        // footprintShow  足迹显示状态——显示刚刚结束的足迹在页面上
        status: "normal",
        markersEditable: false,
        markers: [],
        planRoute: [],  // 所有有关规划的路径的数据
        planRoutePolyline: [],  // 用于绘制规划的路径的数据
        isRecordingFootprint: false,  // 记录此时有无录制足迹
        footprintData: [],
        logs: [],
        location: null,
        cityName: '北京市',
        address: '中国北京市',
    };
    watchId?: number | null;

    async componentDidMount() {
        console.log(this.state.markers);
        if (Platform.OS === "android") {
            const result = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]);
            console.log(result);
        }
        // 初始化高德 key
        geolocationInit();

    }

    sleep (time){
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }

    wait(){
        console.log("start sleep");
        this.sleep(1000);
        console.log("sleep finished");
    }

    // updateLocationState(location: Position | PositionError) {
    //     if (location) {
    //         this.setState({ location });
    //         console.log(location);
    //     }
    // }
    //
    // getCurrentPosition = () => {
    //     Geolocation.getCurrentPosition(
    //         (position) => this.updateLocationState(position),
    //         (error) => this.updateLocationState(error)
    //     );
    // };

    updateLocationOnce(){
        // // 每次调用定位功能都需要初始化高德 key
        geolocationInit();
        // 获取当前地理位置信息
        const pos = getCurrentPosition()
            .then(res => {
                // getAddress(res.coords?.longitude, res.coords?.latitude); // 获取经纬度,来获取周围位置
                if (res.coords?.latitude) {
                    this.setState({location: res});
                }
                console.log(this.state.location);
                const { city, address } = res?.location;
                this.setState({cityName: city, address: address});
            })
            .catch(err => {
                console.log('当前定位失败');
            });
    }

    // 注册一个监听，每隔一段时间返回当前地理位置
    watchPosition(watchId) {
        if (!watchId) {
            this.setState({footprintData: [],});
            return Geolocation.watchPosition(
                position => {
                    console.log('监听地理位置 ',position);
                    const footprintData = this.state.footprintData;
                    this.setState({footprintData: [...footprintData, position],});
                    console.log(this.state.footprintData);
                }
            );
        }
        else return watchId;
    };

    // 结束监听
    clearWatch(watchId) {
        if (watchId) {
            Geolocation.clearWatch(watchId);
            this.watchId = null;

            // show final footprint

            // upload footprint


        }
    };

    startRecordFootprint(){
        this.watchId = this.watchPosition(this.watchId);
    }

    finishRecordFootprint(){
        this.clearWatch(this.watchId);

        // this.setState({ location: null });
    }

    planDrivingRoute(){
        const markers = this.state.markers;
        if(markers.length < 1) {
            alert("Need 1 or more markers to plan route !");
            return;
        }
        if(markers.length > 16){
            alert("Only support 16 or less markers to plan driving route !");
            return;
        }
        const desPos = markers[markers.length-1];
        const oriPos = this.state.location;
        if(oriPos == null){
            alert("Can't locate your current pos, please check your GPS !");
            return;
        }

        // 生成途经点字符串
        let waypointsArr = markers.map((position) => (`${position.longitude},${position.latitude}`));
        waypointsArr.pop();  // 去除目的地
        let waypointsStr = waypointsArr.join(";");
        console.log(waypointsStr);

        // TODO: 让用户选择是否从自己当前位置开始
        console.log(desPos,oriPos);
        const pois = getDrivingRoute( oriPos.coords.longitude, oriPos.coords.latitude, desPos.longitude, desPos.latitude, waypointsStr)
            .then(res => {
                let planRoutePolyline = this.convertPolylineStr2ArrJSON(this.convertPlanRouteData2PolylineStr(res));  // 如若刚刚规划完路径，转换并绘制
                console.log('驾车路径规划 planRoutePolyline ', planRoutePolyline);
                this.setState({planRoute: res, planRoutePolyline: planRoutePolyline,});
            })
            .catch(err => {
                console.log('驾车路径规划失败');
            });
    }

    planWalkingRoute(){
        const markers = this.state.markers;
        if(markers.length < 1) {
            alert("Need 1 or more markers to plan route !");
            return;
        }
        const desPos = markers[0];
        const oriPos = this.state.location;
        if(oriPos == null){
            alert("Can't locate your current pos, please check your GPS !");
            return;
        }
        // TODO: 让用户选择是否从自己当前位置开始
        console.log(desPos,oriPos);
        const pois = getWalkingRoute( oriPos.coords.longitude, oriPos.coords.latitude, desPos.longitude, desPos.latitude)
            .then(res => {
                let planRoutePolyline = this.convertPolylineStr2ArrJSON(this.convertPlanRouteData2PolylineStr(res));  // 如若刚刚规划完路径，转换并绘制
                this.setState({planRoute: res, planRoutePolyline: planRoutePolyline,});
            })
            .catch(err => {
                console.log('步行路径规划失败');
            });
        let i = 1;
        for(; i < markers.length; ++i){
            const oriPos = markers[i - 1];
            const desPos = markers[i];
            console.log(desPos,oriPos);
            this.wait();
            const pois = getWalkingRoute( oriPos.longitude, oriPos.latitude, desPos.longitude, desPos.latitude)
                .then(res => {
                    let newPlanRoutePolyline = this.convertPolylineStr2ArrJSON(this.convertPlanRouteData2PolylineStr(res));  // 如若刚刚规划完路径，转换并绘制
                    const planRoute = this.state.planRoute;
                    const planRoutePolyline = this.state.planRoutePolyline;
                    this.setState({planRoute: [...planRoute, res], planRoutePolyline: [...planRoutePolyline, newPlanRoutePolyline],});
                    console.log(planRoutePolyline);
                })
                .catch(err => {
                    console.log('步行路径规划失败');
                });
        }

    }

    convertPlanRouteData2PolylineStr(res){
        return (res.route.paths[0].steps.map((step) => { return step.polyline})).join(";");
    }

    convertPolylineStr2ArrJSON(polylineStr:string){
        const arr0 = polylineStr.split(';');
        if(!arr0.length) return null;
        const len = arr0.length;
        let j = 0;
        let arr: any[][] = [];
        for(; j < len; ++j){
            arr.push(arr0[j].split(','));
        }
        let i = 0;
        let arrayJSON = [];
        for(; i < len; ++i){  // *1 convert string to num
            arrayJSON.push({"longitude":arr[i][0]*1,"latitude":arr[i][1]*1});
        }
        console.log(arrayJSON);  // arrayJSON 为所需
        return arrayJSON;
    }

    handleRecordFootprintBtnClicked(){
        const status = this.state.isRecordingFootprint;
        if(!status) {  // start footprint
            this.startRecordFootprint();
        } else {  // end footprint
            this.finishRecordFootprint();
        }
        this.setState({isRecordingFootprint: !status});
    }

    handlePlanRouteBtnClicked(){
        const status = this.state.markersEditable;
        if(!status) {alert("点击地图添加 Marker，点击 Marker 移除");}
        else {
            // this.planWalkingRoute();
            this.planDrivingRoute();
        }
        this.setState({markersEditable: !status});
    }

    handleMarkerModify(position: never){
        if(!this.state.markersEditable) return;
        const markers = this.state.markers;
        markers.splice(markers.indexOf(position), 1);
        this.setState({markers: [...markers]});
    }

    log(event: string, data: any) {
        console.log(data);
        if(event == "onLocation"){
            this.setState({
                location: data,
            });
        }
        this.setState({
            logs: [
                {
                    key: Date.now().toString(),
                    time: new Date().toLocaleString(),
                    event,
                    data: JSON.stringify(data, null, 2),
                },
                ...this.state.logs,
            ],
        });
    }

    logger(name: string) {
        return ({ nativeEvent }: NativeSyntheticEvent<any>) => this.log(name, nativeEvent);
    }

    renderItem = ({ item }: ListRenderItemInfo<any>) => (
        <Text style={style.logText}>
            {item.time} {item.event}: {item.data}
        </Text>
    );

    render() {
        const markers = this.state.markers;
        const footprintData = this.state.footprintData;
        const planRoutePolyline = this.state.planRoutePolyline;
        console.log(footprintData);
        const events = ["onLoad", "onPress", "onPressPoi", "onLongPress", "onCameraIdle", "onLocation"];
        const buttonPlanRouteText = this.state.markersEditable ? "Finish route" : "Plan Route";
        const buttonRecordFootprintText = this.state.isRecordingFootprint ? "End record Footprint" : "Start record Footprint";
        return (
            <View style={style.body}>
                <View style={style.button}>
                    <Button onPress={this.updateLocationOnce} title="updateLocationOnce" />
                </View>
                <View style={style.button}>
                    <Button title={buttonPlanRouteText} color={'red'} onPress={() => {this.handlePlanRouteBtnClicked()}}/>
                </View>
                <View style={style.button}>
                    <Button title={buttonRecordFootprintText} onPress={() => {this.handleRecordFootprintBtnClicked()}}/>
                </View>
                <MapView
                    style={style.body}
                    {...Object.fromEntries(events.map((i) => [i, this.logger(i)]))}
                    distanceFilter={10}
                    headingFilter={90}
                    myLocationEnabled={true}
                    myLocationButtonEnabled={true}
                    onPress={({ nativeEvent }) => {
                        if(this.state.markersEditable) this.setState({markers: [...markers, nativeEvent]});
                    }}
                >
                    <Polyline  // 记录的足迹
                        width={5}
                        color="rgba(255, 0, 0, 0.5)"
                        // onPress={() => alert("onPress")}
                        points={footprintData.map((position) => { return {latitude: position.coords.latitude, longitude: position.coords.longitude}})}
                        // gradient  // 渐变颜色
                    />
                    <Polyline  // 规划的路径
                        width={5}
                        points={planRoutePolyline}
                        color="rgba(40,113,62,1)"
                    />
                    {/*{planRoutePolyline.map((planRoute) => (*/}
                    {/*    <Polyline  // 规划的路径*/}
                    {/*        width={5}*/}
                    {/*        color="rgba(255, 0, 0, 0.5)"*/}
                    {/*        points={planRoute}*/}
                    {/*        // gradient  // 渐变颜色*/}
                    {/*    />*/}
                    {/*))}*/}
                    {markers.map((position) => (
                        <Marker
                            key={`${position.latitude},${position.longitude}`}
                            icon={require("../images/flag.png")}
                            position={position}
                            onPress={() => {this.handleMarkerModify(position)}}
                        />
                    ))}
                </MapView>
                <FlatList style={style.logs} data={this.state.logs} renderItem={this.renderItem} />
            </View>
        );
    }
};


const style = StyleSheet.create({
    body: { flex: 1 },
    logs: { elevation: 8, flex: 1 },
    logText: {
        fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    controls: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
        marginBottom: 16,
    },
    button: {
        flexDirection: "column",
        marginRight: 8,
        marginBottom: 8,
    },
    result: {
        fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
    },
});