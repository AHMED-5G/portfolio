import { FlatList, StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { Contributor, Hotel, RootTabScreenProps } from "../types";
import { contributors, hotels } from "../../assets/dummy";
import HotelCard from "../components/HotelCard";
import ContributorCard from "../components/ContributorCard";

function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 100 }}>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={styles.sectionTitleText}>Hotels</Text>
        </View>
        <FlatList
          data={hotels}
          horizontal
          renderItem={({ item }) => <HotelCard hotel={item} />}
          keyExtractor={(item: Hotel) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text style={styles.sectionTitleText}>Contributors</Text>
      </View>
      <View style={{ marginTop: 20, height: 330 }}>
        <FlatList
          data={contributors}
          horizontal
          renderItem={({ item }) => <ContributorCard contributor={item} />}
          keyExtractor={(item: Contributor) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "800" }}>V0.1</Text>
      </View>
      <View style={{ marginBottom: 80 }}>
        {/* //this view for bottom tab height  */}
      </View>
    </ScrollView>
  );
}
export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    lineHeight: 36,
    color: "white",
  },
  secondlyTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  sectionTitleText: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
