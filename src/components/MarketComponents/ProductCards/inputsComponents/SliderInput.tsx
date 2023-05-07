import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { theme, myColors } from "../../../../constants/myColors";
import Slider from "@react-native-community/slider";

type Props = { setCounter: React.Dispatch<React.SetStateAction<number>> };

const SliderInput = ({ setCounter }: Props) => {
  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <View>
      <Slider
        style={{ width: "100%", height: 70 , }}
        minimumValue={10}
        maximumValue={100}
        step={10}
        minimumTrackTintColor={myColors.grey5}
        maximumTrackTintColor={myColors.grey2}
        onValueChange={(value) => {
          setCounter(value);
        }}
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
    zIndex: 2,
  },
});
