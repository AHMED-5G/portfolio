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
}

export interface Post {
  type?: PostTypes;
  text?: string;
  image?: string;
  Video?: string;
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
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Feed: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
