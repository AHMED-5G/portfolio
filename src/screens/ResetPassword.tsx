import { View  , StyleSheet} from "react-native";
import React, { useState } from "react";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import FormComponentWithLabel from "../components/FormComponentWithLabel";
import PasswordInputIconsComponent from "../components/loginComponents/PasswordInputIconsComponent";
import CustomTextInput from "../components/mini/CustomTextInput";
import { validateShortTextLength } from "../components/mini/validations";
import { hwrosh, width, wwrosw } from "../constants/Layout";
import MedButton from "../components/mini/MedButton";
import { theme } from "../constants";

const ResetPassword = () => {
  const Content = () => {

    const  resetPassword = () => {
      
    }
    const [showPassword, setShowPassword] = useState(true);
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const formWidth = 0.8 * width;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: formWidth,
          }}
        >
          <View>
            <FormComponentWithLabel
              label="Code from email"
              iconsView={undefined}
              CustomTextInput={
                <CustomTextInput
                  containerStyle={{
                    width: formWidth / 2,
                  }}
                  placeholder="example 32423"
                  onChangeText={(text) => setCode(text)}
                  validationFunctions={[
                    () => validateShortTextLength(code, 5),
                  ]}
                  autoCapitalize="none"
                  value={code}
                  style={{ width: formWidth / 2 }}
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
          <View
          style={{ marginTop: hwrosh(16), width: 0.8 * width }}
          >
              <MedButton
                // disabled={disableAction}
                style={[styles.btnStyle, { width: wwrosw(120) }]}
                title="Sign Up"
                onPress={() => resetPassword()}
                textStyle={{ fontSize: theme.fontSize.s18 }}
              />
          </View>
        </View>
      </View>
    );
  };
  return <ScreenWithCustomBottomTab content={<Content />} />;
};

export default ResetPassword;
const styles = StyleSheet.create({

  btnStyle: {
    borderRadius: theme.borderRadius,
  },
});
