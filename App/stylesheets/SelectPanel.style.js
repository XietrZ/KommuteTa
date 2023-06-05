import { StyleSheet } from "react-native";
import colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.baby_blue,
    flex: 1,
  },

  selectHeader: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  titleWrapper: {
    // backgroundColor: "red",
    textAlign: "center",
    marginLeft: -10.5,
    fontSize: 20,
    flex: 1,
  },

  backButtonWrapper: {
    // backgroundColor: "orange",
    // padd: 13.5,
    resizeMode: "contain",
    // marginLeft: -5,
    // width: 50,
    // paddingRight: -30,
  },
  refreshButtonWrapper: {
    // backgroundColor: "blue",
    paddingRight: 13.5,
    // marginTop: 6.5,
  },

  searchFieldWrapper: {
    // backgroundColor: "brown",
    backgroundColor: colors.blue_green,
    marginHorizontal: 15,
    flexDirection: "row",
    // borderRadius: 5,
    marginTop: 25,
  },

  pinLocationWrapper: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 40,
    alignItems: "center",
  },

  currentLocationWrapper: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 40,
    alignItems: "center",
  },
});

export default styles;
