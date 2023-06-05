import { StyleSheet } from "react-native";
import colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.baby_blue,
    flex: 1,
  },

  headerWrapper: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    // backgroundColor: "red",
    textAlign: "center",
    marginLeft: 13.5,
    fontSize: 20,
    flex: 1,
  },

  refreshButtonWrapper: {
    paddingRight: 13.5,
    marginTop: 6.5,
    // backgroundColor: "blue",
    // flex: 1,
    // justifyContent: "flex-end",
  },

  circleOriginDestArrowWrapper: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginHorizontal: 16,
  },

  circleLineWrapper: {
    // backgroundColor: "green",
    // flexDirection: "row",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  originDestWrapper: {
    marginHorizontal: 8,
    flex: 1,
    // backgroundColor: "cyan",
  },
  arrowWrapper: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    marginLeft: -5,
    marginRight: -3,
  },

  findVehicleRouteClearWrapper: {
    marginLeft: 18,
    marginTop: 11,
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  resultViewPanelWrapper: {
    backgroundColor: colors.blue_green,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 100,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
