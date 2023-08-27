import {
  Alert,
  DevSettings,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { myColors, theme } from "../../constants";
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
// import MyText from "../../components/MyText";
import { useFonts } from "expo-font";
import {
  IBMPlexSansArabicRegular,
  IBMPlexSansArabicMedium,
  IBMPlexSansArabicBold,
} from "../../../assets/fonts";
import LoadingIndicator from "../../components/mini/LoadingIndicator";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TabBarFooter = () => {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice,
  );

  const useDispatch = useAppDispatch();

  const [fontsLoaded] = useFonts({
    IBMPlexSansArabicRegular: IBMPlexSansArabicRegular,
    IBMPlexSansArabicMedium: IBMPlexSansArabicMedium,
    IBMPlexSansArabicBold: IBMPlexSansArabicBold,
  });

  const navigation = useNavigation();

  if (!fontsLoaded) return <LoadingIndicator />;
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
          onColor={"black"}
          offColor={myColors.sky}
          label={i18n.t("darkTheme")}
          icon={<Entypo name="moon" size={circularRatio(24)} color="black" />}
          labelStyle={[
            styles.text,
            {
              color: theme.baseTextColor(),
              fontFamily: "IBMPlexSansArabicMedium",
            },
          ]}
          size="large"
          onToggle={(isOnn) => {
            useDispatch(
              SET_USER_CONFIGURATIONS({
                ...state.settings.userConfiguration,
                darkTheme: !isOnn,
              }),
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
          borderWidth: 0.4,
          borderColor: theme.borderColor,
          width: wwrosw(100),
          height: hwrosh(60),
          borderRadius: theme.borderRadius,
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.text,
              { fontSize: fontRatio(15), color: theme.baseTextColor() },
            ]}
          >
            {i18n.t("logIn")}
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
          {/* {true ? (
            <MaterialCommunityIcons
              disabled
              name="logout"
              size={circularRatio(40)}
              color={theme.iconColor()}
              style={{
                transform: theme.iconLocalizationTransform(),
              }}
            />
          ) : ( */}
          <MaterialCommunityIcons
            name="login"
            disabled
            size={circularRatio(40)}
            color={theme.iconColor()}
            style={{
              transform: theme.iconLocalizationTransform(),
            }}
          />
          {/* )} */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TabBarFooter;

const styles = StyleSheet.create({
  text: { color: "black", fontWeight: "700" },
});
