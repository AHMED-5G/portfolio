import {
  FlatList,
  FlatListProps,
  FlexStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { theme } from "../../constants/myColors";

interface MyFlatListInterface<ItemT = any> extends FlatListProps<ItemT> {
  RenderItemComponent: (item: ItemT) => JSX.Element;
  marginValue?: FlexStyle["marginRight"] | FlexStyle["marginLeft"];
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
      inverted={theme.localizationRtl ?? true}
      renderItem={({ item, index }) => {
        return (
          <View
            style={[
              {
                marginRight: !theme.localizationRtl ? marginValue ?? 15 : 0,
                marginLeft: theme.localizationRtl ? marginValue ?? 15 : 0,
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
