import { Keyboard, StyleSheet, View } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { theme } from "../constants/myColors";
import { width } from "../constants/Layout";
import BackComponent from "./MarketComponents/BackComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { SharedValue } from "react-native-reanimated";

type Props = {
  components?: ReactNode;
  sharedValue?: SharedValue<number>;
};

const CustomBottomTab = ({ components, sharedValue }: Props) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();

  return (
    <View
      style={{
        // backgroundColor: theme.tabBarBackground(),
        borderWidth: 0.4,
        borderColor: theme.borderColor,
        borderEndWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      }}
    >
      <View
        style={[
          styles.customBottomTab,
          {
            display: !keyboardStatus ? "flex" : "none",
            backgroundColor: theme.tabBarBackground(),
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: 0.15 * width,
            backgroundColor: theme.tabBarLeftSectionColor(),
            height: "100%",
            borderTopLeftRadius: theme.tabBarBorderRadius,
          }}
        >
          <BackComponent sharedValue={sharedValue} navigation={navigation} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            flex: 1,
          }}
        >
          {components}
        </View>
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  customBottomTab: {
    height: theme.tabBarHeight,
    borderTopLeftRadius: theme.tabBarBorderRadius,
    borderTopRightRadius: theme.tabBarBorderRadius,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width,
  },
});
