import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ReadingThemesCombo } from "../../types";
import { myColors, theme } from "../../constants";
import { averageRatio, circularRatio } from "../../constants/Layout";

type Props = {
  colors: ReadingThemesCombo;
  isSelected: boolean;
  setSelectedCombo?: React.Dispatch<React.SetStateAction<ReadingThemesCombo>>;
  fontSize: number;
};
const comboContainerRadius = circularRatio(70);
const ReadingThemComboComponent = ({
  colors,
  isSelected,
  setSelectedCombo,
  fontSize,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedCombo
          ? setSelectedCombo({ ...colors, fontSize })
          : undefined;
      }}
      disabled={setSelectedCombo ? false : true}
      style={[
        styles.comboContainer,
        {
          borderColor: isSelected ? myColors.redFavorite : myColors.black,
          borderWidth: isSelected ? averageRatio(2.4) : 0,
          backgroundColor: colors.backGroundColor,
          margin: averageRatio(10),
          width: comboContainerRadius,
          height: comboContainerRadius,
          borderRadius: comboContainerRadius,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: colors.fontColor,
            fontSize: theme.fontSize.s22,
          }}
        >
          {colors.fontSize?.toFixed(0) ?? "F"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReadingThemComboComponent;

const styles = StyleSheet.create({
  comboContainer: {
    borderWidth: 0.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
