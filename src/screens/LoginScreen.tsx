import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
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
import { showToast } from "../utils/helperFunctions";

const LoginScreen = () => {
  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    async function loginInWithEmail() {}

    async function signUpWithEmail() {
      setLoading(true);

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
