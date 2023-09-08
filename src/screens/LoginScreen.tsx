import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import { height, hwrosh, width, wwrosw } from "../constants/Layout";
import { theme } from "../constants/theme";
import CustomTextInput from "../components/mini/CustomTextInput";
import {
  validateEmail,
  validateShortTextLength,
} from "../components/mini/validations";
import MedButton from "../components/mini/MedButton";
import LoadingIndicator from "../components/mini/LoadingIndicator";
import FormComponentWithLabel from "../components/FormComponentWithLabel";
import { i18n } from "../translation/i18n";
import PasswordInputIconsComponent from "../components/loginComponents/PasswordInputIconsComponent";
import LoginBackUpComponent from "../components/loginComponents/LoginBackUpComponent";
import LoginTitle from "../components/AuthComponents/LoginTitle";

import {
  LOGIN_PATH,
  REGISTER_PATH,
  REQUEST_RESET_PASSWORD_PATH,
} from "shared-data/constants/apiUrls";
import { baseUrl } from "../constants/constants";
import { useAppDispatch, useAppSelector } from "../redux/Hooks/hooks";
import { SET_USER_JWT } from "../redux/reducers/dataSlice";
import {
  RequestLoginRequireData,
  RequestLoginSuccessObject,
  RequestSignupRequireData,
} from "shared-data/constants/requestsData";
import { useNavigation } from "@react-navigation/native";
import { InitialStateInterface } from "../types";
import { postRequest, showToastV3 } from "../utils";

const LoginScreen = () => {
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice,
  );
  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [disableAction, setDisableAction] = useState(true);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    async function loginInWithEmail() {
      const body = {
        email,
        password,
      };
      await postRequest<RequestLoginRequireData, RequestLoginSuccessObject>({
        url: baseUrl + LOGIN_PATH,
        body,
        onSuccess: (data) => {
          showToastV3(i18n.t("loginSuccessfully"));
          dispatch(SET_USER_JWT(data.jwt));
          navigation.navigate("Home");
        },
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onElse: (response) => {
          showToastV3(response.codeMessage);
        },
      });
    }

    async function signUpWithEmail() {
      await postRequest<RequestSignupRequireData, null>({
        url: baseUrl + REGISTER_PATH,
        body: { email, password },
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onSuccess: () => {
          showToastV3(i18n.t("signUpSuccessfully"));
        },
        onElse: (response) => {
          showToastV3(response.codeMessage);
        },
      });
    }

    async function requestResetPassword() {
      await postRequest({
        url: baseUrl + REQUEST_RESET_PASSWORD_PATH,
        body: { email },
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onSuccess: () => {
          showToastV3(i18n.t("resetPasswordEmailSentSuccessfully"));
          navigation.navigate("ResetPassword", { email });
        },
        onElse: (error) => {
          showToastV3(error.codeMessage);
        },
      });
    }

    const sharedActions = () => {
      Keyboard.dismiss();
    };

    useEffect(() => {
      const emailValidationResult = validateEmail(email);
      const passwordValidationResult = validateShortTextLength(password, 6);
      const disableAction =
        emailValidationResult == "" && passwordValidationResult == "";

      if (disableAction) {
        setDisableAction(false);
      } else setDisableAction(true);
    }, [email, password]);
    const passwordValidationFunctions = [
      () => validateShortTextLength(password, 6),
    ];
    const formWidth = 0.8 * width;
    if (state.jwt)
      return (
        <View>
          <Text>Logout</Text>
        </View>
      );
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSize.s22,
              color: theme.baseTextColor(),
              fontWeight: "700",
            }}
          >
            Welcome back
          </Text>
        </View>
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
                  style={{ color: theme.baseTextColor() }}
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
                  validationFunctions={passwordValidationFunctions}
                  autoCapitalize="none"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={showPassword}
                  value={password}
                  style={{ width: formWidth / 2, color: theme.baseTextColor() }}
                />
              }
            />
          </View>
        </View>
        <View style={{ marginTop: hwrosh(20), width: 0.8 * width }}>
          {!loading ? (
            <View>
              {!password && (
                <TouchableOpacity
                  style={{ marginTop: hwrosh(10) }}
                  onPress={async () => {
                    if (validateEmail(email)) {
                      return showToastV3(i18n.t("emailNotValid"));
                    }
                    requestResetPassword();
                    sharedActions();
                  }}
                >
                  <Text
                    style={{
                      fontSize: theme.fontSize.medium,
                      fontWeight: "500",
                      color: theme.actionButtonBackground(),
                      textDecorationLine: "underline",
                      textDecorationColor: theme.actionButtonBackground(),
                    }}
                  >
                    Reset password
                  </Text>
                </TouchableOpacity>
              )}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: hwrosh(20),
                }}
              >
                <MedButton
                  disabled={disableAction}
                  style={[styles.btnStyle, { width: wwrosw(120) }]}
                  title="Login"
                  onPress={() => {
                    loginInWithEmail(), sharedActions();
                  }}
                  textStyle={{ fontSize: theme.fontSize.s18 }}
                />
                <MedButton
                  disabled={disableAction}
                  style={[styles.btnStyle, { width: wwrosw(120) }]}
                  title="Sign Up"
                  onPress={() => {
                    signUpWithEmail(), sharedActions();
                  }}
                  textStyle={{ fontSize: theme.fontSize.s18 }}
                />
              </View>
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
    borderRadius: theme.borderRadius,
  },
});
