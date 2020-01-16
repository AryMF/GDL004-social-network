//Variables globales
let idLoggedUser;
let isNewUser = false;

//Session listener
firebase.auth().onAuthStateChanged(function(user) {
    console.log("Revision de sesion, isNewUser", isNewUser);
    if (user) {
        // User is signed in. 
        user.providerData.forEach(function(profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            idLoggedUser = profile.email;
        });

        if (isNewUser == true) {
            profileInfoUpdate();
        } else {
            showProfile();
        }
    } else {
        // No user is signed in.
        /* TODO: Borrar esto
        welcomeScreen.setAttribute("style", "display: block;");
        loader.setAttribute("style", "display: none;"); //Flex
        profileScreen.setAttribute("style", "display:none;");*/
        screenSelector(false, true, false, false);

    }
});

//Github authentication
var providerGit = new firebase.auth.GithubAuthProvider();

//Twitter authentication
var providerTwitter = new firebase.auth.TwitterAuthProvider();

//Google authentication
var providerGoogle = new firebase.auth.GoogleAuthProvider();

const loginWithProvider = (provider) => {
    /* TODO: Borrar esto
    welcomeScreen.setAttribute("style", "display: none;");
    loader.setAttribute("style", "display: Flex;"); //Flex*/

    screenSelector(true, false, false, false);
    switch (provider) {
        case 1:
            firebase.auth().signInWithRedirect(providerGoogle);
            break;
        case 2:
            firebase.auth().signInWithRedirect(providerGit);
            break;
        case 3:
            firebase.auth().signInWithRedirect(providerTwitter);
            break;
    }
}

firebase.auth().getRedirectResult()
    .then(function(result) {
        if (result.user != null) {
            //Verifica si es un nuevo usuario
            isNewUser = result.additionalUserInfo.isNewUser;
            console.log("isNewUser: ", isNewUser);

            // profileCreation(result.user.displayName, result.user.email, result.user.photoURL); TODO: borrar linea una vez que todo funcione
        }
    }).catch(function(error) {
        /* TODO: Borrar esto
        welcomeScreen.setAttribute("style", "display: block;");
        loader.setAttribute("style", "display: none;"); //Flex
        profileScreen.setAttribute("style", "display:none;");*/
        screenSelector(false, true, false, false);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error " + errorCode + ": " + errorMessage);
        if (errorCode == "auth/account-exists-with-different-credential") {
            formErrorMsj.setAttribute("style", "visibility: visible;");
            loginFormErrorMsj.setAttribute("style", "visibility: visible;");
            formErrorMsj.innerHTML = "An account already exists with the same email but different sign-in credentials.";
            loginFormErrorMsj.innerHTML = "An account already exists with the same email but different sign-in credentials.";
        } else {
            alert("Ocurrio un error en la autenticación [Login with social network].");
        }
    });

//Registration with email
const emailRegistration = (userEmail, userPassword, userName) => {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(function() {
            isNewUser = true;
            showProfileInfoInput();
            // let user = firebase.auth().currentUser;
            // profileCreation(userName, user.email, null); TODO: borrar linea una vez que todo funcione

        }).catch(function(error) {
            // Handle Errors here.
            /* TODO: Borrar esto
            welcomeScreen.setAttribute("style", "display: block;");
            loader.setAttribute("style", "display: none;"); //Flex
            profileScreen.setAttribute("style", "display:none;");*/
            screenSelector(false, true, false, false);
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error " + errorCode + ": " + errorMessage);
            if (errorCode == "auth/email-already-in-use") {
                formErrorMsj.setAttribute("style", "visibility: visible;");
                formErrorMsj.innerHTML = "The email address is already in use by another account.";
            } else if (errorCode == "auth/invalid-email") {
                formErrorMsj.setAttribute("style", "visibility: visible;");
                formErrorMsj.innerHTML = "Invalid Email Address."
            } else if (errorCode == "auth/weak-password") {
                formErrorMsj.setAttribute("style", "visibility:visible;");
                formErrorMsj.innerHTML = "Password should be at least 6 characters."
            } else {
                alert("Ocurrio un error en la autenticación [Email account creation].");
            }
        });
}

//Login  with email/password
const loginWithEmail = (loginFormUserEmail, loginFormUserPassword) => {
    firebase.auth().signInWithEmailAndPassword(loginFormUserEmail, loginFormUserPassword)
        .then(() => {
            isNewUser = false;
        }).catch(function(error) {
            /*TODO: Borrar esto
            welcomeScreen.setAttribute("style", "display: block;");
            loader.setAttribute("style", "display: none;"); //Flex
            profileScreen.setAttribute("style", "display:none;");
            profileInfoInputContainer.setAttribute("style", "display:none;");*/
            screenSelector(false, true, false, false);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error " + errorCode + ": " + errorMessage);
            if (errorCode == "auth/user-not-found") {
                loginFormErrorMsj.setAttribute("style", "visibility: visible;");
                loginFormErrorMsj.innerHTML = "There is no user record corresponding to this identifier.";
            } else if (errorCode == "auth/invalid-email") {
                loginFormErrorMsj.setAttribute("style", "visibility: visible;");
                loginFormErrorMsj.innerHTML = "Invalid Email Address."
            } else if (errorCode == "auth/wrong-password") {
                loginFormErrorMsj.setAttribute("style", "visibility:visible;");
                loginFormErrorMsj.innerHTML = "The password is invalid."
            } else {
                alert("Ocurrio un error en la autenticación [Email account login].");
            }
        });
}

//Signout
const signOut = () => {
    //TODO: fallo boton rezagado, mostrar loader.
    profileScreen.setAttribute("style", "visibility: hidden;");
    loader.setAttribute("style", "visibility: visible;");
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        userProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");

        userProfileName.innerHTML = "";
        userProfileEmail.innerHTML = "";
    }).catch(function(error) {
        // An error happened.
    });
}

//TODO: export * as auth from "";