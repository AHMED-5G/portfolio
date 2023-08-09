import { ColorValue, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AccountTypes, ContributorAccount } from "../types";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { getContributorAccountName } from "../utils/helperFunctions";
import { theme } from "../constants/myColors";
import { circularRatio, hwrosh, wwrosw } from "../constants/Layout";

type Props = {
  account: ContributorAccount;
  color?: string | ColorValue;
  size?: number | undefined;
};

const getIconByAccountType = ({
  account,
  color = "black",
  size = circularRatio(38),
}: Props) => {
  switch (account.type) {
    case AccountTypes.Facebook:
      return (
        <AntDesign
          name="facebook-square"
          accessibilityRole="button"
          accessibilityLabel={"facebook" + account.name}
          size={size}
          // color="#4267B2"
          color={theme.iconColor()}
        />
      );

    case AccountTypes.Behance:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"behance" + account.name}
          name="behance-square"
          size={size}
          // color="#053eff"
          color={theme.iconColor()}
        />
      );

    case AccountTypes.Dribbble:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"dribbble" + account.name}
          name="dribbble-square"
          size={size}
          // color="#ea4c89"
          color={theme.iconColor()}
        />
      );

    case AccountTypes.Github:
      return (
        <FontAwesome
          accessibilityRole="button"
          accessibilityLabel={"github" + account.name}
          name="github-square"
          size={size}
          // color="#171515"
          color={theme.iconColor()}
        />
      );

    case AccountTypes.LinkedIn:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"linkedin" + account.name}
          name="linkedin-square"
          size={size}
          // color="#0A66C2"
          color={theme.iconColor()}
        />
      );

    case AccountTypes.Twitter:
      return (
        <FontAwesome
          name="twitter-square"
          accessibilityRole="button"
          accessibilityLabel={"twitter" + account.name}
          size={size}
          // color="#1DA1F2"
          color={theme.iconColor()}
        />
      );

    default:
      break;
  }
};
const ContributorAccountCard = ({ account }: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: wwrosw(48),
        height: hwrosh(48),
        alignContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        Linking.openURL(account.url);
      }}
      accessibilityRole="button"
      accessibilityHint={getContributorAccountName(account.type)}
    >
      <Text>{getIconByAccountType({ account })}</Text>
    </TouchableOpacity>
  );
};

export default ContributorAccountCard;
