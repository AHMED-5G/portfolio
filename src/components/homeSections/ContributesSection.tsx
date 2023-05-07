import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { contributors } from "../../../dummy/Contributors";
import { i18n } from "../../translation/i18n";
import { RootStackParamList, Contributor } from "../../types";
import { shuffleArray } from "../../utils/helperFunctions";
import ContributorCard from "../ContributorCard";
import HomeSectionTitle from "./HomeSectionTitle";
import { LocalizationDirection, theme } from "../../constants/myColors";
import { LocalizedFlatList } from "react-native-localized-flatlist-rtl-ltr";
import HomeSectionContainer from "./HomeSectionContainer";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const ContributesSection = ({ navigation }: Props) => {
  const Content = () => {
    return (
      <View>
        {/* <LocalizedFlatList
          data={contributors}
          LocalizedRenderItem={({ item }: { item: Contributor }) => {
            return <ContributorCard contributor={item} />;
          }}
          keyExtractor={(item: Contributor) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          // rtl={theme.localizationRtl}
        /> */}
        <FlatList
          data={contributors}
          renderItem={({ item }: { item: Contributor }) => {
            return <ContributorCard contributor={item} />;
          }}
          keyExtractor={(item: Contributor) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          // rtl={theme.localizationRtl}
          horizontal
        />
      </View>
    );
  };
  return (
    <View style={styles.contributesSectionContainer}>
      <HomeSectionTitle text={i18n.t("contributors")} />
      <HomeSectionContainer content={<Content />} />
    </View>
  );
};

export default ContributesSection;

const styles = StyleSheet.create({
  contributesSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
});
