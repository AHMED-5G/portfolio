import React, { FunctionComponent } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";

interface Header {
  circles?: boolean;
  back?: boolean;
  drawer?: boolean;
}

const EmptyHeader: FunctionComponent<Header> = ({ ...props }) => {
  const navigation = useNavigation();
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <>
      <View
        style={{
          height: height / 4,
          marginVertical: -40,
        }}
      >
        {props.circles && (
          <>
            <View
              style={{
                backgroundColor: "#8AE7E1",
                opacity: 0.35,
                borderRadius: 100,
                height: 170,
                width: 170,
                marginVertical: -60,
                marginLeft: 34,
                position: "absolute",
              }}
            />
            <View
              style={{
                backgroundColor: "#2CC3CD",
                opacity: 0.35,
                borderRadius: 100,
                height: 170,
                width: 170,
                marginVertical: -30,
                marginLeft: -60,
                position: "absolute",
              }}
            />
          </>
        )}
      </View>
      <View
        style={{
          width: 40,
          position: "absolute",
          marginVertical: 40,
          marginLeft: 20,
          zIndex: 1,
        }}
      >
        {props.back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        )}
        {props.drawer && (
          <TouchableOpacity style={{}} onPress={() => {}}>
            {/* <TouchableOpacity style={{}} onPress={() => navigation.openDrawer()}> */}
            <Icon
              name="menu"
              size={24}
              color="black"
              style={{ padding: 4, marginLeft: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default EmptyHeader;
