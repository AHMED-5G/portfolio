import { Contributor, AccountTypes } from "../src/types";

export const contributors: Contributor[] = [
  {
    id: "2",
    name: "Sara",
    email: "Sara@omail.com",
    title: "UX Developer",
    accounts: [
      {
        name: "Twitter",
        type: AccountTypes.Twitter,
        url: "http://twitter.com/",
      },
      {
        name: "Behance",
        type: AccountTypes.Behance,
        url: "https://www.behance.net/",
      },
      {
        name: "LinkedIn",
        type: AccountTypes.LinkedIn,
        url: "https://www.LinkedIn.com/",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "1",
    name: "Khalid",
    email: "khaled@zahoo.com",
    title: "Graphics Designer",
    accounts: [
      {
        name: "twitter",
        type: AccountTypes.Twitter,
        url: "https://www.twitter.com/",
      },
      {
        name: "behance",
        type: AccountTypes.Behance,
        url: "https://behance.com",
      },
      {
        name: "dribbble",
        type: AccountTypes.Dribbble,
        url: "https://dribbble.com",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1618979251882-0b40ef3617f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "AA",
    email: "khaled@zahoo.com",
    title: "full stack developer",
    accounts: [
      {
        name: "facebook",
        type: AccountTypes.Facebook,
        url: "https://www.facebook.com/people/Ahmed-Ali/pfbid0ApxqC6JK6Y5bQewcykPmR1dzxpPsL9m28uERD7ixvN1sxFMugj9SsA1wKqZit8kLl/",
      },
      {
        name: "Github",
        type: AccountTypes.Github,
        url: "https://github.com/AHMED-5G",
      },
      {
        name: "twitter",
        type: AccountTypes.Twitter,
        url: "https://www.twitter.com/ad_5g",
      },
    ],
    image: "https://i.stack.imgur.com/RWR5C.jpg?s=256&g=1",
  },
];
