import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

import HorseCard from "../components/horseComponents/HorseCard";
import BackArrow from "../components/mini/BackArrow";

type Props = StackScreenProps<RootStackParamList, "Horses">;

const Horses = ({ navigation, route }: Props) => {
  const horses = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f9e7d7",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <BackArrow />
      <View
        style={{
          flex: 1,
          marginTop: 70,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={horses}
          renderItem={({ item }) => (
            <HorseCard horse={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Horses;

const styles = StyleSheet.create({});
