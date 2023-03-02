import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Horse, RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import Animated from "react-native-reanimated";

type Props = StackScreenProps<RootStackParamList, "HorseDetails">;

const Horses = ({ navigation, route }: Props) => {
  const horse = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      >
        <Image
          source={{ uri: horse.image }}
          style={{
            width: 200,
            height: 180,
            borderRadius: 10,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Horses;

const styles = StyleSheet.create({});
