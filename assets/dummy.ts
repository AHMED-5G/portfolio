import { AccountTypes, Contributor, Hotel } from "../src/types";
export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Milano Grande",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    ],
    address: "Evripidou Str, Athens, 10553, Greece",
    rate: 5,
    favorite: false,
  },
  {
    id: "2",
    name: "Evripides Hotel",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
      "https://plus.unsplash.com/premium_photo-1667199608149-cd24e523ee98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    ],
    address: "18786 SW Boones Ferry Rd",
    rate: 4,
    favorite: false,
  },
  {
    id: "3",
    name: "LUX&EASY Acropolis Suites",
    images: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80",
      "https://plus.unsplash.com/premium_photo-1670360414531-aaf6c4b48b8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    address: "7939 Black Mountain Dr",
    rate: 3,
    favorite: false,
  },
];

export const contributors: Contributor[] = [
  {
    id: "2",
    name: "Sara",
    email: "Sara@omail.com",
    title: "UX Developer",
    accounts: [
      {
        type: AccountTypes.Twitter,
        url: "http://twitter.com/",
      },
      {
        type: AccountTypes.Behance,
        url: "https://www.behance.net/",
      },
      {
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
        type: AccountTypes.Facebook,
        url: "https://www.facebook.com/profile.php?id=100086148849098",
      },
      {
        type: AccountTypes.Behance,
        url: "https://github.com/AHMED-5G",
      },
      {
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
        type: AccountTypes.Facebook,
        url: "https://www.facebook.com/profile.php?id=100086148849098",
      },
      {
        type: AccountTypes.Github,
        url: "https://github.com/AHMED-5G",
      },
    ],
    image:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/331078260_1853351431696567_4991456740459488817_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1v7QmwJsXl8AX90xiqw&_nc_ht=scontent.fcai20-6.fna&oh=00_AfDGdTxrm5-YoEdfF4V2yjM5USN6oH0Y5dyJxVuduw5I6A&oe=63F5A060",
  },
];
