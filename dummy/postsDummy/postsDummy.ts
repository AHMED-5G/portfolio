import { PostTypes, User, PostComment } from "../../src/types";
import {
  getRandomOneItemFromList,
  shuffleArray,
  randomIntNumber,
  getRandomIntBetweenTow,
} from "../../src/utils/helperFunctions";
import { images, profileImages } from "../images";
import { users } from "../Users";
import { comments } from "./comments";
import { videos } from "./video";
import { posts } from "./posts";

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

const postsCloneForImages = posts.map((post) => Object.assign({}, post));
const postsCloneForVideos = posts.map((post) => Object.assign({}, post));

postsCloneForImages.map((post) => {
  post.image = getRandomOneItemFromList(images);
  post.type = PostTypes.Image;
});

postsCloneForVideos.map((post) => {
  post.video = getRandomOneItemFromList(videos);
  post.type = PostTypes.Video;
});

export const postsWithImages = postsCloneForImages;
export const postsWithVideos = postsCloneForVideos;

let firsPost = posts[0];
posts.shift();

export const mergePosts = shuffleArray([
  firsPost,
  ...posts,
  ...postsWithImages,
  ...postsWithVideos,
]);
