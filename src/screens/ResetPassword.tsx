import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import FormComponentWithLabel from "../components/FormComponentWithLabel";
import PasswordInputIconsComponent from "../components/loginComponents/PasswordInputIconsComponent";
import CustomTextInput from "../components/mini/CustomTextInput";
import { validateShortTextLength } from "../components/mini/validations";
import { hwrosh, width, wwrosw } from "../constants/Layout";
import MedButton from "../components/mini/MedButton";
import { theme } from "../constants";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { baseUrl } from "../constants/constants";
import { RESET_PASSWORD_PATH } from "shared-data/constants/apiUrls";
import { ResetPasswordRequireData } from "shared-data/constants/requestsData";
import { i18n } from "../translation/i18n";
import { postRequest, showToastV3 } from "../utils";
import LoadingIndicator from "../components/mini/LoadingIndicator";

type Props = StackScreenProps<RootStackParamList, "ResetPassword">;

const ResetPassword = ({ navigation, route }: Props) => {
  const { email } = route.params;
  const Title = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: theme.fontSize.s18,
            color: theme.baseTextColor(),
            fontWeight: "bold",
          }}
        >
          Reset Password
        </Text>
      </View>
    );
  };
  const Content = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [newPassword, setNewPassword] = useState("");
    const [code, setCode] = useState("");
    const formWidth = 0.8 * width;
    const [loading, setLoading] = useState(false);
    const [readyToLogin, setReadyToLogin] = useState(false);

    async function resetPassword() {
      const body = {
        email,
        code,
        newPassword,
      };
      await postRequest<ResetPasswordRequireData, null>({
        url: baseUrl + RESET_PASSWORD_PATH,
        body,
        onStart: () => setLoading(true),
        onFinish: () => setLoading(false),
        onSuccess: () => {
          showToastV3(i18n.t("resetPasswordSuccessfully"));
          setReadyToLogin(true);
        },
        onElse: (error) => {
          console.log("LoginScreen.tsx -> ", error?.codeMessage);
        },
      });
    }
    const [validateAll, setValidateAll] = useState(false);

    useEffect(() => {
      const passwordValidationResult = validateShortTextLength(newPassword, 6);
      const codeValidation = validateShortTextLength(code, 5);

      const disableAction =
        codeValidation == "" && passwordValidationResult == "";

      if (disableAction) {
        setValidateAll(false);
      } else setValidateAll(true);
    }, [newPassword, code, email]);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: formWidth,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSize.s18,
              color: theme.baseTextColor(),
              fontWeight: "bold",
            }}
          >
            {email}
          </Text>
        </View>
        <View style={{ marginTop: hwrosh(5) }}>
          <Text
            style={{
              fontSize: theme.fontSize.medium,
              color: theme.baseTextColor(),
            }}
          >
            Check your email for verification code
          </Text>
        </View>
        <View
          style={{
            width: formWidth,
            marginTop: hwrosh(20),
          }}
        >
          <View>
            <FormComponentWithLabel
              label="Code from email"
              CustomTextInput={
                <CustomTextInput
                  keyboardType="number-pad"
                  containerStyle={{
                    width: formWidth / 2,
                  }}
                  placeholder="Example 12345"
                  onChangeText={(text) => setCode(text)}
                  validationFunctions={[() => validateShortTextLength(code, 5)]}
                  autoCapitalize="none"
                  value={code}
                  style={{ width: formWidth / 2, color: theme.baseTextColor() }}
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
              label="New password"
              iconsView={
                <PasswordInputIconsComponent
                  {...{
                    showPassword,
                    setShowPassword,
                  }}
                  setPassword={setNewPassword}
                  password={newPassword}
                />
              }
              CustomTextInput={
                <CustomTextInput
                  containerStyle={{
                    width: formWidth / 2,
                  }}
                  placeholder="Password"
                  onChangeText={(text) => setNewPassword(text)}
                  validationFunctions={[
                    () => validateShortTextLength(newPassword, 6),
                  ]}
                  autoCapitalize="none"
                  secureTextEntry={showPassword}
                  value={newPassword}
                  style={{ width: formWidth / 2, color: theme.baseTextColor() }}
                />
              }
            />
          </View>
          {!loading ? (
            <View
              style={{
                marginTop: hwrosh(16),
                width: 0.8 * width,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {!readyToLogin ? (
                <MedButton
                  disabled={validateAll}
                  style={[
                    styles.btnStyle,
                    { width: readyToLogin ? wwrosw(130) : formWidth },
                  ]}
                  title="Reset password"
                  onPress={() => resetPassword()}
                  textStyle={{ fontSize: theme.fontSize.s18 }}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: theme.fontSize.s22,
                      fontWeight: "500",
                      color: theme.actionButtonBackground(),
                      textDecorationLine: "underline",
                      textDecorationColor: theme.actionButtonBackground(),
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <LoadingIndicator />
          )}
        </View>
      </View>
    );
  };
  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      CustomBottomTabComponents={<Title />}
    />
  );
};

export default ResetPassword;
const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: theme.borderRadius,
  },
});
