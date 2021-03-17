import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 33.506006,
    longitude: 126.49328,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  });

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}>
      <Marker
        coordinate={{latitude: 33.506006, longitude: 126.49328}}
        pinColor="green"
      />
    </MapView>
  );
};

export default App;
