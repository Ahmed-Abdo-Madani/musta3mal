import React from "react";
import LottieViewer from "lottie-react-native";

export default function ActivityIndicator({ visable = false }) {
  if (!visable) return null;
  return (
    <LottieViewer
      loop
      autoPlay
      source={require("../assets/animations/loader.json")}
    />
  );
}
