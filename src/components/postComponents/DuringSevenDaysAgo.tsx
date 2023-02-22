import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TimeAgo from "react-native-timeago";
import { getRandomInt } from "../../utils/helperFunctions";

type Props = {};

const DuringSevenDaysAgo = (props: Props) => {
  const [duringSevenDaysAgo, setDuringSevenDaysAgo] = useState(
    Math.floor(+new Date() / 1000) - getRandomInt(1, 7) * 24 * 60 * 60
  );
  return (
    <View
      style={{
        backgroundColor: "#ffefd5",
        alignSelf: "flex-start",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
        style={{ alignItems: "flex-start", marginLeft: 12, marginRight: 12 }}
      >
        <Text style={{ fontWeight: "500" }}>
          {<TimeAgo time={new Date(duringSevenDaysAgo * 1000)} />}
        </Text>
      </View>
    </View>
  );
};

export default DuringSevenDaysAgo;

const styles = StyleSheet.create({});
