import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { circularRatio, hwrosh, theme, wwrosw } from "../../constants";
import HelpSectionContainer from "../HelpSectionContainer";
import MedButton from "../mini/MedButton";
import Checkbox from "expo-checkbox";
const LoginBackUpComponent = () => {
  const iconSize = circularRatio(24);
  const iconColor = theme.iconColor();
  const copyIconDescription = `- When you tap on the copy icon, the password will be automatically copied to your device's clipboard.\n
- A confirmation or success message will be displayed to indicate that the password has been copied.\n
  `;

  const generatePasswordDescription = `- When you tap on the Generate Password icon, a new random password will be generated.\n
- The generated password will meet the specified criteria, such as length and complexity.\n`;
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={{ padding: 5 }}>
      <HelpSectionContainer
        titleComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Copy Password</Text>
            <Ionicons
              disabled
              style={{ marginLeft: wwrosw(10) }}
              name="copy-outline"
              size={iconSize}
              color={iconColor}
            />
          </View>
        }
        content={
          <View style={{ marginTop: hwrosh(5) }}>
            <Text style={styles.contentText}>{copyIconDescription}</Text>
          </View>
        }
      />
      <HelpSectionContainer
        titleComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Generate Password</Text>
            <Entypo
              name="cycle"
              size={iconSize}
              color={iconColor}
              style={{ marginLeft: wwrosw(10) }}
            />
          </View>
        }
        content={
          <View style={{ marginTop: hwrosh(5) }}>
            <Text style={styles.contentText}>
              {generatePasswordDescription}
            </Text>
          </View>
        }
      />
      <HelpSectionContainer
        titleComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Disable button</Text>
          </View>
        }
        content={
          <View style={{ marginTop: hwrosh(5) }}>
            <Text style={styles.contentText}>
              The button is currently disabled, indicated by its gray color. It
              will become active when all required inputs are correctly filled.
            </Text>
            <View style={{ marginTop: hwrosh(5), flexDirection: "row" }}>
              <MedButton
                disabled={true}
                style={styles.btnStyle}
                title="Login"
                onPress={() => {}}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
              <MedButton
                disabled={false}
                style={[styles.btnStyle, { marginLeft: 10 }]}
                title="Login"
                onPress={() => {}}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
            </View>
          </View>
        }
      />
      <HelpSectionContainer
        titleComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Report Bug</Text>
          </View>
        }
        content={
          <View style={{ marginTop: hwrosh(5) }}>
            <View style={{ flexDirection: "row" }}>
              <Checkbox value={isChecked} onValueChange={setChecked} />
              <Text style={[styles.contentText, { marginLeft: wwrosw(5) }]}>
                Attach screenshot
              </Text>
            </View>

            {/* Additional bug reporting form elements */}
          </View>
        }
      />
    </View>
  );
};

export default LoginBackUpComponent;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  titleText: {
    fontSize: theme.fontSize.large,
    fontWeight: "700",
  },
  contentText: { fontSize: theme.fontSize.medium, fontWeight: "400" },
  btnStyle: {
    width: wwrosw(120),
    borderRadius: theme.borderRadius,
  },
});
