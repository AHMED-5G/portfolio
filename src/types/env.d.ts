declare module "@env" {
  export const GITHUB_CLIENT_ID: string;
  export const NODE_ENV: string;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
