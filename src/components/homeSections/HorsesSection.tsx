import { StyleSheet, View, ImageURISource } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { i18n } from "../../translation/i18n";
import { shuffleArray } from "../../utils/helperFunctions";
import { DataType } from "react-native-image-slider-banner/src";
import { horses } from "../../../dummy/horsesDummy/horsesDummy";
import { horsesImages } from "../../../dummy/horsesDummy/images";
import { ImageSlider } from "../mini/CustomImageSlider";
import HomeSectionTitle from "./HomeSectionTitle";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home", undefined>;
};

const HorsesSection = ({ navigation }: Props) => {
  const imagesForSlider: DataType[] = horsesImages.map((item) => {
    return { img: item as ImageURISource };
  });

  return (
    <View style={styles.container}>
      <HomeSectionTitle text={i18n.t("horses")} />
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
          autoPlay
          timer={5000}
          data={shuffleArray(imagesForSlider)}
        />
      </View>
    </View>
  );
};

export default HorsesSection;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
});
