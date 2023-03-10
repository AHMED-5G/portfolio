import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { contributors } from "../../../dummy/Contributors";
import { i18n } from "../../translation/i18n";
import { RootStackParamList, Contributor } from "../../types";
import { shuffleArray } from "../../utils/helperFunctions";
import ContributorCard from "../ContributorCard";
import HomeSectionTitle from "./HomeSectionTitle";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const ContributesSection = ({ navigation }: Props) => {
  return (
    <View style={styles.contributesSectionContainer}>
      <HomeSectionTitle text={i18n.t("contributors")} />

      <View style={{ marginLeft: 10 }}>
        <FlatList
          data={shuffleArray(contributors)}
          horizontal
          renderItem={({ item }) => <ContributorCard contributor={item} />}
          keyExtractor={(item: Contributor) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ContributesSection;

const styles = StyleSheet.create({
  contributesSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "auto",
  },
});
