import React, { useState } from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../stylesheets/Map.style";

const Map = () => {
  const [origin, setOrigin] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapWrapper}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin != null ? origin.location.lat : 11.5628579,
          longitude: origin != null ? origin.location.lng : 124.3965285,
          latitudeDelta: 0.00722, // 0.0922
          longitudeDelta: 0.00221, // 0.0421
        }}
      />
    </View>
  );
};

export default Map;
