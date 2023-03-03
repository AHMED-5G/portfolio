import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Bid, HorseInAuction } from "../../types";

import Feather from "@expo/vector-icons/build/Feather";
import { myColors } from "../../constants/myColors";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { width } from "../../constants/Layout";
import TimeAgo from "react-native-timeago";
import BiderCard from "./BiderCard";

type Props = {
  auction: HorseInAuction;
};

const AuctionCard = ({ auction }: Props) => {
  const [timerDisplay, setTimerDisplay] = useState("");

  useEffect(() => {
    startTimer(auction.timeRemindingInSeconds);
  }, []);
  function startTimer(duration: any) {
    let timer = duration;
    let minutes: number;
    let seconds: number;
    let interval = setInterval(function () {
      let mm = (timer / 60) as unknown as string;
      let ss = (timer % 60) as unknown as string;
      minutes = parseInt(mm, 10);
      seconds = parseInt(ss, 10);

      minutes = minutes < 10 ? 0 + minutes : minutes;
      seconds = seconds < 10 ? 0 + seconds : seconds;

      setTimerDisplay(minutes + ":" + seconds + "s");

      if (--timer < 0) {
        timer = duration;
        // setCodeRequested(false);
        setTimerDisplay("");
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <View
      style={{
        borderRadius: 10,

        backgroundColor: myColors.AzureX11,
        marginBottom: 15,
      }}
    >
      <View style={styles.bidDataContainer}>
        <View style={styles.leftSection}>
          <View>
            <Text style={styles.sectionHeadText}>Starting Price</Text>
          </View>
          <View>
            <Text style={styles.sectionNumberText}>
              ${auction.startingPrice}
            </Text>
          </View>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.rightSection}>
          <View>
            <View>
              <Text style={styles.sectionHeadText}>Current Bid Price</Text>
            </View>
            <View>
              <Text style={styles.sectionNumberText}>
                ${auction.currentBidPrice()}k
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View>
              <Feather name="clock" size={24} color={myColors.orange} />
            </View>
            <View>
              <Text>{timerDisplay} remaining</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <MaterialIcons name="circle" color={myColors.orange} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 6,
                // fontFamily: "BalsamiqSans_700Bold",
              }}
            >
              Live Auction
            </Text>
          </View>
        </View>
        <View>
          <Text>{auction.bids.length} bids made</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={auction.bids}
          renderItem={({ item }) => {
            return <BiderCard bid={item} />;
          }}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AuctionCard;

const styles = StyleSheet.create({
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  bidDataContainer: {
    backgroundColor: "#F3F2F2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  leftSection: {
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  rightSection: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  sectionHeadText: {
    fontSize: 16,
    fontWeight: "800",
    // fontFamily: "BalsamiqSans_700Bold",
  },
  sectionNumberText: {
    fontSize: 16,
    fontWeight: "800",
    // fontFamily: "BalsamiqSans_700Bold",
  },
});
