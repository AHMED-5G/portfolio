import React, { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, View } from "react-native";
import { supabase } from "../../../lib/supabase";
import FormTextInput from "../mini/FormTextInput";
import CustomTextInput from "../mini/CustomTextInput";
import { validateEmail } from "../mini/validations";

export default function LoginComponent() {
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
  const [validationsErrors, setValidationsErrors] = useState(["error"]);

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <CustomTextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          validations={[() => setValidationsErrors([validateEmail(email)])]}
          validationErrors={validationsErrors}
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
}

const styles = StyleSheet.create({
  container: {},
  verticallySpaced: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  mt20: {
    marginTop: 20,
  },
});
