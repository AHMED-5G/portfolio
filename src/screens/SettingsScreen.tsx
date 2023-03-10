import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";
import ChangeLanguageComponent from "../components/settingsComponents/ChangeLanguageComponent";
import SetReadThemeComponent from "../components/settingsComponents/SetReadThemeComponent";
import SettingsSectionTitle from "../components/settingsComponents/SettingsSectionTitle";

function SettingsScreen({ navigation }: RootTabScreenProps<"Settings">) {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <SettingsSectionTitle title="Select Language" />
      <ChangeLanguageComponent />
      <SettingsSectionTitle title="Reading Theme" />
      <SetReadThemeComponent />
    </ScrollView>
  );
}
export { SettingsScreen };

const styles = StyleSheet.create({});
