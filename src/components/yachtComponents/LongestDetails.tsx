import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";
import {
  averageRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";

const LongestDetails = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.cardBackground() },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(22),
              fontWeight: "bold",
            }}
          >
            32
          </Text>
          <Text
            style={{
              marginLeft: 4,
              color: theme.cardText(),
              fontSize: fontRatio(18),
              fontWeight: "500",
              lineHeight: fontRatio(32),
            }}
          >
            m
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(18),
              fontWeight: "500",
            }}
          >
            Length
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.cardBackground() },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(22),
              fontWeight: "bold",
            }}
          >
            2019
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(18),
              fontWeight: "500",
            }}
          >
            Built
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.cardBackground() },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(22),
              fontWeight: "bold",
            }}
          >
            €7,800,000
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.cardText(),
              fontSize: fontRatio(18),
              fontWeight: "500",
            }}
          >
            Price
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LongestDetails;

const styles = StyleSheet.create({
  cardContainer: {
    width: wwrosw(120),
    height: hwrosh(100),
    margin: averageRatio(5),
    borderRadius: averageRatio(10),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
