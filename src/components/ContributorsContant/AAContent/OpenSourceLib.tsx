import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyCustomSkeleton from "../../MyCustomSkeleton";
import { hwrosh, width } from "../../../constants/Layout";
import axios from "axios";
import cheerio from "cheerio";
import SectionContainer from "./SectionContainer";
import { i18n } from "../../../translation/i18n";

const OpenSourceLib = () => {
  const osRepoUrl =
    "https://github.com/AHMED-5G/react-native-flatlist-withindicator";
  const [repoImage, setRepoImage] = useState("");
  useEffect(() => {
    axios
      .get(osRepoUrl)
      .then((response) => {
        const $ = cheerio.load(response.data);
        const image = $('meta[property="og:image"]').attr("content");
        image && setRepoImage(image);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  const Content = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(osRepoUrl)}
          style={{ marginTop: hwrosh(5) }}
        >
          {repoImage ? (
            <Image
              resizeMode="cover"
              source={{
                uri: repoImage,
              }}
              style={styles.repoImageStyle}
            />
          ) : (
            <MyCustomSkeleton
              style={{ width: 0.9 * width, height: hwrosh(200) }}
            />
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Image
            source={{
              uri: "https://raster.shields.io/npm/dw/react-native-flatlist-withindicator.png",
            }}
            resizeMethod="resize"
            resizeMode="contain"
            style={{ width: 100, height: 50 }}
          />
        </View>
      </View>
    );
  };
  return (
    <SectionContainer
      title={i18n.t("openSourceLibrary")}
      content={<Content />}
    />
  );
};

export default OpenSourceLib;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: hwrosh(20),
    width: width * 0.9,
  },
  repoImageStyle: {
    height: hwrosh(200),
    borderRadius: 5,
    width: "100%",
  },
});
