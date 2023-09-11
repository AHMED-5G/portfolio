import { hwrosh } from "../constants/Layout";

export const drawerProfileCardHeight = hwrosh(130);
export const drawerContentContainerHeight = hwrosh(180);
export const footerContentContainerHeight = hwrosh(70);

export const totalMarginTopTabBarHeight = hwrosh(30);
export const totalOpenTabBarHeight =
  drawerProfileCardHeight +
  drawerContentContainerHeight +
  footerContentContainerHeight +
  totalMarginTopTabBarHeight;
