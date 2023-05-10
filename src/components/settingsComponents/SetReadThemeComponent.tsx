import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ReadingThemComboComponent from "./ReadingThemComboComponent";
import { InitialStateInterface, ReadingThemesCombo } from "../../types";
import { width } from "../../constants/Layout";
import { myColors, readingThemes, theme } from "../../constants/myColors";
// import { Slider } from "react-native-range-slider-expo";
import MedButton from "../mini/MedButton";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_READING_THEME } from "../../redux/reducers/dataSlice";
import { i18n } from "../../translation/i18n";
import Slider from "@react-native-community/slider";
type Props = {};

const SetReadThemeComponent = (props: Props) => {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  let savedReadingTheme = state.settings.savedReadingTheme;
  const [selectedCombo, setSelectedCombo] = useState<ReadingThemesCombo>(
    readingThemes[0]
  );
  const [fontSize, setFontSize] = useState(
    state.settings.savedReadingTheme.fontSize ?? 18
  );

  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
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
          {i18n.t("iCanReadThisText")}
        </Text>
      </View>
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
                fontSize={fontSize}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        <View style={styles.sliderContainer}>
          <Slider
            style={{ width: "100%" }}
            minimumValue={10}
            maximumValue={100}
            step={2}
            minimumTrackTintColor={myColors.grey5}
            maximumTrackTintColor={myColors.grey2}
            value={fontSize}
            onValueChange={(value) => {
              setFontSize(value);
              setSelectedCombo({ ...selectedCombo, fontSize: value });
            }}
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
          title={i18n.t("save")}
          width={100}
          color={theme.actionColor}
          textStyle={{ color: theme.actionColorText }}
          style={{ borderRadius: 10 }}
        />
        <View>
          <ReadingThemComboComponent
            fontSize={fontSize}
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
    marginTop: 20,
    width: width - 20,
    justifyContent: "center",
    alignContent: "center",
  },
});
