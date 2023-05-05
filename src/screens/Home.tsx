import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import YachtSection from "../components/homeSections/YachtSection";
import ContributesSection from "../components/homeSections/ContributesSection";
import HotelsSection from "../components/homeSections/HotelsSection";
import MarketSection from "../components/homeSections/MarketSection";
import MyLine from "../components/MyLine";
import HorsesSection from "../components/homeSections/HorsesSection";
import { height, width } from "../constants/Layout";
import { theme } from "../constants/myColors";
import { i18n } from "../translation/i18n";
import SimpleHeader from "../components/SimpleHeader";

type Props = StackScreenProps<RootStackParamList, "Home">;

function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <SimpleHeader title={i18n.t("home")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 10,
        }}
      >
        <MarketSection navigation={navigation} />
        <MyLine width="90%" />
        <ContributesSection navigation={navigation} />
        <MyLine width="90%" />
        <YachtSection navigation={navigation} />
        <MyLine width="90%" />
        <HotelsSection navigation={navigation} />
        <MyLine width="90%" />
        {/* <HorsesSection navigation={navigation} />
        <MyLine width="90%" /> */}
        <View
          style={{
            marginLeft: 10,
            flexDirection: theme.localizationFlexDirection,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "800" }}>
            {i18n.t("version")} 0.6
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({});
