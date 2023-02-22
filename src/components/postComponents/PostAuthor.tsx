import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { User } from "../../types";
import MedButton from "../mini/MedButton";
import { myColors } from "../../constants/Colors";
import DuringSevenDaysAgo from "./DuringSevenDaysAgo";

type Props = { user: User };
const PostAuthor = ({ user }: Props) => {
  const [followState, setFollowState] = useState(Math.random() < 0.5);

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffefd5",
          width: "100%",
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          elevation: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            alignContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user.image }}
              style={{ width: 50, height: 50, borderRadius: 50, margin: 10 }}
            />
            <Text style={{ fontSize: 22, fontWeight: "700" }}>{user.name}</Text>
          </View>
          <View
            style={{
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!followState ? (
              <MedButton
                title="Follow"
                onPress={() => {
                  setFollowState(true);
                }}
                accessibilityHint={"Follow" + user.name}
                width={100}
                style={{ height: 48, borderRadius: 10 }}
                textStyle={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: myColors.black,
                }}
              />
            ) : (
              <MedButton
                title="Unfollow"
                onPress={() => {
                  setFollowState(false);
                }}
                accessibilityHint={"unfollow" + user.name}
                width={100}
                style={{
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: myColors.white,
                }}
                textStyle={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: myColors.black,
                }}
              />
            )}
          </View>
        </View>
      </View>
      <DuringSevenDaysAgo />
    </View>
  );
};

export { PostAuthor };

const styles = StyleSheet.create({});
