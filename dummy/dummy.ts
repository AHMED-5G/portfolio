import { PostTypes, User } from "../src/types";
import { getListRandomItem, shuffleArray } from "../src/utils/helperFunctions";
import { images, profileImages } from "./images";
import { posts } from "./posts";
import { users } from "./Users";

users.map((user) => {
  user.image = getListRandomItem(profileImages);
});

export const usersWithImages: User[] = users;

posts.map((post) => {
  post.by = getListRandomItem(users);
  post.type = PostTypes.Text;
});

// export const postsWithText = Array.from(posts);
const postsWithText = posts.map((post) => Object.assign({}, post));

postsWithText.map((post) => {
  post.image = getListRandomItem(images);
  post.type = PostTypes.Image;
});

// console.log(postsWithText == posts);
export const postsWithImages = postsWithText;

export const mergePosts = shuffleArray([...posts , ...postsWithText]);
