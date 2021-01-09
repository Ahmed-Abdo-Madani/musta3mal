import { Platform } from "react-native";
import colors from "./Colors";

export default {
  text: {
    width: "100%",
    fontSize: 18,
    fontFamily:
      Platform.os === "android"
        ? "Roboto"
        : Platform.os === "ios"
        ? "Avenir"
        : "Arial",
    color: colors.darkGray,
  },
  colors,
};
