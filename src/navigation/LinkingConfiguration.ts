/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/"), "myapp://"],
  async getInitialURL() {
    // First, you would need to get the initial URL from your third-party integration
    // The exact usage depend on the third-party SDK you use
    // For example, to get the initial URL for Firebase Dynamic Links:

    const initialLink = await Linking.getInitialURL();
    // const { hostname, path, queryParams } =  Linking.parse(initialLink);

    // if (initialLink) return initialLink;
    const parseSupabaseUrl = (url: string) => {
      let parsedUrl = url;
      if (url.includes("#")) {
        parsedUrl = url.replace("#", "?");
      }
      const newparsedUrl = new URL(parsedUrl);

      // Extract the pathname and query parameters from the URL

      const searchParams = newparsedUrl.searchParams;

      // Get the values from the query parameters
      const error = searchParams.get("error");
      const errorCode = searchParams.get("error_code");
      const errorDescription = searchParams.get("error_description");
      const { path } = Linking.parse(url);
      console.log(path); // "/--/login"
      console.log(error); // "unauthorized_client"
      console.log(errorCode); // "401"
      console.log(errorDescription);
      if (path) {
        console.log(
          "LinkingConfiguration.ts -> parseSupabaseUrl -> ",
          Linking.createURL(path),
        );
        return Linking.createURL(path);
      }
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

      NotFound: "*",
    },
  },
};

export default linking;
