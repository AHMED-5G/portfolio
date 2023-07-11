import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";
import SetReadThemeComponent from "../components/settingsComponents/SetReadThemeComponent";
import SettingsSectionTitle from "../components/settingsComponents/SettingsSectionTitle";
import MyLine from "../components/MyLine";
import { i18n } from "../translation/i18n";
import SimpleHeader from "../components/SimpleHeader";
import { theme } from "../constants/myColors";

function SettingsScreen({ navigation }: RootTabScreenProps<"Settings">) {
  return (
    <ScrollView
      style={{
        backgroundColor: theme.baseBackground(),
      }}
    >
      <SimpleHeader title={i18n.t("settings")} />
      {/* <SettingsSectionTitle title="Select Language" /> */}
      {/* <ChangeLanguageComponent /> */}
      <SettingsSectionTitle title={i18n.t("readingTheme")} />
      <SetReadThemeComponent />
      <MyLine />
    </ScrollView>
  );
}
export { SettingsScreen };

const styles = StyleSheet.create({});
