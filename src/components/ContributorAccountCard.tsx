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

type Props = {
  account: ContributorAccount;
};

const getIconByAccountType = (
  accountType: AccountTypes,
  color: string | OpaqueColorValue = "black",
  size: number | undefined = 34
) => {
  switch (accountType) {
    case AccountTypes.Facebook:
      return <AntDesign name="facebook-square" size={size} color="#4267B2" />;
      break;

    case AccountTypes.Behance:
      return <AntDesign name="behance" size={size} color="#053eff" />;
      break;

    case AccountTypes.Dribbble:
      return <AntDesign name="dribbble" size={size} color="#ea4c89" />;
      break;
    case AccountTypes.Github:
      return <AntDesign name="github" size={size} color="#171515" />;
      break;
    case AccountTypes.LinkedIn:
      return <AntDesign name="linkedin-square" size={size} color="#0A66C2" />;
      break;
    case AccountTypes.Twitter:
      return <AntDesign name="twitter" size={size} color="#1DA1F2" />;
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
    >
      <Text>{getIconByAccountType(account.type)}</Text>
    </TouchableOpacity>
  );
};

export default ContributorAccountCard;

const styles = StyleSheet.create({});
