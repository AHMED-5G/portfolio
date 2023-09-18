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
import { Validation, createValidation } from "input-validation-builder";
import {
  // Validation,
  // createValidation,
  postRequest,
  showToastV3,
  validateEmail,
  validateShortTextLength,
} from "../utils";
import { Feather } from "@expo/vector-icons";
import EmailInputIconsComponent from "../components/loginComponents/EmailInputIconsComponent";

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
    const [readyToLogin, setReadyToLogin] = useState(false);
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
        onFinish: () => {
          setLoading(false);
        },
        onElse: (response) => {
          showToastV3(response.codeMessage);
        },

        onError: () => {
          showToastV3(i18n.t("unknownError"));
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
          setReadyToLogin(true);
        },
        onElse: (response) => {
          showToastV3(response.codeMessage);
        },
        onError: () => {
          showToastV3(i18n.t("unknownError"));
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

    const [passwordValidationErrors, setPasswordValidationErrors] = useState<
      Validation<string>["errors"]
    >([]);
    const [emailValidationErrors, setEmailValidationErrors] = useState<
      Validation<string>["errors"]
    >([]);

    useEffect(() => {
      if (password) {
        const validation = createValidation(password).validate(
          validateShortTextLength,
          6,
        );
        setPasswordValidationErrors(validation.getErrors());
      } else {
        setPasswordValidationErrors([]);
      }
    }, [password]);

    useEffect(() => {
      if (email) {
        const emailValidation = createValidation(email).validate(validateEmail);
        setEmailValidationErrors(emailValidation.getErrors());
      } else setEmailValidationErrors([]);
    }, [email]);

    useEffect(() => {
      const hasValidationErrors =
        emailValidationErrors.length > 0 || passwordValidationErrors.length > 0;

      if (hasValidationErrors || !password || !email) {
        setDisableAction(true);
      } else {
        setDisableAction(false);
      }
    }, [email, password, emailValidationErrors, passwordValidationErrors]);

    const formWidth = 0.8 * width;

    const buttonWidth = formWidth / 2 - wwrosw(5);
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
            {i18n.t("welcomeBack")}
          </Text>
        </View>
        <View style={{ width: formWidth }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              overflow: "hidden",
              flexDirection: "row",
            }}
          >
            <FormComponentWithLabel
              label={i18n.t("email")}
              CustomTextInput={
                <CustomTextInput
                  iconsView={
                    <EmailInputIconsComponent
                      email={email}
                      setEmail={setEmail}
                    />
                  }
                  textInputContainerStyle={{
                    width: formWidth * 0.8,
                  }}
                  showExample={true}
                  icon={
                    <Feather
                      name="mail"
                      size={24}
                      color={theme.iconColor()}
                      style={{
                        opacity: 0.7,
                      }}
                    />
                  }
                  placeholder={"name@example.com"}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  validationErrors={emailValidationErrors}
                  autoCapitalize="none"
                  value={email}
                  style={{ color: theme.baseTextColor() }}
                  placeholderTextColor={theme.baseTextColor(0.5)}
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
              label={i18n.t("password")}
              CustomTextInput={
                <CustomTextInput
                  iconsView={
                    <PasswordInputIconsComponent
                      {...{
                        showPassword,
                        setShowPassword,
                        password,
                        setPassword,
                      }}
                    />
                  }
                  textInputContainerStyle={{
                    width: formWidth / 2,
                  }}
                  icon={
                    <Feather
                      name="lock"
                      size={24}
                      color={theme.iconColor()}
                      style={{
                        opacity: 0.7,
                      }}
                    />
                  }
                  validationErrors={passwordValidationErrors}
                  autoCapitalize="none"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={showPassword}
                  value={password}
                  style={{ width: formWidth / 2, color: theme.baseTextColor() }}
                  placeholderTextColor={theme.baseTextColor(0.5)}
                />
              }
            />
          </View>
        </View>
        <View style={{ marginTop: hwrosh(20), width: 0.8 * width }}>
          {!loading ? (
            <View>
              <View style={{ minHeight: hwrosh(50) }}>
                {!password && (
                  <TouchableOpacity
                    style={{
                      marginTop: hwrosh(10),
                      alignSelf: "flex-start",
                    }}
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
                      {i18n.t("resetPassword")}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
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
                  style={[
                    styles.btnStyle,
                    { width: readyToLogin ? formWidth : buttonWidth },
                  ]}
                  title={i18n.t("login")}
                  onPress={() => {
                    loginInWithEmail(), sharedActions();
                  }}
                  textStyle={{ fontSize: theme.fontSize.s18 }}
                />
                {!readyToLogin && (
                  <MedButton
                    disabled={disableAction}
                    style={[
                      styles.btnStyle,
                      {
                        width: buttonWidth,
                        backgroundColor: theme.baseBackground(),
                        borderColor: theme.borderColor,
                        borderWidth: 0.5,
                      },
                    ]}
                    title={i18n.t("newAccount")}
                    onPress={() => {
                      signUpWithEmail(), sharedActions();
                    }}
                    textStyle={{
                      fontSize: theme.fontSize.s18,
                      color: disableAction
                        ? theme.disableColor
                        : theme.actionButtonBackground(),
                    }}
                  />
                )}
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
