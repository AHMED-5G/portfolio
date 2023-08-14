import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { fontRatio } from "../constants/Layout";
import { theme } from "../constants/myColors";
import CustomTextInput from "../components/mini/CustomTextInput";
import { supabase } from "../../lib/supabase";
import FormTextInput from "../components/mini/FormTextInput";
import { validateEmail } from "../components/mini/validations";

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
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <CustomTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            validationFunctions={[() => validateEmail(email)]}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <FormTextInput
            placeholder="password"
            setText={setPassword}
            value={password}
            secure
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View>
      </ScrollView>
    );
  };
  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      CustomBottomTabComponents={[<Title key={"title"} />]}
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
  mt20: {
    marginTop: 20,
  },
});
