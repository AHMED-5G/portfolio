import { ImageURISource } from "react-native";
import { ColorValue } from "react-native";

export interface TechnologiesInterface {
  name: string;
  color: ColorValue;
  logo: ImageURISource["uri"];
  fontColor: ColorValue;
}
