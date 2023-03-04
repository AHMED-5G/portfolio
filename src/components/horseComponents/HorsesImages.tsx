import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { myColors } from "../../constants/myColors";

type Props = {
  images: string[];
  isModalActive: boolean;
};

const HorsesImages = ({ images, isModalActive }: Props) => {
  return (
    <>
      {isModalActive ? (
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
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            alignContent: "center",
            alignItems: "flex-end",
            backgroundColor: myColors.white,
            borderRadius: 28,
            margin: 10,
          }}
        >
          <Entypo
            name="images"
            size={28}
            color={myColors.black}
            style={{ margin: 10 }}
          />
        </View>
      )}
    </>
  );
};

export default HorsesImages;

const styles = StyleSheet.create({});
