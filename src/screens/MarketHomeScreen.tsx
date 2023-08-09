import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { averageRatio, fontRatio, hwrosh, width } from "../constants/Layout";
import SearchComponent from "../components/MarketComponents/SearchComponent";
import Cart from "../components/MarketComponents/Cart";
import { productsData } from "../../dummy/marketDummy/ProductsDummy";
import ProductCardParent from "../components/MarketComponents/ProductCards/ProductCardParent";
import { theme } from "../constants/myColors";
import SimpleHeader from "../components/SimpleHeader";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { i18n } from "../translation/i18n";

// type Props = StackScreenProps<RootStackParamList, "MarketHomeScreen">;

const bottomNavigationHeight = theme.tabBarHeight;
const MarketHomeScreen = () => {
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
      CustomBottomTabComponents={[
        <SearchComponent key={"search"} />,
        <Cart key={"cart"} />,
      ]}
    />
  );
};

export default MarketHomeScreen;

const styles = StyleSheet.create({
  customBottomTab: {
    backgroundColor: "white",
    height: bottomNavigationHeight,
    borderTopLeftRadius: averageRatio(15),
    borderTopRightRadius: averageRatio(15),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width,
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  productsFlatListContainer: {
    flex: 1,
    width,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: hwrosh(10),
  },

  searchInputContainer: {
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width,
  },
  searchResultText: {
    margin: averageRatio(4),
    color: theme.primaryText(),
    fontSize: fontRatio(20),
    fontWeight: "500",
  },
});
