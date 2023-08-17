import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { averageRatio, hwrosh, theme, circularRatio } from "../../constants";
import * as Clipboard from "expo-clipboard";
import { ToastPositions, showToast } from "../../utils/helperFunctions";

type Props = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const PasswordInputIconsComponent = ({
  showPassword,
  password,
  setShowPassword,
  setPassword,
}: Props) => {
  const iconSize = circularRatio(24);
  const containerWidth = averageRatio(55);
  const containerHeight = hwrosh(55);
  const borderRadius = averageRatio(10);
  const iconColor = theme.iconColor();

  // fun to generate password length > 8 and contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character

  const generatePassword = () => {
    const passwordLength = 8;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    return password;
  };

  //copy to clipboard
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(password);
    showToast(
      "Password copied to clipboard",
      theme.alertSuccessColor as string,
      ToastPositions.Top,
    );
  };

  const handlePassword = () => {
    const removePasswordAndSetNew = async () => {
      setPassword("");
      await new Promise((resolve) => setTimeout(resolve, 100));
      setPassword(generatePassword());
    };

    removePasswordAndSetNew();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={[
          {
            width: containerWidth,
            height: containerHeight,
            borderRadius: borderRadius,
          },
          styles.iconContainerStyle,
        ]}
        onPress={() => copyToClipboard()}
      >
        <Ionicons
          disabled
          name="copy-outline"
          size={iconSize}
          color={!password ? theme.disableColor : iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            width: containerWidth,
            height: containerHeight,
            borderRadius: borderRadius,
          },
          styles.iconContainerStyle,
        ]}
        onPress={handlePassword}
      >
        <Entypo name="cycle" size={iconSize} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            width: containerWidth,
            height: containerHeight,
            borderRadius: borderRadius,
          },
          styles.iconContainerStyle,
        ]}
        onPress={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <Feather name="eye" size={iconSize} color={iconColor} />
        ) : (
          <Feather name="eye-off" size={iconSize} color={iconColor} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputIconsComponent;

const styles = StyleSheet.create({
  iconContainerStyle: {
    borderWidth: 0.5,
    borderColor: theme.borderColor,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
