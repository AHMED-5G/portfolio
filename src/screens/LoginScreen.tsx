import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { height, hwrosh, width, wwrosw } from "../constants/Layout";
import { theme } from "../constants/theme";
import CustomTextInput from "../components/mini/CustomTextInput";
import { supabase } from "../../lib/supabase";
import {
  validateEmail,
  validateShortTextLength,
} from "../components/mini/validations";
import MedButton from "../components/mini/MedButton";
import LoadingIndicator from "../components/mini/LoadingIndicator";
import FormComponentWithLabel from "../components/FormComponentWithLabel";
import { showToast } from "../utils/helperFunctions";
import { useNavigation } from "@react-navigation/native";
import { i18n } from "../translation/i18n";

const LoginScreen = () => {
  const navigation = useNavigation();
  const Title = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: theme.fontSize.s18,
            fontWeight: "bold",
            color: theme.baseTextColor(),
          }}
        >
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

      setLoading(false);
      if (error)
        return showToast(error.message, theme.alertWarningColor as string);
      showToast(i18n.t("loginSuccess"), theme.alertSuccessColor as string);
      navigation.navigate("Home");
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

    const [disableAction, setDisableAction] = useState(true);

    useEffect(() => {
      const emailValidationResult = validateEmail(email);
      const passwordValidationResult = validateShortTextLength(password, 6);
      const disableAction =
        emailValidationResult == "" && passwordValidationResult == "";

      if (disableAction) {
        setDisableAction(false);
      } else setDisableAction(true);
    }, [email, password]);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FormComponentWithLabel
            label="Email"
            CustomTextInput={
              <CustomTextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                validationFunctions={[() => validateEmail(email)]}
                autoCapitalize="none"
                value={email}
              />
            }
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FormComponentWithLabel
            label="Password"
            CustomTextInput={
              <CustomTextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                validationFunctions={[
                  () => validateShortTextLength(password, 6),
                ]}
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
              />
            }
          />
        </View>
        <View style={{ marginTop: hwrosh(40), width: 0.8 * width }}>
          {!loading ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <MedButton
                disabled={disableAction}
                style={styles.btnStyle}
                title="Login"
                onPress={() => signInWithEmail()}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
              <MedButton
                disabled={disableAction}
                style={styles.btnStyle}
                title="Sign Up"
                onPress={() => signUpWithEmail()}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
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
      backUpContent={
        <View style={{ height: height / 3 }}>
          <Text>Login help</Text>
        </View>
      }
      content={<Content />}
      CustomBottomTabComponents={<Title key={"title"} />}
    />
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  btnStyle: {
    width: wwrosw(120),
    borderRadius: theme.borderRadius,
  },
});
