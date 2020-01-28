import { views } from "../views/views.js"


const router = (route) => {
    switch (route) {
        case "":
            return views.loader();
            break;
        case "signIn":
            return views.signIn();
            break;
        case "profileInfo":
            return views.profileInfo();
            break;
        case "feed":
            return views.feed();
            break;
        case "profile":
            return views.profile();
            break;
        case "newPost":
            return views.newPost();
            break;
        default:
            return views.notFound();
            break;
    }
}

export { router }