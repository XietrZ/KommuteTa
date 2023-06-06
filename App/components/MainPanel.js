import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { Icon, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import styles from "../stylesheets/MainPanel.style";
import LineSeparator from "./LineSeparator";
import colors from "../constants/Colors";

const MainPanel = () => {
  const mainData = [{ id: 1 }];
  const navigation = useNavigation();

  const showSelectPanel = ({ title }) => {
    console.log("[MainPanel.js] Show Select Panel: ", title);
    navigation.navigate("SelectPanel", { title });
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={mainData}
        // eslint-disable-next-line no-unused-vars
        renderItem={({ item }) => (
          // --> ADD DESIGN HERE
          <View>
            {/* ------------------------------------------------------------ */}
            {/* --> KommuteTa Title and Refresh Button */}
            <View style={styles.headerWrapper}>
              <Text style={styles.titleWrapper}>KommuteTa</Text>
              <TouchableOpacity style={styles.refreshButtonWrapper}>
                <Image
                  source={require("../assets/images/refreshIcon.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <LineSeparator marginTop={3} />
            <View style={{ marginBottom: 17 }} />

            {/* ------------------------------------------------------------ */}
            {/* -->  Circle, Origin, Destination, Arrow */}
            <View style={styles.circleOriginDestArrowWrapper}>
              {/* Circle Line */}
              <View style={styles.circleLineWrapper}>
                {/* Upper Circle */}
                <Icon
                  type="font-awesome"
                  name="circle"
                  color={colors.blue_green}
                  containerStyle={{ marginBottom: -3 }}
                />
                {/* Line */}
                <View
                  style={{
                    backgroundColor: colors.blue_green,
                    height: 31,
                    width: 2,
                  }}
                />
                {/* Lower Circle */}
                <Icon
                  type="font-awesome"
                  name="circle"
                  color={colors.white}
                  // backgroundColor={colors.circleBorder}
                  // borderRadius={15}
                  containerStyle={{ marginTop: -3 }}
                />
              </View>

              {/* Origin Dest */}
              <View style={styles.originDestWrapper}>
                {/* Origin */}
                <Button
                  title="Origin"
                  titleStyle={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "100",
                  }}
                  buttonStyle={{
                    borderRadius: 5,
                    backgroundColor: colors.blue_green,
                    marginBottom: 19,
                    fontSize: 12,
                    fontWeight: "100",
                  }}
                  onPress={() => showSelectPanel({ title: "Origin" })}
                />
                {/* Destination */}
                <Button
                  title="Destination"
                  titleStyle={{ color: "black", fontSize: 12 }}
                  buttonStyle={{
                    borderRadius: 5,
                    backgroundColor: colors.blue_green,
                  }}
                  onPress={() => showSelectPanel({ title: "Destination" })}
                />
              </View>

              {/* Arrow */}
              <View style={styles.arrowWrapper}>
                {/* Arrow Up */}
                <Icon
                  type="entypo"
                  name="arrow-up"
                  color={colors.blue_green}
                  containerStyle={{ marginTop: 15, marginLeft: -5 }}
                  size={30}
                />
                {/* Arrow Down */}
                <Icon
                  type="entypo"
                  name="arrow-down"
                  color={colors.blue_green}
                  containerStyle={{
                    marginTop: 35,
                    marginLeft: -15,
                    marginRight: -5,
                  }}
                  size={30}
                />
              </View>
            </View>

            {/* ------------------------------------------------------------ */}
            {/* -->  Find vehicle Route Button  and Clear Button */}
            <View style={styles.findVehicleRouteClearWrapper}>
              {/* Find vehicle Route Button */}
              <Button
                title="Find Vehicle Route"
                titleStyle={{ fontSize: 12, fontWeight: "100" }}
                buttonStyle={{
                  borderRadius: 20,
                  width: 177,
                  // height: 27,
                  backgroundColor: colors.blue_grotto,
                }}
                containerStyle={{}}
              />

              {/* Clear Button */}
              <TouchableOpacity style={{ paddingTop: 3, marginLeft: 6 }}>
                <Image
                  source={require("../assets/images/clearIcon.png")}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>

            {/* ------------------------------------------------------------ */}
            {/* -->  Result View Panel */}
            <View style={styles.resultViewPanelWrapper}>
              <Text>Please put origin and destination</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MainPanel;
