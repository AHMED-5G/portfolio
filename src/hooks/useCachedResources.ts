import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { loadLocale } from "../translation/i18n";

import { useAppSelector } from "../redux/Hooks/hooks";
// import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const { language } = useAppSelector((state) => state.dataSlice);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // loadLocale(language);
        // AsyncStorage.getAllKeys().then((res)=>{
        //   console.log(res)
        // })
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
