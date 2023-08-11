import React from "react";
import { StyleSheet, View } from "react-native";
import { contributors } from "../../../dummy/Contributors";
import { i18n } from "../../translation/i18n";
import { Contributor } from "../../types";
import { shuffleArray } from "../../utils/helperFunctions";
import ContributorCard from "../ContributorCard";
import HomeSectionTitle from "./HomeSectionTitle";
import HomeSectionContainer from "./HomeSectionContainer";
import { FlatListWithRectangleIndicator } from "react-native-flatlist-withindicator";
import { wwrosw } from "../../constants/Layout";
// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Home">;
// };

const ContributesSection = () => {
  const Content = () => {
    return (
      <View>
        <FlatListWithRectangleIndicator
          data={shuffleArray(contributors)}
          renderItem={({ item }: { item: Contributor }) => {
            return <ContributorCard contributor={item} />;
          }}
          keyExtractor={(item: Contributor) => item.id.toString()}
          cardWidthPlusMarginValue={wwrosw(160) + wwrosw(10)}
          animationScaleFactor={0.5}
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
