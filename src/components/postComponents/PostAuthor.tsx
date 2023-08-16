import {  Text, View, Image } from "react-native";
import React, { useState } from "react";
import { User } from "../../types";
import MedButton from "../mini/MedButton";
import { theme } from "../../constants/theme";
import DuringSevenDaysAgo from "./DuringSevenDaysAgo";
import * as Notifications from "expo-notifications";
import SkeletonLoader from "expo-skeleton-loader";
import { i18n } from "../../translation/i18n";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";
type Props = { user: User };
const PostAuthor = ({ user }: Props) => {
  const authImageRadius = circularRatio(50);
  const [followState, setFollowState] = useState(Math.random() < 0.5);
  const [authImageLoading, setAuthImageLoading] = useState(false);
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
  function SkeltonItem() {
    return (
      <SkeletonLoader boneColor="#EEE" highlightColor="#acc7d2" duration={1000}>
        <SkeletonLoader.Item
          style={{
            width: authImageRadius,
            height: authImageRadius,
            borderRadius: authImageRadius / 2,
            marginRight: wwrosw(20),
          }}
        />
      </SkeletonLoader>
    );
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
          backgroundColor: theme.cardBackground(),
          width: "100%",
          borderRadius: averageRatio(10),
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
            <View>
              {authImageLoading && (
                <View
                  style={{
                    position: "absolute",
                    width: authImageRadius,
                    height: authImageRadius,
                    borderRadius: authImageRadius,
                    margin: 10,
                    zIndex: 1,
                  }}
                >
                  <SkeltonItem />
                </View>
              )}
              <Image
                onLoadStart={() => {
                  setAuthImageLoading(true);
                }}
                onLoad={() => {
                  setAuthImageLoading(false);
                }}
                onLoadEnd={() => {
                  setAuthImageLoading(false);
                }}
                style={{
                  width: authImageRadius,
                  height: authImageRadius,
                  borderRadius: authImageRadius,
                  margin: averageRatio(10),
                }}
                source={{ uri: user.image }}
              />
            </View>
            <Text
              accessibilityRole="header"
              style={{
                fontSize: fontRatio(22),
                fontWeight: "700",
                color: theme.primaryText(),
              }}
            >
              {user.name}
            </Text>
          </View>
          <View
            style={{
              marginRight: wwrosw(10),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!followState ? (
              <MedButton
                title={i18n.t("follow")}
                onPress={async () => {
                  setFollowState(true);
                  await schedulePushNotification(user);
                }}
                color={theme.white}
                accessibilityHint={"Follow" + user.name}
                width={wwrosw(100)}
                style={{
                  height: hwrosh(48),
                  borderRadius: averageRatio(10),
                  backgroundColor: theme.cardBackground(),
                }}
                textStyle={{
                  fontSize: fontRatio(16),
                  fontWeight: "700",
                  color: theme.baseTextColor(),
                }}
              />
            ) : (
              <MedButton
                title={i18n.t("unFollow")}
                onPress={() => {
                  setFollowState(false);
                }}
                accessibilityHint={"unfollow" + user.name}
                width={wwrosw(100)}
                style={{
                  height: hwrosh(48),
                  // borderRadius: 10,
                  backgroundColor: theme.cardBackground(),
                }}
                textStyle={{
                  fontSize: fontRatio(16),
                  fontWeight: "700",
                  color: theme.baseTextColor(),
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
