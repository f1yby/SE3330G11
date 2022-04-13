import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {MapView, AMapSdk} from 'react-native-amap3d';

export default class Map extends Component {
  render() {
    AMapSdk.init(
      Platform.select({
        android: '2b98dcea615041bc691ba73942fddc84',
        // ios: "186d3464209b74effa4d8391f441f14d",
      }),
    );
    return (
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        <MapView
          style={StyleSheet.absoluteFill}
          zoomLevel={18} //缩放级别
          tilt={45} //倾斜度
          showsIndoorMap
          // mapType="satellite"
          locationInterval={10000} //定位间隔(ms)，默认 2000
          distanceFilter={10} //定位的最小更新距离
          locationEnabled={true} //开启定位
          showslocationbutton={true}
          showsCompass={true}
          showsscale={true}
          showsTraffic={true}
          region={{
            latitude: 28.128570904591175,
            longitude: 113.00188102075148,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        />
      </View>
    );
  }
}
