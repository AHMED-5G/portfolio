import { StyleSheet, View, Text, DevSettings } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";
import MedButton from "../components/mini/MedButton";
import { width } from "../constants/Layout";
import { myColors } from "../constants/myColors";
import { i18n, loadLocale } from "../translation/i18n";

function SettingsScreen({ navigation }: RootTabScreenProps<"Settings">) {
  const restartApp = () => {
    DevSettings.reload();
  };
  const handelChangeLanguage = (lang: "ar" | "en") => {
    loadLocale(lang)
    restartApp();
  };
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          justifyContent: "center",
          height: 40,
          width: width,
          backgroundColor: myColors.grey5,
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {i18n.t("SelectLanguage")}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <View style={{ margin: 5 }}>
          <MedButton
            // disabled={state.data.language == "en"}
            width={60}
            height={50}
            title="English"
            borderRadius={12}
            textStyle={{ fontSize: 12 }}
            onPress={() => {
              handelChangeLanguage("en");
            }}
            color={myColors.secondary}
          />
        </View>
        <View style={{ margin: 5 }}>
          <MedButton
            // disabled={state.data.language == "ar"}
            width={60}
            height={50}
            title="العربية"
            borderRadius={12}
            textStyle={{ fontSize: 12 }}
            onPress={() => {
              handelChangeLanguage("ar");
            }}
            color={myColors.secondary}
          />
        </View>
      </View>
    </View>
  );
}
export { SettingsScreen };

const styles = StyleSheet.create({});
