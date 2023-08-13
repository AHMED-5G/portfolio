declare module "@env" {
  export const SUPABASE_ANON_KEY: string;
  export const GITHUB_CLIENT_ID: string;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
