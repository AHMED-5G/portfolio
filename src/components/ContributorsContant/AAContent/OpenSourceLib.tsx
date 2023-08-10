import { Linking, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MyCustomSkeleton from "../../MyCustomSkeleton";
import { hwrosh, width } from "../../../constants/Layout";
import axios from "axios";
import cheerio from "cheerio";
import SectionContainer from "./SectionContainer";

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
    );
  };
  return <SectionContainer title="Open Source Library" content={<Content />} />;
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
