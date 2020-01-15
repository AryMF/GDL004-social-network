//Variables globales
let idLoggedUser;

//Session listener
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        user.providerData.forEach(function(profile) {
            console.log(profile);
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            idLoggedUser = profile.email;
            showProfile();
        });
    } else {
        // No user is signed in.
        welcomeScreen.setAttribute("style", "display: block;");
        loader.setAttribute("style", "display: none;"); //Flex
        profileScreen.setAttribute("style", "display:none;");
    }
});

//Github authentication
var providerGit = new firebase.auth.GithubAuthProvider();

//Facebook authentication
var providerFacebook = new firebase.auth.FacebookAuthProvider();

//Google authentication
var providerGoogle = new firebase.auth.GoogleAuthProvider();

const loginWithProvider = (provider) =>{
    welcomeScreen.setAttribute("style", "display: none;");
    loader.setAttribute("style", "display: Flex;"); //Flex
    switch(provider){
        case 1:
            firebase.auth().signInWithRedirect(providerGoogle);
        break;
        case 2:
            firebase.auth().signInWithRedirect(providerGit);
        break;
        case 3:
            firebase.auth().signInWithRedirect(providerFacebook);
        break;
    }
}

firebase.auth().getRedirectResult()
    .then(function(result) {
        if (result.user != null) {
            //TODO: fix blinker
            profileCreation(result.user.displayName, result.user.email, result.user.photoURL);
            
        }
    }).catch(function(error) {
        welcomeScreen.setAttribute("style", "display: block;");
        loader.setAttribute("style", "display: none;"); //Flex
        profileScreen.setAttribute("style", "display:none;");
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
            alert("Ocurrio un error en la autenticación [Loggin with social network].");
        }
    });

//Registration with email
const emailRegistration = (userEmail, userPassword,userName) => {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
                .then(function() {
                    //TODO: uid con Email authentication
                    let user = firebase.auth().currentUser;
                    profileCreation(userName, user.email, null);

                }).catch(function(error) {
                    // Handle Errors here.
                    welcomeScreen.setAttribute("style", "display: block;");
                    loader.setAttribute("style", "display: none;"); //Flex
                    profileScreen.setAttribute("style", "display:none;");
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
        .catch(function(error) {
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


