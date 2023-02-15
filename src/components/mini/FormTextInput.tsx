import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextStyle,
} from "react-native";
import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
  ReactElement,
  JSXElementConstructor,
} from "react";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
interface FormTextInputInterface {
  mainContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainer?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string | undefined;
  validations?: string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  icon?: ReactNode | any;

  secure?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  maxLength?: number | undefined;
  multiline?: boolean | undefined;
  setText?: (text: string) => void;
}

const FormTextInput: FunctionComponent<FormTextInputInterface> = ({
  ...props
}) => {
  const [validationMessages, setValidationMessages] = useState("");
  useEffect(() => {
    if (props.value) {
      if (props.validations && props.validations !== undefined) {
        setValidationMessages(props.validations);
      } else {
        setValidationMessages("");
      }
    } else {
      setValidationMessages("");
    }
  }, [props.value]);

  const totalPadding = props.icon ? 40 + props?.icon.props.size : 40;
  const inputWidth = props.width
    ? +props.width - totalPadding
    : width / 2 - totalPadding;
  return (
    <View style={props.mainContainerStyle}>
      <View
        style={[
          {
            flexDirection: "row",
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
            width: props.width ? props.width : width / 2,
            height: props.height ? props.height : 50,
            alignItems: "center",
            justifyContent: "space-between",
            alignContent: "space-between",
            borderWidth: validationMessages ? 1 : 0,
            borderColor: validationMessages ? "red" : "0",
          },
          props.containerStyle,
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "space-between",
          }}
        >
          <View>
            <Text>{props.icon}</Text>
          </View>
          <View style={[{ marginLeft: 10 }, props.textInputContainer]}>
            <KeyboardAvoidingView behavior="height">
              <TextInput
                placeholder={props.placeholder}
                style={{
                  width: inputWidth,
                  maxWidth: inputWidth,
                  height: 40
                }}
                onChangeText={props.setText}
                value={props.value}
                autoCapitalize="none"
                secureTextEntry={props.secure}
                keyboardType={props.keyboardType}
                onSubmitEditing={props.onSubmitEditing}
                maxLength={props.maxLength}
                multiline={props.multiline}
              />
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
      {validationMessages ? (
        <View style={{ maxWidth: props.width ? props.width : width / 2 }}>
          <Text>{validationMessages}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({});
