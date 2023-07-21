import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import YachtSection from "../components/homeSections/YachtSection";
import ContributesSection from "../components/homeSections/ContributesSection";
import HotelsSection from "../components/homeSections/HotelsSection";
import MarketSection from "../components/homeSections/MarketSection";
import HorsesSection from "../components/homeSections/HorsesSection";
import { i18n } from "../translation/i18n";
import SimpleHeader from "../components/SimpleHeader";
import HomeSectionContainer from "../components/homeSections/HomeSectionContainer";
import { myColors, theme } from "../constants/myColors";
import Slider from "@react-native-community/slider";
import { fontRatio, hwrosh } from "../constants/Layout";
import Animated from "react-native-reanimated";
import { contributors } from "../../dummy/Contributors";
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
        {/* <Button
        title="lets go "
        onPress={() => {
          navigation.navigate("ContributorsDetails", contributors[0]);
        }}
      />
        <Animated.View
          sharedTransitionTag="22"
          style={{ width: 100, height: 100, backgroundColor: "green" }}
        ></Animated.View> */}
        <MarketSection navigation={navigation} />
        <ContributesSection navigation={navigation} />
        <YachtSection navigation={navigation} />
        <HotelsSection navigation={navigation} />
        <HomeSectionContainer
          content={
            <Text
              style={[styles.versionText, { color: theme.baseTextColor() }]}
            >
              {i18n.t("version")} 0.7
            </Text>
          }
          line={false}
        />
      </ScrollView>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({
  versionText: { fontSize: fontRatio(18), fontWeight: "800" },
});
