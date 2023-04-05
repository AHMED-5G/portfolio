import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

type Props = { uri: string };

const HomeSingleImage = ({ uri }: Props) => {
  return (
    <View style={{ marginTop: 5, marginLeft:10 }}>
      <Image
        source={{
          uri,
        }}
        style={{ height: 200, width: width * 0.9, borderRadius: 10 }}
      />
    </View>
  );
};

export default HomeSingleImage;

const styles = StyleSheet.create({});
