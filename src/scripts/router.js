import { routes } from "../views/routes.js"


const router = (route) => {
    switch (route) {
        case "":
            return routes.loader();
            break;
        case "signIn":
            return routes.signIn();
            break;
        case "profileInfo":
            return routes.profileInfo();
            break;
        case "feed":
            return routes.feed();
            break;
        case "profile":
            return routes.profile();
            break;
        case "newPost":
            return routes.newPost();
            break;
        default:
            return routes.notFound();
            break;
    }
}

export { router }