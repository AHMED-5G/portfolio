import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import YachtSection from "../components/homeSections/YachtSection";
import ContributesSection from "../components/homeSections/ContributesSection";
import HotelsSection from "../components/homeSections/HotelsSection";
import MarketSection from "../components/homeSections/MarketSection";
import MyLine from "../components/MyLine";
import HorsesSection from "../components/homeSections/HorsesSection";

type Props = StackScreenProps<RootStackParamList, "Home">;

function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 10 }}
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
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "800" }}>V0.5</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export { Home };

const styles = StyleSheet.create({});
