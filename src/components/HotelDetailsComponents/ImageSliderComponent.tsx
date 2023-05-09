import { ImageURISource, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataType } from "react-native-image-slider-banner/src";
import { width, height } from "../../constants/Layout";
import { Hotel } from "../../types";
import { ImageSlider } from "../mini/CustomImageSlider";

type Props = {
  hotel: Hotel;
  requestedIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ImageSliderComponent = ({
  hotel,
  requestedIndex,
  setCurrentImageIndex,
}: Props) => {
  let imagesForSlider: DataType[] = hotel.images.map((item) => {
    return { img: item as ImageURISource };
  });

  return (
    <View
      style={{
        width,
        height: height / 2,
      }}
    >
      <ImageSlider
        data={imagesForSlider}
        requestedIndex={requestedIndex}
        onItemChangedWithIndex={(_, index) => {
          setCurrentImageIndex(index);
        }}
        caroselImageStyle={{
          height: height / 2,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        closeIconColor="#fff"
      />
    </View>
  );
};

export default ImageSliderComponent;

const styles = StyleSheet.create({});