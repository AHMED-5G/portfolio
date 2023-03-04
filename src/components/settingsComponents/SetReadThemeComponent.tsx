import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ReadingThemComboComponent from "./ReadingThemComboComponent";
import { InitialStateInterface, ReadingThemesCombo } from "../../types";
import { width } from "../../constants/Layout";
import { myColors } from "../../constants/myColors";
import { Slider } from "react-native-range-slider-expo";
import MedButton from "../mini/MedButton";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_READING_THEME } from "../../redux/reducers/dataSlice";
type Props = {};

const SetReadThemeComponent = (props: Props) => {
  const readingThemes: ReadingThemesCombo[] = [
    {
      fontColor: "#000000",
      backGroundColor: "#FFFFFF",
    },
    {
      fontColor: "#ffffff",
      backGroundColor: "#230d9a",
    },
    {
      fontColor: "#000000",
      backGroundColor: "#90d8b2",
    },
    {
      fontColor: "#000000",
      backGroundColor: "#8babf1",
    },
    {
      fontColor: "#FFFFFF",
      backGroundColor: "#000000",
    },
  ];

  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  let savedReadingTheme = state.settings.savedReadingTheme;
  const [selectedCombo, setSelectedCombo] = useState<ReadingThemesCombo>(
    readingThemes[0]
  );

  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <FlatList
          data={readingThemes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ReadingThemComboComponent
                colors={item}
                isSelected={
                  selectedCombo.backGroundColor ==
                    readingThemes[index].backGroundColor &&
                  selectedCombo.fontColor == readingThemes[index].fontColor
                }
                setSelectedCombo={setSelectedCombo}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={[
          styles.exampleContainer,
          { backgroundColor: selectedCombo?.backGroundColor },
        ]}
      >
        <Text
          style={{
            fontSize: selectedCombo.fontSize,
            color: selectedCombo.fontColor,
          }}
        >
          I can read this text
        </Text>
      </View>
      <View>
        <View style={styles.sliderContainer}>
          <Slider
            min={12}
            max={60}
            step={2}
            valueOnChange={(value) => {
              setSelectedCombo({ ...selectedCombo, fontSize: value });
            }}
            initialValue={18}
            knobColor="black"
            valueLabelsBackgroundColor="black"
            inRangeBarColor={myColors.grey2}
            outOfRangeBarColor={myColors.grey5}
          />
        </View>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <MedButton
          onPress={() => {
            selectedCombo.fontSize = selectedCombo.fontSize
              ? selectedCombo.fontSize
              : 18;
            dispatch(SET_READING_THEME(selectedCombo));
          }}
          disabled={
            selectedCombo.fontSize == savedReadingTheme.fontSize &&
            selectedCombo.backGroundColor == savedReadingTheme.backGroundColor
          }
          title="Save"
          width={100}
          style={{ borderRadius: 10 }}
        />
        <View>
          <ReadingThemComboComponent
            colors={state.settings.savedReadingTheme}
            isSelected={false}
          />
        </View>
      </View>
    </View>
  );
};

export default SetReadThemeComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: myColors.black,
    borderWidth: 0.3,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    overflow: "hidden",
  },
  exampleContainer: {
    marginTop: 20,
    width: width - 20,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 3,
    borderRadius: 10,
  },
  sliderContainer: {
    height: 100,
    marginBottom: 10,
    width: width - 20,
    justifyContent: "center",
    alignContent: "center",
  },
});
