import { PostTypes, User, PostComment } from "../src/types";
import {
  getRandomOneItemFromList,
  shuffleArray,
  randomIntNumber,
  getRandomIntBetweenTow,
} from "../src/utils/helperFunctions";
import { images, profileImages } from "./images";
import { posts } from "./posts";
import { users } from "./Users";
import { comments } from "./comments";

users.map((user) => {
  user.image = getRandomOneItemFromList(profileImages);
});

export const usersWithImages: User[] = users;

export const generateRandomUser = (): User => {
  return getRandomOneItemFromList(users);
};

comments.map((comment) => {
  comment.by = getRandomOneItemFromList(users);
  comment.favoriteCounter = randomIntNumber(300);
});

posts.map((post) => {
  post.by = getRandomOneItemFromList(users);
  post.type = PostTypes.Text;
  post.comments = shuffleArray(comments).slice(getRandomIntBetweenTow(35, 48));
});

const postsClone = posts.map((post) => Object.assign({}, post));

postsClone.map((post) => {
  post.image = getRandomOneItemFromList(images);
  post.type = PostTypes.Image;
});

export const postsWithImages = postsClone;

export const mergePosts = shuffleArray([...posts, ...postsWithImages]);
