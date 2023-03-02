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
import Animated, { withSpring } from "react-native-reanimated";
type Props = StackScreenProps<RootStackParamList, "Horses">;

const Horses = ({ navigation, route }: Props) => {

  const horses = route.params;
  const HorseCard = ({ horse }: { horse: Horse }) => {
    return (
      <TouchableOpacity
        style={{
          width: 200,
          height: 230,
          margin: 20,
          backgroundColor: "#638cdefa",
          alignItems: "center",
          alignContent: "center",
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("HorseDetails", horse);
        }}
      >
        <View
    
        >
          <Image
            source={{ uri: horse.image }}
            style={{
              width: 200,
              height: 180,
              borderRadius: 10,
            }}
          />
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
  return (
    <View style={{ flex: 1, backgroundColor: "#f9e7d7" }}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <FlatList
          data={horses}
          renderItem={({ item }) => <HorseCard horse={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Horses;

const styles = StyleSheet.create({});
