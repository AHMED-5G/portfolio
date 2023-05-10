import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { width } from "../constants/Layout";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";
import { productsData } from "../../dummy/marketDummy/ProductsDummy";
import ProductCardParent from "../components/MarketComponents/ProductCards/ProductCardParent";
import { theme } from "../constants/myColors";
import SimpleHeader from "../components/SimpleHeader";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { i18n } from "../translation/i18n";

type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const bottomNavigationHeight = theme.tabBarHeight;
const MarketHomeScreen = ({ navigation }: Props) => {
  const Content = () => {
    return (
      <View style={styles.container}>
        <SimpleHeader
          title={i18n.t("market") + " - " + i18n.t("everydayEssentials")}
        />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={styles.productsFlatListContainer}>
            <FlatList
              data={productsData}
              renderItem={({ item }) => {
                return <ProductCardParent product={item} />;
              }}
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      navigation={navigation}
      CustomBottomTabComponents={[<SearchComponent />, <Cart />]}
    />
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
    flex: 1,
    backgroundColor: "#EEE",
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
