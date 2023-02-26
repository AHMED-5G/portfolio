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
    title: "Creative Logo & Graphics Designer",
    accounts: [
      {
        name: "facebook",
        type: AccountTypes.Facebook,
        url: "https://www.facebook.com/profile.php?id=100086148849098",
      },
      {
        name: "behance",
        type: AccountTypes.Behance,
        url: "https://github.com/AHMED-5G",
      },
      {
        name: "dribbble",
        type: AccountTypes.Dribbble,
        url: "https://github.com/AHMED-5G",
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
        url: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/331078260_1853351431696567_4991456740459488817_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FKNZ9U91otMAX-G9ZBC&_nc_ht=scontent.fcai20-6.fna&oh=00_AfCvMz_mDi9y-mkZ3TwI42r23sTz4ohVk0gTUbkhS-6bUA&oe=6400055E",
      },
      {
        name: "Github",
        type: AccountTypes.Github,
        url: "https://github.com/AHMED-5G",
      },
    ],
    image: "https://i.stack.imgur.com/RWR5C.jpg?s=256&g=1",
  },
];
