import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageURISource,
} from "react-native";
import React from "react";
import { Contributor, Hotel, RootStackParamList } from "../types";

import HotelCard from "../components/HotelCard";
import ContributorCard from "../components/ContributorCard";
import { contributors } from "../../dummy/Contributors";
import { hotels } from "../../dummy/hotels";
import { StackScreenProps } from "@react-navigation/stack";
import { i18n } from "../translation/i18n";
import { ImageSlider } from "../components/mini/CustomImageSlider";
import { horsesImages } from "../../dummy/horsesDummy/images";
import { DataType } from "react-native-image-slider-banner/src/PropsTypes";
import { width } from "../constants/Layout";
import { horses } from "../../dummy/horsesDummy/horsesDummy";

type Props = StackScreenProps<RootStackParamList, "Home">;

function Home({ navigation }: Props) {
  let imagesForSlider: DataType[] = horsesImages.map((item) => {
    return { img: item as ImageURISource };
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.hotelsSectionContainer}>
        <View style={styles.hotelsTextContainer}>
          <Text accessibilityRole="header" style={styles.sectionTitleText}>
            {i18n.t("hotels")}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <FlatList
            data={hotels}
            horizontal
            renderItem={({ item }) => <HotelCard hotel={item} />}
            keyExtractor={(item: Hotel) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.contributesSectionContainer}>
        <View style={styles.contributesTextContainer}>
          <Text accessibilityRole="header" style={styles.sectionTitleText}>
            Contributors
          </Text>
        </View>
        <View style={{ height: 330 }}>
          <FlatList
            data={contributors}
            horizontal
            renderItem={({ item }) => <ContributorCard contributor={item} />}
            keyExtractor={(item: Contributor) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.horsesSectionContainer}>
        <View style={styles.horsesTextContainer}>
          <Text accessibilityRole="header" style={styles.sectionTitleText}>
            Horses
          </Text>
        </View>
        <View
          style={{
            width: width - 20,
            marginLeft: 10,
            height: 300,
          }}
        >
          <ImageSlider
            caroselImageStyle={{
              height: 300,
              borderRadius: 20,
              width: width - 20,
              marginRight: 10,
            }}
            
            navigate={() => navigation.navigate("Horses", horses)}
            // autoPlay
            timer={5000}
            data={imagesForSlider}
          />
        </View>
      </View>
      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "800" }}>V0.2</Text>
      </View>
      <View style={{ marginBottom: 80 }}></View>
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
    alignSelf: "flex-start",
    marginTop: 10,
  },
  hotelsSectionContainer: {
    marginTop: 100,
  },
  hotelsTextContainer: {
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  contributesSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
  contributesTextContainer: {
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  horsesSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
  horsesTextContainer: {
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
});
