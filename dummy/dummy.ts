import { AccountTypes, Contributor, Hotel, User } from "../src/types";
import { posts } from "./posts";

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
        url: "https://www.facebook.com/profile.php?id=100086148849098",
      },
      {
        name: "Github",
        type: AccountTypes.Github,
        url: "https://github.com/AHMED-5G",
      },
    ],
    image:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-1/331078260_1853351431696567_4991456740459488817_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1v7QmwJsXl8AX90xiqw&_nc_ht=scontent.fcai20-6.fna&oh=00_AfDGdTxrm5-YoEdfF4V2yjM5USN6oH0Y5dyJxVuduw5I6A&oe=63F5A060",
  },
];

export const users: User[] = [
  {
    id: "78c4dd6a-c004-4033-ab9a-50757a404065",
    name: "Abbye",
    email: "agrollmann0@dailymail.co.uk",
  },
  {
    id: "85e00a13-4274-42ba-87c9-89644512bbf2",
    name: "Martica",
    email: "mphipps1@hostgator.com",
  },
  {
    id: "985da86a-7263-4c10-acc9-9ecf1b0a9398",
    name: "Lulu",
    email: "lcockland2@nationalgeographic.com",
  },
  {
    id: "9cd4de35-7901-4200-84e1-1e542fd700a7",
    name: "Biron",
    email: "bverlander3@dropbox.com",
  },
  {
    id: "b3f099b5-b1ea-4c66-a138-a49feb788e8e",
    name: "Bernarr",
    email: "bedlestone4@cafepress.com",
  },
  {
    id: "dfc37095-5bba-4551-8511-04225c4b376f",
    name: "Franny",
    email: "fskellen5@indiatimes.com",
  },
  {
    id: "c52bd2d6-d9e4-421c-9341-ef156035a7d1",
    name: "Patrizius",
    email: "pgudger6@oakley.com",
  },
  {
    id: "fe2f4385-8d49-4c31-9bc1-2d7961a90af9",
    name: "Mead",
    email: "mgeddes7@typepad.com",
  },
  {
    id: "3b77aeee-173e-4f6f-a67f-a3c0c70e6b92",
    name: "Katuscha",
    email: "kclandillon8@tinypic.com",
  },
  {
    id: "a6ced6f7-b6b6-410f-a9d9-84a9fa9fc46e",
    name: "Cale",
    email: "ccastagnaro9@amazon.co.uk",
  },
];

export const profileImages = [
  "https://images.unsplash.com/photo-1676907540730-56869c01132e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676872873140-d8ce76b64e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676839560107-d15f4b15b766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676806776569-317e55c2cfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676633418610-d3190ca3b9dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676579242335-c37ae9416e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676053923757-9bbd80b47264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1517926967795-31943e805dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

users.map((user) => {
  user.image = profileImages[Math.floor(Math.random() * profileImages.length)];
});

export const usersWithImages: User[] = users;

posts.map((post) => {
  post.by = users[Math.floor(Math.random() * users.length)];
});

export const postsWithUsers = posts;
