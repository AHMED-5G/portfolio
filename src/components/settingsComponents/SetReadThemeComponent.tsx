import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ReadingThemComboComponent from "./ReadingThemComboComponent";
import { InitialStateInterface, ReadingThemesCombo } from "../../types";
import { averageRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import { readingThemes, theme } from "../../constants/theme";
import MedButton from "../mini/MedButton";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_READING_THEME } from "../../redux/reducers/dataSlice";
import { i18n } from "../../translation/i18n";
import Slider from "@react-native-community/slider";
import { myColors } from "../../constants";

const SetReadThemeComponent = () => {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice,
  );
  const savedReadingTheme = state.settings.savedReadingTheme;
  const [selectedCombo, setSelectedCombo] = useState<ReadingThemesCombo>(
    readingThemes[0],
  );
  const [fontSize, setFontSize] = useState(
    state.settings.savedReadingTheme.fontSize ?? 18,
  );

  const dispatch = useAppDispatch();
  return (
    <View
      style={[
        styles.container,
        { borderRadius: averageRatio(10), marginTop: hwrosh(10) },
      ]}
    >
      <View
        style={[
          styles.exampleContainer,
          {
            marginTop: hwrosh(20),
            width: width - wwrosw(20),
            height: hwrosh(100),
            marginBottom: hwrosh(3),
            borderRadius: averageRatio(10),
            backgroundColor: selectedCombo?.backGroundColor,
          },
        ]}
      >
        <Text
          style={{
            fontSize: selectedCombo.fontSize,
            color: selectedCombo.fontColor,
          }}
          selectable
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
        <View
          style={[
            styles.sliderContainer,
            { marginTop: hwrosh(20), width: width - wwrosw(20) },
          ]}
        >
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
          margin: averageRatio(10),
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
            theme.readingTheme = selectedCombo;
          }}
          disabled={
            selectedCombo.fontSize == savedReadingTheme.fontSize &&
            selectedCombo.backGroundColor == savedReadingTheme.backGroundColor
          }
          title={i18n.t("save")}
          width={wwrosw(100)}
          color={theme.actionColor}
          textStyle={{ color: theme.actionColorText }}
          style={{ borderRadius: averageRatio(10) }}
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  exampleContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
});
