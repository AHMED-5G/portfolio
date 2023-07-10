import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ReadingThemesCombo } from "../../types";
import { myColors } from "../../constants/myColors";

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
          borderWidth: isSelected ? 2.4 : 0,
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
          style={{ fontWeight: "bold", color: colors.fontColor, fontSize: 22 }}
        >
          {colors.fontSize ?? "F"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReadingThemComboComponent;

const styles = StyleSheet.create({
  comboContainer: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 0.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 10,
  },
  backgroundColorContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  fontColorContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
