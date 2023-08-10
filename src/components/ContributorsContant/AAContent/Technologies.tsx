import { FlatList, View, Text } from "react-native";
import React from "react";
import { technologies } from "./data";
import { hwrosh, wwrosw } from "../../../constants/Layout";
import SectionContainer from "./SectionContainer";

const Technologies = () => {
  const Content = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={technologies}
        renderItem={({ item }) => (
          <View
            style={{
              width: wwrosw(100),
              height: hwrosh(40),
              backgroundColor: item.color,
              flexDirection: "row",
              borderRadius: 5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginRight: wwrosw(10),
            }}
          >
            <Text style={{ color: item.fontColor, fontSize: 10 }}>
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return <SectionContainer title="Technologies" content={<Content />} />;
};

export default Technologies;
