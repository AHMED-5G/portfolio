import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactElement, useEffect, useState } from "react";
import { averageRatio, hwrosh, width } from "../../constants/Layout";
import { theme } from "../../constants/theme";

interface CustomTextInputInterface extends TextInputProps {
  validationFunctions?: (() => string)[];
  containerStyle?: ViewStyle;
  icon?: ReactElement;
  keepExample?: boolean;
}

const CustomTextInput = ({
  validationFunctions,
  containerStyle,
  icon,
  keepExample,
  ...props
}: CustomTextInputInterface) => {
  const [validationErrors, setValidationsError] = useState<string[]>([]);

  const handleBlur = () => {
    if (validationFunctions) {
      const errors = validationFunctions.map((fun) => fun()).filter(Boolean);
      setValidationsError(errors);
    }
  };

  const textInputHeight = hwrosh(55);
  const validationErrorSpace = hwrosh(35);

  useEffect(() => {
    if (props.value?.length) handleBlur();
    else setValidationsError([]);
  }, [props.value]);

  const [onFocusStatus, setOnFocusStatus] = useState(false);

  return (
    <View>
      {keepExample && onFocusStatus && (
        <Text style={{ color: theme.baseTextColor(0.5) }}>
          {props.placeholder}
        </Text>
      )}
      <View
        style={[
          {
            width: 0.8 * width,
            height: validationErrorSpace + textInputHeight,
            borderRadius: averageRatio(8),
            marginBottom: hwrosh(5),
          },
          containerStyle,
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
          <KeyboardAvoidingView style={{}}>
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
          {validationErrors.length > 0 &&
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
    </View>
  );
};

export default CustomTextInput;
