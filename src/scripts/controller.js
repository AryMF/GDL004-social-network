import {
    initConfiguration,
    afterLogout,
    setViewSelectors,
    sliderSecctionAction,
    printErrorMsj,
    clearInputField,
    getInputValue,
    setDataInProfileDataScreen,
    profileInfoNext,
    finishAndCollectInputInfo,
    afterLoginConfigurations,
    printPreviewPost,
    profileDataMainSection,
    printUserDataProfile,
    profileFileListener,
    setPictureSRC,
    loadNewPost
} from "./viewer.js";
import { router } from "./router.js";
import { loginWithProvider, emailRegistration, loginWithEmail, signOut, newPostCreation } from "./authentication.js";
import { profileCreation, fetchData, fetchMockData, fileUpload } from "./data.js";
import { newPost as newPostV } from "../views/newPost.js";


const viewContainer = document.querySelector("#viewContainer");
const defaultView = "/";
let topScreenNavBar;

const main = () => {
    topScreenNavBar = initConfiguration();

    /***********Quick fix para pruebas***************/
    //TODO: arreglar antes de deploy
    for (let i = 0; i < 6; i++) {
        topScreenNavBar[i].addEventListener("click", () => {
            topScreenNavBar.forEach(element => {
                element.classList.remove("active");
            });
            topScreenNavBar[i].classList.add("active");
            location.hash = topScreenNavBar[i].getAttribute("data-nav");
        });
    }

    // topScreenNavBar[5].addEventListener("click", () => {
    //     closeSession();
    // });
    /*************************************************/

};

//Listener for loading
window.addEventListener("load", () => {
    location.hash = defaultView;
    handleHashChange(defaultView.slice(2));
    main();
    // handleSessionStatus();
});

window.addEventListener("hashchange", () => {
    handleHashChange(location.hash.slice(2));
});

/***************************************************/
const handleSessionStatus = () => {
    //Verificar si existe sesion
    if (localStorage.getItem("email")) {
        if (localStorage.getItem("isNewUser") == "true") {
            //Abrir view de profileInfo
            console.log("Es nuevo usuario, abrir profile info");
            location.hash = "/profileInfo";
            topScreenNavBar[2].classList.remove("active");

        } else {
            // Abrir view feed
            console.log("No es nuevo usuario, abrir feed");
            //Hacer visible la barra de menu y adaptar tamanio de viewContainer
            afterLoginConfigurations();
            location.hash = "/feed";
        }
    } else {
        //Abrir view signIn
        console.log("Abrir signIn");
        location.hash = "/signIn";
    }
};

/***************************************************/
const handleHashChange = (_route) => {
    viewContainer.innerHTML = "";
    viewContainer.appendChild(router(_route));
    setViewSelectors(_route);

    /***Contenido dinamico******/
    switch (_route) {
        case "profileInfo":
            loadProfileInfoData();
            break;
        case "post":
            printPreviewPost();
            break;
        case "feed":
            loadFeed();
            break;
        case "newPost":
            loadNewPost();
            break;
        case "profile":
            topScreenNavBar[1].classList.add("active");
            loadProfileUserData();
            loadProfilePost("post");
            // loadProfilePost("post");
            break;
    }
};
/***************************************/
//Eventlistener controller
const eventListenerHandler = (e) => {
    let clickedItem = e.target;
    let dataAction = clickedItem.getAttribute("data-action");
    if (dataAction) { //Validar que es un objeto con accion
        actionsHandler(clickedItem, dataAction);
    }
    e.stopPropagation();
};

viewContainer.addEventListener("click", eventListenerHandler);

const actionsHandler = (_clickedItem, _action) => {
    switch (_action) {
        //signIn Screen
        case "slideSecctionSignUp":
        case "slideSecctionSignIn":
            sliderSecctionAction();
            break;
        case "socialNetworkButton":
            socialNetworkButton(_clickedItem);
            break;
        case "submitForm":
            submitRegistrationForm();
            break;
        case "loginButton":
            submitLoginForm();
            break;
            //Profile info
        case "profileInfoNext":
            profileInfoNext();
            break;
        case "profileInfoSubmit":
            profileInfoSubmit();
            break;
            //Feed screen
        case "favPost":
            _clickedItem.classList.remove("fa-bookmark-o");
            _clickedItem.classList.add("fa-check");
            _clickedItem.setAttribute("data-action", "unFavPost");
            break;
        case "unFavPost":
            _clickedItem.classList.remove("fa-check");
            _clickedItem.classList.add("fa-bookmark-o");
            _clickedItem.setAttribute("data-action", "favPost");
            break;
        case "openPost":
            //aqui debe ir el modal
            alert("Post: " + _clickedItem.getAttribute("data-postId"));
            break;
        case "newPost":
            alert("quieres crear un nuevo post?")
            newPostCreation();
            break;
            //Profile
        case "showUserPost":
            loadProfilePost("post");
            break;
        case "showUserFav":
            loadProfilePost("fav");
            break;
        case "editProfile":
            topScreenNavBar[1].classList.remove("active");
            location.hash = "/profileInfo";
            break;
        case "logoutOption":
            closeSession();
            break;
        default:
    }
};

/****************************************/

/*********Loging con redes sociales***********/
const socialNetworkButton = (element) => {
    if (element.classList.contains("fa-google")) {
        loginWithProvider(1);
    } else if (element.classList.contains("fa-github-alt")) {
        loginWithProvider(2);
    } else {
        loginWithProvider(3);
    }
};

window.addEventListener("redirected", handleSessionStatus);

/********Registro con email ****************/
const submitRegistrationForm = () => {
    printErrorMsj("formErrorMsj", "", true);
    if (userEmail.value != "" && userPassword.value != "" && userPasswordConfirmation.value != "") {
        if (userPassword.value === userPasswordConfirmation.value) {
            //Si paso todas las validaciones
            // emailRegistration(userEmail.value, userPassword.value, userName.value);
            let inputArrayValue = getInputValue(["userEmail", "userPassword"]);
            emailRegistration(inputArrayValue.userEmail, inputArrayValue.userPassword)
                .then(function() {
                    localStorage.setItem("isNewUser", true);
                    handleSessionStatus();
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error("Error " + errorCode + ": " + errorMessage);
                    //handling errors has to be done like this
                    if (errorCode == "auth/email-already-in-use") {
                        printErrorMsj("formErrorMsj", "The email address is already in use by another account.", false);
                    } else if (errorCode == "auth/invalid-email") {
                        printErrorMsj("formErrorMsj", "Invalid Email Address.", false);
                    } else if (errorCode == "auth/weak-password") {
                        printErrorMsj("formErrorMsj", "Password should be at least 6 characters.", false);
                    } else {
                        alert("Ocurrio un error en la autenticación [Email account creation].");
                    }
                });

            // clearInputField(["userEmail", "userPassword", "userPasswordConfirmation"]);

        } else {
            printErrorMsj("formErrorMsj", "The password confirmation does not match", false);
        }

    } else {
        printErrorMsj("formErrorMsj", "All fields are required", false);

    }
};


/*** Account additional info ***/
const loadProfileInfoData = () => {
    let profileInfo = {}
    if (localStorage.getItem("isNewUser") == "true") {
        profileInfo = {
            email: localStorage.getItem("email"),
            displayName: localStorage.getItem("displayName"),
            userAbout: "null",
            userCountry: "null",
            userBirthday: "null",
            profilePicture: localStorage.getItem("photoURL"),
            topics: "null"
        }
        setDataInProfileDataScreen(profileInfo);
    } else {
        //Llama a la base de datos
        let loggedUser = localStorage.getItem("email");
        fetchData("user", loggedUser).then(function(profileData) {
            if (profileData.exists) {
                console.log("profileData", profileData.data());
                setDataInProfileDataScreen(profileData.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    let fileListener = profileFileListener();
    fileListener.addEventListener("change", element => {
        let file = element.target.files[0];
        setProfilePicture(file);
    });
}

const setProfilePicture = (_file) => {
    fileUpload(_file).then(downloadURL => {
        console.log('File available at', downloadURL);
        // localStorage.setItem("photoURL", downloadURL);
        setPictureSRC(downloadURL);
    });
}

const profileInfoSubmit = () => {
    let profileInfo = finishAndCollectInputInfo();
    console.log(profileInfo);
    profileCreation(profileInfo).then(function() {
        console.log("Document successfully written!");
        location.hash = "/profile";
        afterLoginConfigurations();
    });
    // showProfile();
}

/********Login con email ****************/
const submitLoginForm = () => {
    printErrorMsj("loginFormErrorMsj", "", true);
    if (loginFormUserEmail.value != "" && loginFormUserPassword.value != "") {
        //Si paso todas las validaciones
        let inputArrayValue = getInputValue(["loginFormUserEmail", "loginFormUserPassword"]);

        loginWithEmail(inputArrayValue.loginFormUserEmail, inputArrayValue.loginFormUserPassword)
            .then(() => {
                localStorage.setItem("isNewUser", false);
                handleSessionStatus();
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error("Error " + errorCode + ": " + errorMessage);
                if (errorCode == "auth/user-not-found") {
                    printErrorMsj("loginFormErrorMsj", "There is no user record corresponding to this identifier.", false);
                } else if (errorCode == "auth/invalid-email") {
                    printErrorMsj("loginFormErrorMsj", "Invalid Email Address.", false);
                } else if (errorCode == "auth/wrong-password") {
                    printErrorMsj("loginFormErrorMsj", "The password is invalid.", false);
                } else {
                    alert("Ocurrio un error en la autenticación [Email account login].");
                }
            });

        // clearInputField(["loginFormUserEmail", "loginFormUserPassword"]);
    } else {
        printErrorMsj("loginFormErrorMsj", "All fields are required.", false);
    }
}

/************* Feed **************/
const loadFeed = () => {
    let collection = fetchMockData();
    printPreviewPost(collection);
};

/************* Profile **************/
const loadProfileUserData = () => {
    //Cargar data de usuario
    let loggedUser = localStorage.getItem("email");

    fetchData("user", loggedUser).then(function(profileData) {
        if (profileData.exists) {
            printUserDataProfile(profileData);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

const loadProfilePost = (option) => {
    //Cargar data de seccion main
    //Evaluar opcion para definir si se necesita post o favs
    let collection = fetchMockData(); //Indicar coleccion Post, con uid
    // collection = {}; //Prueba para coleccion vacia
    profileDataMainSection(collection, option);
};

//Logout
const closeSession = () => {
    signOut()
        .then(function() {
            // Sign-out successful.
            afterLogout();
        }).catch(function(error) {
            // An error happened.
        });
}