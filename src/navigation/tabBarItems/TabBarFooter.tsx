import {
  Alert,
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
import {
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";
import { footerContentContainerHeight } from "../constants";

type Props = {};

const TabBarFooter = (props: Props) => {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  const useDispatch = useAppDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: wwrosw(10),
        marginTop: hwrosh(10),
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        height: footerContentContainerHeight,
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
          isOn={state.settings.userConfiguration?.darkTheme ? false : true}
          onColor={myColors.sky}
          offColor="black"
          label={i18n.t("darkTheme")}
          icon={<Entypo name="moon" size={circularRatio(24)} color="black" />}
          labelStyle={[styles.text, { color: theme.baseTextColor() }]}
          size="large"
          onToggle={(isOnn) => {
            useDispatch(
              SET_USER_CONFIGURATIONS({
                ...state.settings.userConfiguration,
                darkTheme: !isOnn,
              })
            );
            Alert.alert(i18n.t("alert"), i18n.t("restartApplication"));
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
            marginLeft: wwrosw(10),
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            disabled
            name="logout"
            size={circularRatio(40)}
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
  text: { color: "black", fontWeight: "700", fontSize: fontRatio(15) },
});
