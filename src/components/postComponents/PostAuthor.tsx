import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { User } from "../../types";
import MedButton from "../mini/MedButton";
import { myColors } from "../../constants/myColors";
import DuringSevenDaysAgo from "./DuringSevenDaysAgo";
import * as Notifications from "expo-notifications";
type Props = { user: User };
const PostAuthor = ({ user }: Props) => {
  const [followState, setFollowState] = useState(Math.random() < 0.5);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
  async function schedulePushNotification(user: User) {
    try {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got new follower",
          body: user.name + " " + "started following you",
          data: { data: "goes here" },
        },
        trigger: { seconds: 3 },
      });
    } catch (error) {
      console.log(error);
    }
  }
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
            <Text
            accessibilityRole="header"
            style={{ fontSize: 22, fontWeight: "700" }}>{user.name}</Text>
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
                onPress={async () => {
                  setFollowState(true);

                  await schedulePushNotification(user);
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
