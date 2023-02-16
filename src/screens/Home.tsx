import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Hotel, RootTabScreenProps } from "../types";
import { hotels } from "../../assets/dummy";
import { height, width } from "../constants/Layout";

function Home({ navigation }: RootTabScreenProps<"Home">) {
  const HotelCard = ({ hotel }: { hotel: Hotel }) => {
    console.log(hotel);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HotelDetails", hotel);
        }}
        style={{ width: width / 2, height: height / 3 }}
      >
        <Image
          source={{ uri: hotel.images[0] }}
          style={{ width: width / 3, height: 300 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>home</Text>
      <FlatList
        data={hotels}
        horizontal
        renderItem={({ item }) => <HotelCard hotel={item} />}
        keyExtractor={(item: Hotel) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
