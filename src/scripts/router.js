import { routes } from "../views/routes.js"


const router = (route) => {
    console.log("Entre a router con: ", route);
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
        default:
            return routes.notFound();
            break;
    }
}

export { router }