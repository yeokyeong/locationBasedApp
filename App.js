import React, {useState, useEffect} from 'react';
import {Platform, ScrollView, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import ListView from './Component/ListView';
import MapComponent from './Component/MapComponent';
import database from '@react-native-firebase/database';
database()
  .ref('/users/123')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
const App = () => {
  const [region, setRegion] = useState({
    latitude: 33.506006,
    longitude: 126.49328,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  });
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    console.log(111, 'useEffect');
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        });
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    //tracking location
    let _watchId = Geolocation.watchPosition(
      position => {
        console.log(
          111,
          'position',
          position.coords.latitude,
          position.coords.longitude,
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    return () => {
      console.log(111, 'component did mount');
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  });

  return (
    // <View style={{flex: 1}}>
    //   <MapView
    //     showsUserLocation
    //     style={{flex: 1}}
    //     region={region}
    //     onRegionChangeComplete={region => setRegion(region)}>
    //     <Marker
    //       coordinate={{latitude: region.latitude, longitude: region.longitude}}
    //       pinColor="red"
    //     />
    //   </MapView>
    // </View>
    <ScrollView>
      <ListView />
    </ScrollView>
  );
};

export default App;
