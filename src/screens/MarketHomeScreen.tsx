import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BackComponent from "../components/MarketComponents/BackComponent";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";
import { productsData } from "../../dummy/marketDummy/ProductsDummy";
import ProductCard from "../components/MarketComponents/ProductCard";

type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const MarketHomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "#EEE",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: "white",
          width,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={productsData}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
          alignItems: "center",
          width,
        }}
      >
        <BackComponent navigation={navigation} />
        <SearchComponent />
        <Cart />
      </View>
    </SafeAreaView>
  );
};

export default MarketHomeScreen;

const styles = StyleSheet.create({});
