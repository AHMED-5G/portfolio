import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { myColors } from "../../constants/myColors";

type Props = {};

const TabBarFooter = (props: Props) => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ToggleSwitch
          isOn={switchState}
          onColor={myColors.sky}
          offColor="black"
          label="Night Mood"
          icon={<Entypo name="moon" size={24} color="black" />}
          labelStyle={{ color: "black", fontWeight: "500", fontSize: 15 }}
          size="large"
          onToggle={(isOn) => setSwitchState(isOn)}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Log Out</Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="logout" size={40} color="black" />
        </View>
      </View>
    </View>
  );
};

export default TabBarFooter;

const styles = StyleSheet.create({});
