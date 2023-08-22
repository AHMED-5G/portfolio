//https://blog.theodo.com/2023/03/supabase-reset-password-rn/
//https://github.com/supabase/supabase/issues/5663
//npx uri-scheme open exp://10.0.2.2:8081/--/login --android

// npx uri-scheme open "exp://10.0.2.2:8081/--/login#access_token=eyJhU&expires_in=3600&refresh_token=hFEuaYjXLOW2uszlOFexCg&token_type=bearer&type=recovery" --android

import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
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
import PasswordInputIconsComponent from "../components/loginComponents/PasswordInputIconsComponent";
import LoginBackUpComponent from "../components/loginComponents/LoginBackUpComponent";
import LoginTitle from "../components/AuthComponents/LoginTitle";

const LoginScreen = () => {
  const navigation = useNavigation();

  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

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

    const parseSupabaseUrl = (url: string) => {
      let parsedUrl = url;
      if (url.includes("#")) {
        parsedUrl = url.replace("#", "?");
      }

      // console.log("LoginScreen.tsx -> parseSupabaseUrl -> ", parsedUrl);
      return parsedUrl;
    };
    const handelDeepLink = (event: Linking.EventType) => {
      // console.log("LoginScreen.tsx -> handelDeepLink -> ", event.url);

      // const { hostname, path, queryParams } = Linking.parse(event.url);

      // console.log("LoginScreen.tsx -> ", hostname, path, queryParams);
      parseSupabaseUrl(event.url);
    };

    useEffect(() => {
      console.log("LoginScreen.tsx ->fire ");

      Linking.addEventListener("url", handelDeepLink);
    }, []);

    //https://bbrkeceesipzffkdvfpd.supabase.co/auth/v1/verify?token=138297d64c7fec7e69b923e9b603e75fc745b2eef030a8669e46d9d3&type=recovery&redirect_to=exp://192.168.1.4:8081/--/login

    const resetPassword = async (email: string) => {
      const resetPasswordURL = Linking.createURL("resetPassword");

      console.log("LoginScreen.tsx ->reset password  ", resetPasswordURL);

      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: resetPasswordURL,
      });

      if (error)
        return showToast(error.message, theme.alertWarningColor as string);

      // console.log("LoginScreen.tsx -> ", data);

      return { data, error };
    };

    const formWidth = 0.8 * width;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <View style={{ width: formWidth }}>
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
              flexDirection: "row",
            }}
          >
            <FormComponentWithLabel
              label="Password"
              iconsView={
                <PasswordInputIconsComponent
                  {...{ showPassword, setShowPassword, password, setPassword }}
                />
              }
              CustomTextInput={
                <CustomTextInput
                  containerStyle={{
                    width: formWidth / 2,
                  }}
                  placeholder="Password"
                  onChangeText={(text) => setPassword(text)}
                  validationFunctions={[
                    () => validateShortTextLength(password, 6),
                  ]}
                  autoCapitalize="none"
                  secureTextEntry={showPassword}
                  value={password}
                  style={{ width: formWidth / 2 }}
                />
              }
            />
          </View>
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
        <TouchableOpacity
          style={{ marginTop: hwrosh(16) }}
          onPress={async () => {
            if (validateEmail(email)) {
              return showToast(
                i18n.t("emailNotValid"),
                theme.alertWarningColor as string,
              );
            }
            const { error } = resetPassword(email);

            if (error) {
              return showToast(
                error.message,
                theme.alertWarningColor as string,
              );
            } else {
              showToast(i18n.t("emailSent"), theme.alertSuccessColor as string);
            }
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSize.medium,
              fontWeight: "500",
              color: theme.actionColor,
            }}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <ScreenWithCustomBottomTab
      backUpContent={
        <View style={{ height: height / 3 }}>
          <ScrollView style={{ marginBottom: hwrosh(theme.tabBarHeight) }}>
            <LoginBackUpComponent />
          </ScrollView>
        </View>
      }
      content={<Content />}
      CustomBottomTabComponents={<LoginTitle key={"title"} />}
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
