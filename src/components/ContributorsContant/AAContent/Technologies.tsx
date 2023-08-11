import { FlatList, View, Text } from "react-native";
import React from "react";
import { technologies } from "./data";
import { fontRatio, hwrosh, wwrosw } from "../../../constants/Layout";
import SectionContainer from "./SectionContainer";
import { i18n } from "../../../translation/i18n";

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
            <Text style={{ color: item.fontColor, fontSize: fontRatio(14) }}>
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <SectionContainer title={i18n.t("technologies")} content={<Content />} />
  );
};

export default Technologies;
