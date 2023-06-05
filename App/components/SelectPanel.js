import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Input } from "@rneui/themed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";
import styles from "../stylesheets/SelectPanel.style";
import LineSeparator from "./LineSeparator";
import colors from "../constants/Colors";

const SelectPanel = ({ route }) => {
  const title = route.params.title;
  const navigation = useNavigation();
  const data = [{ id: 1 }];

  console.log('[SelectPanel.js] title === "Origin":  ', title == "Origin");
  console.log("GOOGLE_MAPS_API_KEY: ", GOOGLE_MAPS_API_KEY);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          // --> ADD DESIGN HERE
          <View>
            {/* ------------------------------------------------------------ */}
            {/* Select Header with Back button and refresh button */}
            <View style={styles.selectHeader}>
              {/* Back button */}
              <TouchableOpacity>
                <Icon
                  type="ionicon"
                  name="chevron-back"
                  containerStyle={styles.backButtonWrapper}
                  size={30}
                  color={colors.blue_grotto}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.titleWrapper}>Select {title}</Text>
              <TouchableOpacity style={styles.refreshButtonWrapper}>
                <Image
                  source={require("../assets/images/refreshIcon.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <LineSeparator marginTop={5} />
            {/* ------------------------------------------------------------ */}
            {/* Search Field */}
            <View style={styles.searchFieldWrapper}>
              {/* Search Icon */}
              <Icon
                type="font-awesome"
                name="search"
                style={{ marginTop: 10, marginLeft: 7 }}
                color={colors.blue_grotto}
              />

              {/* search input */}
              <GooglePlacesAutocomplete
                placeholder={title == "Origin" ? "Where From" : "Where To"}
                nearbyPlacesAPI="GooglePlaceSearch"
                debounce={400}
                minLength={2}
                query={{ key: GOOGLE_MAPS_API_KEY, language: "en" }}
                fetchDetails={true}
                returnKeyType={"search"}
                styles={{
                  textInput: {
                    backgroundColor: colors.blue_green,
                  },
                  poweredContainer: {
                    backgroundColor: colors.blue_green,
                  },
                  row: {
                    backgroundColor: colors.blue_green,
                  },
                  separator: {
                    height: 1,
                    backgroundColor: colors.blue_grotto,
                  },
                }}
              />
            </View>

            {/* ------------------------------------------------------------ */}
            {/* Options */}
            <View>
              {/* Pin Location Button */}
              <TouchableOpacity style={styles.pinLocationWrapper}>
                <Icon
                  type="ionicon"
                  name="location-sharp"
                  size={30}
                  color={colors.blue_grotto}
                />
                <Text style={{ marginLeft: 6, fontSize: 15 }}>
                  Pin Location
                </Text>
              </TouchableOpacity>

              {/* Current Location Button */}
              <TouchableOpacity style={styles.currentLocationWrapper}>
                <Icon
                  type="font-awesome-5"
                  name="location-arrow"
                  color={colors.blue_grotto}
                />
                <Text style={{ marginLeft: 12, fontSize: 15 }}>
                  Current Location
                </Text>
              </TouchableOpacity>
            </View>

            {/* ------------------------------------------------------------ */}
            {/* Select Address Button */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Button
                title="Select Address"
                titleStyle={{ fontSize: 12, fontWeight: "100" }}
                buttonStyle={{
                  borderRadius: 20,
                  width: 178,
                  marginTop: 42,
                  marginBottom: 34,
                  // height: 27,
                  backgroundColor: colors.blue_grotto,
                }}
                containerStyle={{}}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SelectPanel;
