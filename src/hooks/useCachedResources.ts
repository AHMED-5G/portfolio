import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { loadLocale } from "../translation/i18n";

import { useAppSelector } from "../redux/Hooks/hooks";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const { language } = useAppSelector((state) => state.dataSlice);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // loadLocale(language);
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
