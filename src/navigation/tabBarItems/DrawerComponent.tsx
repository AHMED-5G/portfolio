import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import { myColors } from "../../constants/myColors";

type Props = {};

const DrawerComponent = (props: Props) => {
  return (
    <View>
      <View style={styles.drawerItemContainer}>
        <View style={styles.drawerIconContainer}>
          <Feather name="edit" color="#45a9ff" size={29} />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>Post</Text>
        </View>
      </View>
      <View style={styles.drawerItemContainer}>
        <View style={styles.drawerIconContainer}>
          <Fontisto name="favorite" size={33} color="#54cfd8" />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>Favorites</Text>
        </View>
      </View>
      <View style={styles.drawerItemContainer}>
        <View style={styles.drawerIconContainer}>
          <FontAwesome5 name="user-friends" size={22} color="#229443" />
        </View>
        <View style={styles.drawerTextContainer}>
          <Text style={styles.drawerItemText}>Friends</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 10,
  },
  drawerIconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  drawerTextContainer: {
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  drawerItemText: {
    fontSize: 22,
    color: myColors.black,
    fontWeight: "600",
  },
  drawerItemIconStyle: {
    // fontSize: 32,
    // color: myColors.black,
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
    overflow: "hidden",
  },
});
