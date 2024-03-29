import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorValue, ImageSourcePropType } from "react-native";
import { UserConfigurationInterface } from "../constants/theme";
import { ReactElement } from "react";
import { ApiResponseError, IUser, JSONWebTokenType } from "shared-data/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  HotelDetails: Hotel;
  ContributorsDetails: Contributor;
  Home: undefined;
  Horses: Horse[];
  HorseDetails: Horse;
  HorsesStack: Horse[];
  YachtStackNavigation: undefined;
  HotelStackNavigation: Hotel;
  Yachts: undefined;
  MarketStackNavigator: undefined;
  MarketHomeScreen: undefined;
  Login: undefined;
  ResetPassword: FormData;
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

export interface User extends IUser {}

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
  image: string;
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

export enum Languages {
  Arabic = "ar",
  English = "en",
}

export interface Horse {
  id: ID;
  name: string;
  image: string;
  history: string;
  images?: string[];
}
interface FormData {
  email: string;
}

export type Bid = { user: User; timeStamp: number; amount: number };

export interface HorseInAuction {
  horse: string;
  bids: Bid[];
  currentBidPrice: () => number;
  startingPrice: number;
  timeRemindingInSeconds: number;
}

export type ReadingThemesCombo = {
  fontColor: ColorValue;
  backGroundColor: ColorValue;
  fontSize?: number;
};

export interface InitialStateInterface {
  error?: Error;
  loading?: boolean;
  language: Languages;
  settings: {
    savedReadingTheme: ReadingThemesCombo;
    userConfiguration: UserConfigurationInterface;
  };
  jwt: JSONWebTokenType | undefined;
}

export enum ProductTypes {
  max10,
  upTo100,
  Product10Step,
}

export interface Product {
  id: string;
  name: string;
  searchText: string;
  description?: string;
  type: ProductTypes;
  price: number;
  image: ImageSourcePropType;
  listOfPrice?: number[];
}

export interface ProductInCart extends Product {
  counter: number;
}

export interface SectionContainerInterface {
  title: string;
  content: ReactElement;
}

export interface PostRequest<RequiredT, OnSuccessT> {
  url: string;
  token?: string;
  body?: RequiredT;
  onSuccess: (data: OnSuccessT) => void;
  onElse?: (response: ApiResponseError) => void;
  onError?: (error: unknown) => void;
  onStart?: () => void;
  onFinish?: () => void;
}
