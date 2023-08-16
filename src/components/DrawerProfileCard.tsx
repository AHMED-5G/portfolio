import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../constants/theme";
import { circularRatio, fontRatio, hwrosh, wwrosw } from "../constants/Layout";
import MyText from "./MyText";
import {
  getRandomOneItemFromList,
  randomIntNumber,
} from "../utils/helperFunctions";
import { users } from "../../dummy/Users";
import { images } from "../../dummy/images";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

const DrawerProfileCard = () => {
  const imageRadius = circularRatio(60);
  const userName = getRandomOneItemFromList(users).name;
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          resizeMode="center"
          style={{
            width: imageRadius,
            height: imageRadius,
            borderRadius: imageRadius,
          }}
          source={{
            uri: getRandomOneItemFromList(images),
          }}
        />
        <MyText
          text={userName}
          style={{
            fontSize: fontRatio(22),
            fontWeight: "bold",
            color: theme.baseTextColor(),
          }}
        />
        <MyText
          text={
            session?.user.email ??
            "@" + getRandomOneItemFromList(users).name + randomIntNumber(80)
          }
          style={{ fontSize: fontRatio(10), color: theme.baseTextColor() }}
        />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: wwrosw(70),
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          size={circularRatio(37)}
          color={theme.iconColor()}
          disabled
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerProfileCard;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: hwrosh(10),
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
