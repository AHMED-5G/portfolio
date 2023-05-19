import {
  DevSettings,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { myColors, theme } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { InitialStateInterface } from "../../types";
import { SET_USER_CONFIGURATIONS } from "../../redux/reducers/dataSlice";

type Props = {};

const TabBarFooter = (props: Props) => {
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
          isOn={state.settings.userConfiguration?.darkMood ? false : true}
          onColor={myColors.sky}
          offColor="black"
          label={i18n.t("darkMood")}
          icon={<Entypo name="moon" size={24} color="black" />}
          labelStyle={[styles.text, { color: theme.baseTextColor() }]}
          size="large"
          onToggle={(isOnn) => {
            useDispatch(
              SET_USER_CONFIGURATIONS({
                ...state.settings.userConfiguration,
                darkMood: !isOnn,
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
          flexDirection: "row",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.text, { color: theme.baseTextColor() }]}>
            {i18n.t("logOut")}
          </Text>
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
            color={theme.iconColor()}
            style={{
              transform: theme.iconLocalizationTransform(),
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
