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

export default function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  ...otherProps
}) {
  const [modalVisable, setModalVisable] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon.name}
            size={icon.size || 20}
            color={icon.color || DefaultStyles.colors.placeholder}
          />
          <AppText
            text={selectedItem ? selectedItem.title : placeholder}
            style={
              selectedItem
                ? [DefaultStyles.text, styles.text]
                : [{ color: DefaultStyles.colors.placeholder }, styles.text]
            }
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
                  setModalVisable(false);
                  setSelectedItem(item);
                  onSelectItem(item);
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
