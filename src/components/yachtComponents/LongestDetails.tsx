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
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 10,
          borderWidth: 0.5,
          backgroundColor: theme.secondary,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.secondaryText,
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            32
          </Text>
          <Text
            style={{
              marginLeft: 4,
              color: theme.secondaryText,
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
              color: theme.secondaryText,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Length
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 120,
          height: 120,
          marginLeft: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          backgroundColor: theme.secondary,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.secondaryText,
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
              color: theme.secondaryText,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Built
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 120,
          height: 120,
          marginLeft: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          backgroundColor: theme.secondary,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.secondaryText,
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
              color: theme.secondaryText,
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

const styles = StyleSheet.create({});
