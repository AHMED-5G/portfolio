import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";

type Props = {};

const LongestDetails = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        // alignItems: "center",
      }}
    >
      <View         style={[
          styles.cardContainer,
          { backgroundColor: theme.cardBackground() },
        ]}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            32
          </Text>
          <Text
            style={{
              marginLeft: 4,
              color: theme.cardText(),
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 32,
            }}
          >
            m
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.cardText(),
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Length
          </Text>
        </View>
      </View>
      <View         style={[
          styles.cardContainer,
          { backgroundColor: theme.cardBackground() },
        ]}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: 22,
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
              fontSize: 18,
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
              fontSize: 22,
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
              fontSize: 18,
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
    width: 120,
    height: 100,
    margin: 5,
    borderRadius: 10,

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
