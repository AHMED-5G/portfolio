import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "../../../../constants/myColors";
import Slider from "@react-native-community/slider";

type Props = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
};

const SliderInput = ({ setCounter, counter }: Props) => {
  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <View style={styles.slierStyle}>
      <Slider
        style={{ width: "100%" }}
        minimumValue={10}
        maximumValue={100}
        step={10}
        minimumTrackTintColor={myColors.grey5}
        maximumTrackTintColor={myColors.grey2}
        onValueChange={(value) => {
          setCounter(value);
        }}
        value={counter}
      />
    </View>
  );
};

export default SliderInput;

const styles = StyleSheet.create({
  slierStyle: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

  },
});
