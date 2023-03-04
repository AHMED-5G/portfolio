import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Horse, InitialStateInterface } from "../../types";
import { Entypo } from "@expo/vector-icons";
import { myColors } from "../../constants/myColors";
import { useAppSelector } from "../../redux/Hooks/hooks";
import { ScrollView } from "react-native-gesture-handler";

type Props = { history: Horse["history"]; isModalActive: boolean };

const HorseHistory = ({ history, isModalActive }: Props) => {
  const { settings }: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );

  return (
    <>
      {isModalActive ? (
        <ScrollView>
          <View
            style={{
              padding: 5,
              borderRadius: 5,
              backgroundColor: settings.savedReadingTheme.backGroundColor,
            }}
          >
            <View style={{ marginBottom: 7 }}>
              <Text
                style={{
                  fontSize: settings.savedReadingTheme.fontSize! + 4,
                  fontWeight: "bold",
                  color: settings.savedReadingTheme.fontColor,
                }}
              >
                History
              </Text>
            </View>
            <Text
              style={{
                fontSize: settings.savedReadingTheme.fontSize,
                color: settings.savedReadingTheme.fontColor,
              }}
            >
              {history}
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.inActiveIconContainer}>
          <Entypo
            name="feather"
            size={28}
            color={myColors.black}
            style={{ margin: 10 }}
          />
        </View>
      )}
    </>
  );
};

export default HorseHistory;

const styles = StyleSheet.create({
  inActiveIconContainer: {
    justifyContent: "center",
    alignSelf: "flex-end",
    alignContent: "center",
    alignItems: "flex-end",
    backgroundColor: myColors.white,
    borderRadius: 28,
    margin: 10,
  },
});
