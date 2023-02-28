export type ID = string | number;

export interface Hotel {
  id: ID;
  name: string;
  favorite: boolean;
  images: string[];
  description?: string;
  rate: number;
  address: string;
}

export interface User {
  id: ID;
  name: string;
  email: string;
  image?: string;
}

export enum AccountTypes {
  Facebook,
  Twitter,
  Github,
  Dribbble,
  Behance,
  LinkedIn,
}

export interface ContributorAccount {
  name: string;
  type: AccountTypes;
  url: string;
}

export interface Contributor extends User {
  accounts: ContributorAccount[];
  title: string;
}

export enum PostTypes {
  Text,
  Image,
  Video,
}

type TimeStamp = string;

export interface PostComment {
  body: string;
  timeStamp: TimeStamp;
  by?: User;
  favoriteCounter?: number;
}

export interface Post {
  type?: PostTypes;
  text?: string;
  image?: string;
  video?: string;
  timeStamp: TimeStamp;
  by?: User;
  comments?: PostComment[];
  likes?: User[];
}

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  HotelDetails: Hotel;
  Home: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeStackNavigator: undefined;
  Feed: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
