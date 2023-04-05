import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { height } from "../constants/Layout";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BackComponent from "../components/MarketComponents/BackComponent";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";

type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const MarketHomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "#EEE",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>MarketHomeScreen</Text>
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
