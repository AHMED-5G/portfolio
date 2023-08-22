import { Text, View } from "react-native";
import React, { useEffect } from "react";
import * as Linking from "expo-linking";

const ResetPassword = () => {
  const parseSupabaseUrl = (url: string) => {
    let parsedUrl = url;
    if (url.includes("#")) {
      parsedUrl = url.replace("#", "?");
    }
    return parsedUrl;
  };
  useEffect(() => {
    const handelInitial = (url: string) => {
      const parsedLink = parseSupabaseUrl(url);
      if (parsedLink) {
        const urlToSearch = new URL(parsedLink);
        const searchParams = urlToSearch.searchParams;
        const code = searchParams.get("code");
        const access_token = searchParams.get("access_token");
        console.log(
          "ResetPassword.tsx -> handelInitial -> ",
          access_token !== null,
          code,
        );
      }
    };
    const getInitial = async () => {
      const initialLink = await Linking.getInitialURL();
      if (initialLink) {
        
console.log("ResetPassword.tsx -> getInitial -> ", initialLink);
        handelInitial(initialLink);
      }
    };
    // const handleLinkingEvent = async (event: Linking.EventType) => {
    //   //   console.log(event.url);

    //   const urlWithQuestionMark = parseSupabaseUrl(event.url);

    //   //extract query parameters from url
    //   if (urlWithQuestionMark) {
    //     const urlToSearch = new URL(urlWithQuestionMark);
    //     const searchParams = urlToSearch.searchParams;
    //     const code = searchParams.get("code");
    //     const access_token = searchParams.get("access_token");
    //     console.log(
    //       "ResetPassword.tsx -> handleLinkingEvent -> ",

    //       access_token !== null,
    //       code,
    //     );
    //     // if (access_token) {
    //     //   const { data, error } = await supabase.auth.exchangeCodeForSession(
    //     //     access_token,
    //     //   );
    //     //   if (error) {
    //     //     console.log(error);
    //     //   } else {
    //     //     console.log(data);
    //     //   }
    //     // }
    //   }
    // };
    // //build event listener for deep linking
    // const linkingListener = Linking.addEventListener("url", handleLinkingEvent);

    // console.log("ResetPassword.tsx -> fire ");
    // return () => {
    //   linkingListener.remove();
    // };
    getInitial()
  }, []);

  return (
    <View>
      <Text>ResetPassword</Text>
    </View>
  );
};

export default ResetPassword;
