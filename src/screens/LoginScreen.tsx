import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
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
import { postRequest, showToast, showToastV2 } from "../utils/helperFunctions";
import {
  LOGIN_PATH,
  REGISTER_PATH,
  REQUEST_RESET_PASSWORD_PATH,
} from "shared-data/constants/apiUrls";
import { baseUrl } from "../constants/constants";
import { useAppDispatch } from "../redux/Hooks/hooks";
import { SET_USER_JWT } from "../redux/reducers/dataSlice";
import {
  RequestLoginRequireData,
  RequestLoginSuccessObject,
} from "shared-data/constants/requestsData";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [disableAction, setDisableAction] = useState(true);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    async function loginInWithEmail() {
      const body: RequestLoginRequireData = {
        email,
        password,
      };
      await postRequest<RequestLoginSuccessObject>({
        url: baseUrl + LOGIN_PATH,
        body,
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onSuccess: (data) => {
          console.log("LoginScreen.tsx -> loginInWithEmail -> ", data.jwt);
          showToast(
            i18n.t("loginSuccessfully"),
            theme.alertSuccessColor as string,
          );
          console.log("LoginScreen.tsx -> ", data.jwt);
          dispatch(SET_USER_JWT(data.jwt));
        },
        onElse: (response) => {
          console.log("LoginScreen.tsx -> ", response?.codeError);
        },
      });
    }

    async function signUpWithEmail() {
      await postRequest({
        url: baseUrl + REGISTER_PATH,
        body: { email, password },
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onSuccess: () => {
          showToast(
            i18n.t("signUpSuccessfully"),
            theme.alertSuccessColor as string,
          );
        },
        onElse: (response) => {
          console.log("LoginScreen.tsx -> ", response?.codeError);
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
          showToastV2(i18n.t("requestSentSuccessfully"), theme.darkTheme);
          navigation.navigate("ResetPassword");
        },
        onElse: (error) => {
          console.log("LoginScreen.tsx -> ", error.codeMessage);
          showToast(i18n.t(error.codeMessage), theme.alertFailColor as string);
        },
      });
    }

    useEffect(() => {
      const emailValidationResult = validateEmail(email);
      const passwordValidationResult = validateShortTextLength(password, 6);
      const disableAction =
        emailValidationResult == "" && passwordValidationResult == "";

      if (disableAction) {
        setDisableAction(false);
      } else setDisableAction(true);
    }, [email, password]);

    const formWidth = 0.8 * width;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <Button
          title="fetch"
          onPress={() => navigation.navigate("ResetPassword")}
        />
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
                style={[styles.btnStyle, { width: wwrosw(120) }]}
                title="Login"
                onPress={() => loginInWithEmail()}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
              <MedButton
                disabled={disableAction}
                style={[styles.btnStyle, { width: wwrosw(120) }]}
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
            requestResetPassword();
            // const { error } = resetPassword(email);
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
    borderRadius: theme.borderRadius,
  },
});
