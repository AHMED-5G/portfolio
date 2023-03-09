import {
  OpaqueColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AccountTypes, ContributorAccount } from "../types";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
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
  size = 38,
}: Props) => {
  switch (account.type) {
    case AccountTypes.Facebook:
      return (
        <AntDesign
          name="facebook-square"
          accessibilityRole="button"
          accessibilityLabel={"facebook" + account.name}
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
          name="behance-square"
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
          name="dribbble-square"
          size={size}
          color="#ea4c89"
        />
      );
      break;
    case AccountTypes.Github:
      return (
        <FontAwesome
          accessibilityRole="button"
          accessibilityLabel={"github" + account.name}
          name="github-square"
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
        <FontAwesome
          name="twitter-square"
          accessibilityRole="button"
          accessibilityLabel={"twitter" + account.name}
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
      style={{ width: 48, height: 48, }}
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
