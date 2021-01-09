import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  FlatList,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DefaultStyles from "../config/DefaultStyles";
import AppText from "./AppText";
import AppPickerItem from "./AppPickerItem";
import Screen from "./Screen";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisable, setModalVisable] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const items = [
    { title: "office", value: "1" },
    { title: "home", value: "2" },
    { title: "weareable", value: "3" },
  ];

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon.name}
            size={icon.size || 20}
            color={icon.color || DefaultStyles.colors.darkGray}
          />
          <AppText
            text={selectedItem ? selectedItem.title : placeholder}
            style={[DefaultStyles.text, styles.text]}
            {...otherProps}
          />
          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={icon.size || 20}
            color={icon.color || DefaultStyles.colors.darkGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <AppPickerItem
                item={item}
                onPress={() => {
                  setSelectedItem(item);
                  setModalVisable(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: DefaultStyles.colors.meduimGray,
    borderRadius: 25,
  },
  icon: {
    marginRight: 7,
  },
  text: {
    flex: 1,
  },
});
