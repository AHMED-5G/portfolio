import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { averageRatio, hwrosh, width } from "../../constants/Layout";
import { theme } from "../../constants/theme";

interface CustomTextInputInterface extends TextInputProps {
  containerStyle?: ViewStyle;
  textInputContainerStyle?: ViewStyle;
  icon?: ReactElement;
  showExample?: boolean;
  iconsView?: ReactNode;
  validationErrors?: string[];
}

const CustomTextInput = ({
  containerStyle,
  textInputContainerStyle,
  icon,
  showExample,
  iconsView,
  validationErrors,
  ...props
}: CustomTextInputInterface) => {
  const [displayExample, setDisplayExample] = useState(false);

  const handleBlur = () => {
    // if (validationFunctions) {
    // const errors = validationFunctions.map((fun) => fun()).filter(Boolean);
    // setValidationsError(errors);
    // }
  };

  const textInputHeight = hwrosh(55);
  const validationErrorSpace = hwrosh(35);
  const [onFocusStatus, setOnFocusStatus] = useState(false);

  useEffect(() => {
    if (props.value?.length) {
      handleBlur();
      if (onFocusStatus && showExample) {
        setDisplayExample(true);
      } else {
        setDisplayExample(false);
      }
    } else {
      // setValidationsError([]);
      setDisplayExample(false);
    }
  }, [props.value, onFocusStatus]);

  return (
    <View style={{}}>
      <View>
        {displayExample && (
          <Text style={{ color: theme.secondaryColor() }}>
            {/* <Text style={{ color: theme.baseTextColor(0.5) }}> */}
            {props.placeholder}
          </Text>
        )}
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            width: 0.8 * width,
          },
          containerStyle,
        ]}
      >
        <View
          style={[
            {
              height: validationErrorSpace + textInputHeight,
              borderRadius: averageRatio(8),
              marginBottom: hwrosh(5),
              flex: 1,
            },
            textInputContainerStyle,
          ]}
        >
          <View
            style={{
              borderRadius: 5,
              flexDirection: "row",
              backgroundColor: theme.cardBackground(),
              alignItems: "center",
              borderWidth: 1,
              borderColor: theme.borderColor,
              width: "100%",
              overflow: "hidden",
              paddingHorizontal: averageRatio(5),
            }}
          >
            {icon}
            <KeyboardAvoidingView style={{ flex: 1 }}>
              <TextInput
                {...props}
                style={[
                  {
                    height: hwrosh(55),
                    backgroundColor: theme.cardBackground(),
                    borderRadius: averageRatio(8),
                    padding: averageRatio(5),
                  },
                  props.style,
                ]}
                placeholderTextColor={
                  props.placeholderTextColor ?? theme.baseTextColor(0.7)
                }
                onFocus={() => {
                  setOnFocusStatus(true);
                }}
                onBlur={() => {
                  setOnFocusStatus(false);
                }}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={{ flexDirection: "row" }}>
            {validationErrors &&
              validationErrors.length > 0 &&
              props.value &&
              props.value?.length > 0 &&
              validationErrors.map((error, index) => {
                return (
                  <View key={index} style={{ flexDirection: "row" }}>
                    {index > 0 && (
                      <Text
                        key={index.toString() + ","}
                        style={{ color: theme.textError() }}
                      >
                        {", "}
                      </Text>
                    )}
                    <Text key={index} style={{ color: theme.textError() }}>
                      {error}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
        <View>{iconsView}</View>
      </View>
    </View>
  );
};

export default CustomTextInput;
