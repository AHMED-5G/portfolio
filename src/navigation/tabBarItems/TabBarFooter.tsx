import {
  DevSettings,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { myColors, theme, userConfiguration } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { InitialStateInterface } from "../../types";
import { SET_USER_CONFIGURATIONS } from "../../redux/reducers/dataSlice";

type Props = {};

const TabBarFooter = (props: Props) => {
  const [switchState, setSwitchState] = useState(true);
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  const useDispatch = useAppDispatch();
  return (
    <View
      style={{
        flexDirection: theme.localizationFlexDirection,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ToggleSwitch
          isOn={state.settings.userConfiguration?.nightMood ? true : false}
          onColor={myColors.sky}
          offColor="black"
          label={i18n.t("nightMood")}
          icon={<Entypo name="moon" size={24} color="black" />}
          labelStyle={styles.text}
          size="large"
          onToggle={(isOn) => {
            // setSwitchState(isOn);

            userConfiguration.nightMood = isOn;
            useDispatch(
              SET_USER_CONFIGURATIONS({
                ...state.settings.userConfiguration,
                nightMood: isOn,
              })
            );
            DevSettings.reload();
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: theme.localizationFlexDirection,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>{i18n.t("logOut")}</Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            disabled
            name="logout"
            size={40}
            color="black"
            style={{
              transform: [
                { rotateY: theme.localizationRtl ? "180deg" : "0deg" },
              ],
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TabBarFooter;

const styles = StyleSheet.create({
  text: { color: "black", fontWeight: "700", fontSize: 15 },
});
