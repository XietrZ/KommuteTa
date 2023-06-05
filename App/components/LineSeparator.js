import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../constants/Colors";

const LineSeparator = ({ marginTop }) => {
  const mt = marginTop;
  const styles = StyleSheet.create({
    separator: {
      marginTop: mt,
      backgroundColor: colors.navy_blue,
      height: 2,
    },
  });
  return <View style={styles.separator} />;
};
export default LineSeparator;
