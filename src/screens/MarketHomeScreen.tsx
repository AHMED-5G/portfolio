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
import { Product, RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";

import BackComponent from "../components/MarketComponents/BackComponent";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";
import { productsData } from "../../dummy/marketDummy/ProductsDummy";
import ProductCardParent from "../components/MarketComponents/ProductCards/ProductCardParent";
import FormTextInput from "../components/mini/FormTextInput";
import MedButton from "../components/mini/MedButton";
import { myColors, theme } from "../constants/myColors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const bottomNavigationHeight = 70;
const MarketHomeScreen = ({ navigation }: Props) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const showTextInput = () => {
    setShowSearchInput(true);
  };
  const openSearchMessageContainerProgress = useSharedValue(0);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);
  const [myProducts, setMyProducts] = useState(productsData);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<Product[]>();
  const searchMessageContainerMaxHeight = 50;

  const searchMessageRStylerContainer = useAnimatedStyle(() => {
    const toHeight = interpolate(
      openSearchMessageContainerProgress.value,
      [0, 1],
      [0, searchMessageContainerMaxHeight]
    );
    return {
      height: toHeight,
      backgroundColor: searchResult ? "#8fdd42" : "#edc68f",
    };
  });
  const openSearchMessageContainer = () => {
    if (openSearchMessageContainerProgress.value != 1) {
      openSearchMessageContainerProgress.value = withTiming(1);
    }
  };
  const closeSearchMessageContainer = () => {
    openSearchMessageContainerProgress.value = withTiming(0);
  };

  const resultText = (number: number) => {
    return number <= 1 ? "result" : "results";
  };

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
            <Animated.View
              style={[
                {
                  borderRadius: 5,
                  height: 0,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                },
                searchMessageRStylerContainer,
                {
                  backgroundColor: searchResult?.length ? "#8fdd42" : "#edc68f",
                },
              ]}
            >
              {searchResult?.length ? (
                <Text style={styles.searchResultText}>
                  {searchResult.length +
                    " " +
                    resultText(searchResult.length) +
                    " for " +
                    "' " +
                    searchText +
                    " '"}
                </Text>
              ) : (
                searchText && (
                  <Text style={[styles.searchResultText, { color: "black" }]}>
                    {"No results for " + "' " + searchText + " '"}
                  </Text>
                )
              )}
            </Animated.View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "center",
                alignItems: "center",
                width,
              }}
            >
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
                  // if (text) {
                  setMyProducts(
                    productsData.filter((product) =>
                      product.searchText.includes(text)
                    )
                  );
                  setSearchResult(
                    productsData.filter((product) =>
                      product.searchText.includes(text)
                    )
                  );
                  setSearchText(text);
                  if (text) {
                    openSearchMessageContainer();
                  } else {
                    closeSearchMessageContainer();
                  }
                  // }
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
          </View>
        )}
      </View>
      {!keyboardStatus && (
        <View style={styles.customBottomTab}>
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
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width,
  },
  searchResultText: {
    margin: 4,
    color: theme.primaryText,
    fontSize: 20,
    fontWeight: "500",
  },
});
