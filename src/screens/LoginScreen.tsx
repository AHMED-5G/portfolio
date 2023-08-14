import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { fontRatio, hwrosh } from "../constants/Layout";
import { theme } from "../constants/myColors";
import CustomTextInput from "../components/mini/CustomTextInput";
import { supabase } from "../../lib/supabase";
import {
  validateEmail,
  validateShortTextLength,
} from "../components/mini/validations";
import MedButton from "../components/mini/MedButton";
import LoadingIndicator from "../components/mini/LoadingIndicator";

const LoginScreen = () => {
  const Title = () => {
    return (
      <View>
        <Text style={{ fontSize: fontRatio(18), color: theme.baseTextColor() }}>
          Login
        </Text>
      </View>
    );
  };
  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
      setLoading(false);
    }
    async function signUpWithEmail() {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      setLoading(false);
    }

    return (
      <ScrollView style={styles.container}>
        <View style={[styles.verticallySpaced]}>
          <CustomTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            validationFunctions={[() => validateEmail(email)]}
            autoCapitalize="none"
          />
        </View>
        <View style={[styles.verticallySpaced]}>
          <CustomTextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            keyboardType="email-address"
            validationFunctions={[() => validateShortTextLength(email, 6)]}
            autoCapitalize="none"
          />
        </View>
        <View style={{ marginTop: hwrosh(40) }}>
          {!loading ? (
            <View style={{ flexDirection: "row" }}>
              <MedButton title="Login" onPress={() => signInWithEmail()} />
              <MedButton title="Sign Up" onPress={() => signUpWithEmail()} />
            </View>
          ) : (
            <LoadingIndicator />
          )}
        </View>
      </ScrollView>
    );
  };
  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      CustomBottomTabComponents={<Title key={"title"} />}
    />
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {},
  verticallySpaced: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 40,
  },
});
