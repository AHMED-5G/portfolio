import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../types";

import ChangeLanguageComponent from "../components/settingsComponents/ChangeLanguageComponent";
import SetReadThemeComponent from "../components/settingsComponents/SetReadThemeComponent";
import SectionTitle from "../components/settingsComponents/SectionTitle";

function SettingsScreen({ navigation }: RootTabScreenProps<"Settings">) {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <SectionTitle title="Select Language" />
      <ChangeLanguageComponent />
      <SectionTitle title="Reading Theme" />
      <SetReadThemeComponent />
    </ScrollView>
  );
}
export { SettingsScreen };

const styles = StyleSheet.create({});
