import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";

import BackComponent from "../components/MarketComponents/BackComponent";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";
import { productsData } from "../../dummy/marketDummy/ProductsDummy";
import ProductCardParent from "../components/MarketComponents/ProductCards/ProductCardParent";
import FormTextInput from "../components/mini/FormTextInput";
import MedButton from "../components/mini/MedButton";
import { myColors, theme } from "../constants/myColors";
import MyLine from "../components/MyLine";

type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const bottomNavigationHeight = 70;
const MarketHomeScreen = ({ navigation }: Props) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const showTextInput = () => {
    setShowSearchInput(true);
  };
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);
  const [myProducts, setMyProducts] = useState(productsData);
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40, alignContent: "flex-start", width }}>
        <Text style={styles.sectionHeadText}>Everyday Essentials</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.productsFlatListContainer}>
          <FlatList
            data={myProducts}
            renderItem={({ item }) => {
              return <ProductCardParent product={item} />;
            }}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {showSearchInput && (
          <View style={styles.searchInputContainer}>
            <FormTextInput
              placeholder="Search"
              mainContainerStyle={{
                width: "80%",
                borderWidth: 0.5,
                borderColor: theme.borderColor,
                borderRadius: 5,
              }}
              containerStyle={{ width: "100%" }}
              autoFocus={true}
              value={searchText}
              setText={(text) => {
                setMyProducts(
                  productsData.filter((product) =>
                    product.searchText.includes(text)
                  )
                );
                setSearchText(text);
              }}
              onSubmitEditing={() => {
                if (!searchText) {
                  setShowSearchInput(false);
                }
              }}
            />

            <MedButton
              width={48}
              title="X"
              circle
              onPress={() => {
                setShowSearchInput(false);
                setMyProducts(productsData);
              }}
              textStyle={{ fontWeight: "500", color: "black" }}
              style={{ backgroundColor: "white" }}
            />
          </View>
        )}
      </View>
      {!keyboardStatus && (
        <View
          style={[
            styles.customBottomTab,
            {
              // display: !keyboardStatus ? "flex" : "none",
            },
          ]}
        >
          <BackComponent navigation={navigation} />
          <SearchComponent showTextInput={showTextInput} />
          <Cart />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MarketHomeScreen;

const styles = StyleSheet.create({
  customBottomTab: {
    backgroundColor: "white",
    height: bottomNavigationHeight,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  productsFlatListContainer: {
    flex: 1,
    width,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionHeadText: {
    marginLeft: 15,
    fontSize: 22,
    color: myColors.black,
    fontWeight: "800",
  },
  line: {
    marginTop: 20,
    width,
    height: 1,
    backgroundColor: myColors.black,
    opacity: 0.7,
  },
  searchInputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width,
  },
});
