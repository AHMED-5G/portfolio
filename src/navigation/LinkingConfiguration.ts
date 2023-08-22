/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  async getInitialURL() {
    // First, you would need to get the initial URL from your third-party integration
    // The exact usage depend on the third-party SDK you use
    // For example, to get the initial URL for Firebase Dynamic Links:

    const initialLink = await Linking.getInitialURL();
    // const { hostname, path, queryParams } =  Linking.parse(initialLink);

    console.log("LinkingConfiguration.ts initialLink -> ", initialLink);

    const parseSupabaseUrl = (url: string) => {
      // let parsedUrl = url;
      // if (url.includes("#")) {
      //   parsedUrl = url.replace("#", "?");
      // }
      // const newparsedUrl = new URL(url);

      // console.log(
      //   "LinkingConfiguration.ts -> getInitialURL -> newwwwwwwwwwwwwwwww -> ",
      //   newparsedUrl,url
      // );


      // console.log(
      //   "LinkingConfiguration.ts -> getInitialURL -> parseSupabaseUrl -> ",
      //   Linking.parse(url),
      // );
      const { path } = Linking.parse(url);
      if (path) return Linking.createURL(path);
      // Extract the pathname and query parameters from the URL

      // Get the values from the query parameters
      // return parsedUrl;
    };
    // Create a new URL object
    if (initialLink) {
      return parseSupabaseUrl(initialLink);
    }
  },

  config: {
    screens: {
      Root: {
        screens: {
          HomeStackNavigator: {
            screens: {
              Home: "home",
            },
          },
        },
      },
      Login: "login",
      ResetPassword: "resetPassword",

      NotFound: "*",
    },
  },
};

export default linking;
