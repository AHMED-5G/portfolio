import {
  OpaqueColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AccountTypes, Contributor, ContributorAccount } from "../types";
import { AntDesign } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { getContributorAccountName } from "../utils/helperFunctions";

type Props = {
  account: ContributorAccount;
  color?: string | OpaqueColorValue;
  size?: number | undefined;
};

const getIconByAccountType = ({
  account,
  color = "black",
  size = 48,
}: Props) => {
  switch (account.type) {
    case AccountTypes.Facebook:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"facebook" + account.name}
          name="facebook-square"
          size={size}
          color="#4267B2"
        />
      );
      break;

    case AccountTypes.Behance:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"behance" + account.name}
          name="behance"
          size={size}
          color="#053eff"
        />
      );
      break;

    case AccountTypes.Dribbble:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"dribbble" + account.name}
          name="dribbble"
          size={size}
          color="#ea4c89"
        />
      );
      break;
    case AccountTypes.Github:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"github" + account.name}
          name="github"
          size={size}
          color="#171515"
        />
      );
      break;
    case AccountTypes.LinkedIn:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"linkedin" + account.name}
          name="linkedin-square"
          size={size}
          color="#0A66C2"
        />
      );
      break;
    case AccountTypes.Twitter:
      return (
        <AntDesign
          accessibilityRole="button"
          accessibilityLabel={"twitter" + account.name}
          name="twitter"
          size={size}
          color="#1DA1F2"
        />
      );
      break;

    default:
      break;
  }
};
const ContributorAccountCard = ({ account }: Props) => {
  return (
    <TouchableOpacity
      style={{ margin: 5 }}
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

const styles = StyleSheet.create({});
