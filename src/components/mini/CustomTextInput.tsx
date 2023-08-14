import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { averageRatio, hwrosh, width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";

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
  return (
    <View
      style={[
        {
          width: 0.8 * width,
          height: hwrosh(85),
          borderRadius: averageRatio(8),
        },
        containerStyle,
      ]}
    >
      <KeyboardAvoidingView>
        <TextInput
          {...props}
          style={[
            {
              height: hwrosh(85),
              backgroundColor: theme.cardBackground(),
              borderRadius: averageRatio(8),
              borderWidth: 1,
              borderColor: theme.borderColor,
              padding: averageRatio(5),
              color: theme.baseTextColor(),
            },
            props.style,
          ]}
          onBlur={handleBlur}
        />
      </KeyboardAvoidingView>
      <View style={{ flexDirection: "row" }}>
        {validationErrors.length > 0 &&
          validationErrors.map((error, index) => {
            return (
              <View key={index} style={{ flexDirection: "row" }}>
                {index > 0 && (
                  <Text key={index.toString() + ","} style={styles.warnText}>
                    {", "}
                  </Text>
                )}
                <Text key={index} style={styles.warnText}>
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
const styles = StyleSheet.create({
  warnText: {
    color: theme.textError(),
  },
});
