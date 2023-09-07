import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { averageRatio, hwrosh, width } from "../../../constants/Layout";
import SectionContainer from "./SectionContainer";
import { review1Image } from "../../../../assets/images";
import ImageView from "react-native-image-viewing";
import { i18n } from "../../../translation/i18n";
const Reviews = () => {
  const Content = () => {
    const [visible, setIsVisible] = useState(false);

    return (
      <View style={{ width: width * 0.9 }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: hwrosh(150),
            borderRadius: averageRatio(5),
            overflow: "hidden",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsVisible(true)}
        >
          <Image
            source={review1Image}
            resizeMethod="resize"
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: averageRatio(5),
            }}
          />
        </TouchableOpacity>
        {visible && (
          <ImageView
            images={[review1Image]}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
          />
        )}
      </View>
    );
  };

  return <SectionContainer title={i18n.t("reviews")} content={<Content />} />;
};

export default Reviews;
