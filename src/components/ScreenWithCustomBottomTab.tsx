import { StyleProp, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import CustomBottomTab from "./CustomBottomTab";
import { theme } from "../constants/theme";
import { useSharedValue } from "react-native-reanimated";
import MyCustomModal from "./myCustomModal/MyCustomModal";

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
        <MyCustomModal sharedValue={sv} finalTop={0} Content={backUpContent} />
      )}
      <CustomBottomTab
        sharedValue={backUpContent ? sv : undefined}
        components={CustomBottomTabComponents}
      />
    </View>
  );
};

export default ScreenWithCustomBottomTab;
