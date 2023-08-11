import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { HorseInAuction } from "../../types";
import { myColors } from "../../constants/myColors";
import { MaterialIcons,Feather } from "@expo/vector-icons";
import { width } from "../../constants/Layout";
import BiderCard from "./BiderCard";

type Props = {
  auction: HorseInAuction;
};

const AuctionCard = ({ auction }: Props) => {
  const [timerDisplay, setTimerDisplay] = useState("");

  useEffect(() => {
    startTimer(auction.timeRemindingInSeconds);
  }, []);

  function startTimer(duration: number) {
    let timer = duration;
    let minutes: number;
    let seconds: number;
    const interval = setInterval(function () {
      const mm = (timer / 60) as unknown as string;
      const ss = (timer % 60) as unknown as string;
      minutes = parseInt(mm, 10);
      seconds = parseInt(ss, 10);

      minutes = minutes < 10 ? 0 + minutes : minutes;
      seconds = seconds < 10 ? 0 + seconds : seconds;

      setTimerDisplay(minutes + ":" + seconds + " s");

      if (--timer < 0) {
        timer = duration;
        setTimerDisplay("");
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#8d1a45",
        marginBottom: 25,
        padding: 5,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.horseDataContainer}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          // source={{ uri: auction.horse.image }}
          source={{ uri: auction.horse }}
          style={{ height: 120, borderRadius: 10, width: width / 2 }}
        />
      </View>
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
            {timerDisplay && (
              <>
                <View>
                  <Feather name="clock" size={20} color={myColors.orange} />
                </View>
                <View>
                  <Text>{timerDisplay} remaining</Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",

          width: "80%",
          backgroundColor: myColors.grey5,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            margin: 5,
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons
                name="circle"
                color={timerDisplay ? myColors.orange : myColors.black}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 6,
                }}
              >
                {timerDisplay ? "Live Auction" : "Sold"}
              </Text>
            </View>
          </View>
          <View>
            <Text>{auction.bids.length} bids made</Text>
          </View>
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
  horseDataContainer: {},
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
