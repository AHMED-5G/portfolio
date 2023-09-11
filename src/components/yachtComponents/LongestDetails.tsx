import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { theme } from "../../constants/theme";
import {
  averageRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";

const LongestDetails = () => {
  const FirstCard = (): ReactNode => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: theme.fontSize.s22,
              fontWeight: "bold",
            }}
          >
            32
          </Text>
          <Text
            style={{
              marginLeft: 4,
              color: theme.cardText(),
              fontSize: theme.fontSize.s18,
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
              fontSize: theme.fontSize.s18,
              fontWeight: "500",
            }}
          >
            Length
          </Text>
        </View>
      </>
    );
  };

  const SecondCard = (): ReactNode => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: theme.fontSize.s22,
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
              fontSize: theme.fontSize.s18,
              fontWeight: "500",
            }}
          >
            Built
          </Text>
        </View>
      </>
    );
  };

  const ThirdCard = (): ReactNode => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: theme.cardText(),
              fontSize: theme.fontSize.s22,
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
              fontSize: theme.fontSize.s18,
              fontWeight: "500",
            }}
          >
            Price
          </Text>
        </View>
      </>
    );
  };

  const cards = [
    {
      component: <FirstCard />,
    },
    {
      component: <SecondCard />,
    },
    {
      component: <ThirdCard />,
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {cards.map((card, index) => {
        return (
          <View
            key={index}
            style={[
              styles.cardContainer,
              {
                width: wwrosw(120),
                height: hwrosh(100),
                margin: averageRatio(5),
                borderRadius: averageRatio(10),
                backgroundColor: theme.cardBackground(),
              },
            ]}
          >
            {card.component}
          </View>
        );
      })}
    </View>
  );
};

export default LongestDetails;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
