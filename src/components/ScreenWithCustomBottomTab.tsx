import { StyleProp, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import CustomBottomTab from "./CustomBottomTab";
import { theme } from "../constants/myColors";
import MyCustomModal from "./MyCustomModal";
import { useSharedValue } from "react-native-reanimated";
import { fontRatio } from "../constants/Layout";

type Props = {
  CustomBottomTabComponents?: ReactNode;
  content?: ReactNode;
  style?: StyleProp<ViewStyle>;
  backUpContent?: ReactNode;
};

const ScreenWithCustomBottomTab = ({
  CustomBottomTabComponents,
  content,
  style,
  backUpContent,
}: Props) => {
  const sv = backUpContent ? useSharedValue(0) : undefined;

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: theme.baseBackground(),
        },
        style,
      ]}
    >
      {content}
      {sv && (
        <MyCustomModal
          title={
            <View>
              <Text
                style={{
                  fontSize: fontRatio(18),
                  fontWeight: "bold",
                  color: theme.baseTextColor(),
                }}
              >
                Help
              </Text>
            </View>
          }
          sharedValue={sv}
          finalTop={0}
          Content={backUpContent}
        />
      )}
      <CustomBottomTab
        sharedValue={backUpContent ? sv : undefined}
        components={CustomBottomTabComponents}
      />
    </View>
  );
};

export default ScreenWithCustomBottomTab;
