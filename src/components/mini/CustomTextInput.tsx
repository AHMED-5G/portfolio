import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import { averageRatio, hwrosh, width } from "../../constants/Layout";
import { theme } from "../../constants/theme";

interface CustomTextInputInterface extends TextInputProps {
  validationFunctions?: (() => string)[];
  containerStyle?: ViewStyle;
}

const CustomTextInput = ({
  validationFunctions,
  containerStyle,

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
  }, [props.value]);

  return (
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
      <KeyboardAvoidingView>
        <TextInput
          {...props}
          style={[
            {
              height: hwrosh(55),
              backgroundColor: theme.cardBackground(),
              borderRadius: averageRatio(8),
              borderWidth: 1,
              borderColor: theme.borderColor,
              padding: averageRatio(5),
            },
            props.style,
          ]}
          placeholderTextColor={theme.baseTextColor(0.7)}
        />
      </KeyboardAvoidingView>
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
  );
};

export default CustomTextInput;
