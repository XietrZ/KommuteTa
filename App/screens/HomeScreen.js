import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "../stylesheets/HomeScreen.style";
import Map from "../components/Map";
import MainPanel from "../components/MainPanel";
import SelectPanel from "../components/SelectPanel";

const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Map />

      {/* Below View Container */}
      <View style={styles.belowContainerWrapper}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainPanel"
            component={MainPanel}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectPanel"
            component={SelectPanel}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default HomeScreen;
