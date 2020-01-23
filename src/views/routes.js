 import loader from "./loader.js"
 import { signIn } from "./signIn.js"
 import { profileInfo } from "./profileInfo.js";
 import { feed } from "./feed.js";
 import { notFound } from "./notFound.js";
 import { newPostView } from "./newPostView.js";
 /*import home from "./home.js";
 import post from "./post.js";
 import profile from "./profile.js";*/


 const routes = {
     loader,
     signIn,
     profileInfo,
     feed,
     notFound,
     newPostView
 };

 export { routes }