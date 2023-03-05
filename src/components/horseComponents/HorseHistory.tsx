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
        <>
          <View
            style={{ marginLeft: 5, marginBottom: 7, alignSelf: "flex-start" }}
          >
            <Text
              style={{
                fontSize: settings.savedReadingTheme.fontSize ?? 22,
                fontWeight: "bold",
                color: myColors.black,
                marginLeft: 5,
              }}
            >
              History
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                backgroundColor: settings.savedReadingTheme.backGroundColor,
              }}
            >
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
        </>
      ) : (
        <View style={styles.inActiveIconContainer}>
          <Entypo
            name="feather"
            size={26}
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
    borderWidth: 1,
    borderColor: myColors.black,
  },
});
