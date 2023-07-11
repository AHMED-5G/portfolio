import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ReadingThemesCombo } from "../../types";
import { myColors } from "../../constants/myColors";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  wwrosw,
} from "../../constants/Layout";

type Props = {
  colors: ReadingThemesCombo;
  isSelected: boolean;
  setSelectedCombo?: React.Dispatch<React.SetStateAction<ReadingThemesCombo>>;
  fontSize: number;
};

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
            fontSize: fontRatio(22),
          }}
        >
          {colors.fontSize ?? "F"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReadingThemComboComponent;
const backgroundColorContainerRadius = circularRatio(40);
const comboContainerRadius = circularRatio(70);
const styles = StyleSheet.create({
  comboContainer: {
    width: comboContainerRadius,
    height: comboContainerRadius,
    borderRadius: comboContainerRadius,
    borderWidth: 0.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: averageRatio(10),
  },
  backgroundColorContainer: {
    width: backgroundColorContainerRadius,
    height: backgroundColorContainerRadius,
    borderRadius: backgroundColorContainerRadius,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: wwrosw(5),
  },
  fontColorContainer: {
    width: backgroundColorContainerRadius,
    height: backgroundColorContainerRadius,
    borderRadius: backgroundColorContainerRadius,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: wwrosw(5),
  },
});
