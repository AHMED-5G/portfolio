import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

import YachtSection from "../components/homeSections/YachtSection";
import ContributesSection from "../components/homeSections/ContributesSection";
import HotelsSection from "../components/homeSections/HotelsSection";

type Props = StackScreenProps<RootStackParamList, "Home">;

function Home({ navigation }: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <YachtSection navigation={navigation} />
      <ContributesSection navigation={navigation} />
      <HotelsSection navigation={navigation} />
      {/* <HorsesSection navigation={navigation} /> */}
      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "800" }}>V0.4</Text>
      </View>
      <View style={{ marginBottom: 80 }}></View>
    </ScrollView>
  );
}

export { Home };

const styles = StyleSheet.create({});
