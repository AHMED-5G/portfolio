import { DevSettings, StyleSheet, View } from "react-native";
import React from "react";
import { InitialStateInterface, Languages } from "../../types";
import MedButton from "../mini/MedButton";
import { SET_LANGUAGE } from "../../redux/reducers/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";

type Props = {};

const ChangeLanguageComponent = (props: Props) => {
  const handelChangeLanguage = (lang: Languages) => {
    dispatch(SET_LANGUAGE(lang));
    restartApp();
  };
  const restartApp = () => {
    DevSettings.reload();
  };
  const dispatch = useAppDispatch();
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <View style={{ margin: 5 }}>
          <MedButton
            disabled={state.language == Languages.English}
            width={100}
            title="English"
            borderRadius={12}
            textStyle={{ fontSize: 18 }}
            onPress={() => {
              handelChangeLanguage(Languages.English);
            }}
          />
        </View>
        <View style={{ margin: 5 }}>
          <MedButton
            disabled={state.language == Languages.Arabic}
            width={100}
            title="العربية"
            borderRadius={12}
            textStyle={{ fontSize: 18 }}
            onPress={() => {
              handelChangeLanguage(Languages.Arabic);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangeLanguageComponent;

const styles = StyleSheet.create({});
