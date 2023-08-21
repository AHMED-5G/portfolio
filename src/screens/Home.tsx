import { StyleSheet, View, ScrollView,  } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import YachtSection from "../components/homeSections/YachtSection";
import ContributesSection from "../components/homeSections/ContributesSection";
import HotelsSection from "../components/homeSections/HotelsSection";
import MarketSection from "../components/homeSections/MarketSection";
import { i18n } from "../translation/i18n";
import SimpleHeader from "../components/SimpleHeader";
import HomeSectionContainer from "../components/homeSections/HomeSectionContainer";
import { theme } from "../constants/theme";
import { fontRatio, hwrosh } from "../constants/Layout";
import MyText from "../components/MyText";

type Props = StackScreenProps<RootStackParamList, "Home">;

function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: theme.baseBackground() }}>
      <SimpleHeader title={i18n.t("home")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: hwrosh(5),
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <MarketSection navigation={navigation} />
        <ContributesSection />
        <YachtSection navigation={navigation} />
        <HotelsSection />
        <HomeSectionContainer
          content={
            <MyText
              style={[styles.versionText, { color: theme.baseTextColor() }]}
              text={i18n.t("version") + " " + "0.9"}
            />
          }
          line={false}
        />
      </ScrollView>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({
  versionText: { fontSize: fontRatio(18), fontWeight: "400" },
});
