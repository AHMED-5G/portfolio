import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme, myColors } from "../../../../constants/myColors";
import { MySlider } from "../../../mini/MySlider";

type Props = { setCounter: React.Dispatch<React.SetStateAction<number>> };

const SliderInput = ({ setCounter }: Props) => {
  return (
    <View>
      <MySlider
        min={1}
        max={100}
        step={1}
        valueOnChange={(value) => {
          setCounter(value);
        }}
        containerStyle={styles.slierStyle}
        initialValue={1}
        knobColor={theme.actionColor}
        valueLabelsBackgroundColor="black"
        inRangeBarColor={myColors.grey5}
        outOfRangeBarColor={myColors.grey2}
      />
    </View>
  );
};

export default SliderInput;

const styles = StyleSheet.create({
  slierStyle: {
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
