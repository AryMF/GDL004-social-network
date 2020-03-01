 import loader from "./loader.js"
 import { signIn } from "./signIn.js"
 import { profileInfo } from "./profileInfo.js";
 import { feed } from "./feed.js";
 import { notFound } from "./notFound.js";
 import { newPost } from "./newPost.js";
 import { profile } from "./profile.js";
 /*import home from "./home.js";
 import post from "./post.js";
 import profile from "./profile.js";*/


 const views = {
     loader,
     signIn,
     profileInfo,
     feed,
     profile,
     newPost,
     notFound
 };

 export { views }