import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Horse, RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  horse: Horse;
  navigation: StackNavigationProp<RootStackParamList, "Horses", undefined>;
};

const HorseCard = ({ horse, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height: 230,
        margin: 20,
        backgroundColor: "#054fb9",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 10,
      }}
      onPress={() => {
        navigation.navigate("HorseDetails", horse);
      }}
    >
      <View>
        {/* <SharedElement id={horse.id.toString()}> */}
          <Image
            source={{ uri: horse.image }}
            style={{
              width: 200,
              height: 180,
              borderRadius: 10,
            }}
            resizeMode={"cover"}
          />
        {/* </SharedElement> */}
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "900",
          }}
        >
          {horse.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorseCard;

const styles = StyleSheet.create({});
