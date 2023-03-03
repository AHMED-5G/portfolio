import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

type Props = {
  images: string[];
  isModalActive : boolean
};

const HorsesImages = ({ images }: Props) => {
  return (
    <View>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 5 }}>
              <Image
                source={{ uri: item }}
                style={{ width: 150, height: 150, borderRadius: 12 }}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HorsesImages;

const styles = StyleSheet.create({});
