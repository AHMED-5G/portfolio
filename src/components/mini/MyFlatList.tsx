import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { theme } from "../../constants/myColors";

interface MyFlatListInterface<ItemT = any> extends FlatListProps<ItemT> {
  RenderItemComponent: (item: ItemT) => JSX.Element;
  marginValue?: number;
  localizationContainerStyle?: StyleProp<ViewStyle>;
}

const MyFlatList = ({
  RenderItemComponent,
  marginValue,
  localizationContainerStyle,
  ...props
}: MyFlatListInterface) => {
  return (
    <FlatList
      {...props}
      contentContainerStyle={[
        {
          // flexDirection: theme.localizationFlexDirection,
        },
        props.contentContainerStyle,
      ]}
      inverted={theme.localizationFlexDirection == "row" ? false : true}
      renderItem={({ item, index }) => {
        return (
          <View
            style={[
              {
                marginRight:
                  theme.localizationFlexDirection == "row"
                    ? marginValue ?? 15
                    : 0,
                marginLeft:
                  theme.localizationFlexDirection == "row-reverse"
                    ? marginValue ?? 15
                    : 0,
              },
              localizationContainerStyle,
            ]}
          >
            {<RenderItemComponent {...{ item, index }} />}
          </View>
        );
      }}
    />
  );
};

export default MyFlatList;

const styles = StyleSheet.create({});
