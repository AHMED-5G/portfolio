import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

import HorseCard from "../components/horseComponents/HorseCard";

type Props = StackScreenProps<RootStackParamList, "Horses">;

const Horses = ({ navigation, route }: Props) => {
  const horses = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9e7d7" ,marginTop:StatusBar.currentHeight }}>
        <View style={{ flex: 1, marginTop: 50 }}>
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
