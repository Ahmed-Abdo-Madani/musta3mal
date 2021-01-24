import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import Colors from "../config/Colors";

const UploadProgressBar = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress === 1 ? (
          <LottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        ) : (
          <Progress.Bar
            progress={progress}
            color={Colors.primary}
            width={200}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadProgressBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});
