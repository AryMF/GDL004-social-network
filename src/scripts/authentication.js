//Variables globales
const triggeredWhenRedirected = new Event("redirected");
localStorage.setItem("isNewUser", false);

//Session Listener
firebase.auth().onAuthStateChanged(function(user) {
    // console.log("Revision de sesion, isNewUser", localStorage.getItem("isNewUser"));
    if (user) {
        // User is signed in. 
        localStorage.setItem("photoURL", user.photoURL);
        localStorage.setItem("displayName", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("uid", user.uid);
<<<<<<< HEAD
        console.log("AuthStateChange: ", user);
=======
        // console.log("AuthStateChange: ", user);
>>>>>>> 7f61c7ecff067025aec6e0725737834ceb10b121
        window.dispatchEvent(triggeredWhenRedirected);
    } else {
        // No user is signed in.
        localStorage.removeItem("photoURL");
        localStorage.removeItem("displayName");
        localStorage.removeItem("email");
        localStorage.removeItem("uid");
        window.dispatchEvent(triggeredWhenRedirected);
    }
});

//Google authentication
var providerGoogle = new firebase.auth.GoogleAuthProvider();
//Github authentication
var providerGit = new firebase.auth.GithubAuthProvider();
//Twitter authentication
var providerTwitter = new firebase.auth.TwitterAuthProvider();

const loginWithProvider = (provider) => {
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
    .then((result) => {
        if (result.user != null) {
            //Verifica si es un nuevo usuario
            localStorage.setItem("isNewUser", result.additionalUserInfo.isNewUser);
        }
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error " + errorCode + ": " + errorMessage);
        /* TODO: manejo de error
        if (errorCode == "auth/account-exists-with-different-credential") {
            loginFormErrorMsj.setAttribute("style", "visibility: visible;");
            loginFormErrorMsj.setAttribute("style", "visibility: visible;");
            loginFormErrorMsj.innerHTML = "An account already exists with the same email but different sign-in credentials.";
            loginFormErrorMsj.innerHTML = "An account already exists with the same email but different sign-in credentials.";
        } else {*/
        // alert("Ocurrio un error en la autenticación [Login with social network].");
        // }
    });


//Registration with email
const emailRegistration = (userEmail, userPassword) => {
    console.log(userEmail, userPassword);
    return firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword);
}

//Login  with email/password
const loginWithEmail = (loginFormUserEmail, loginFormUserPassword) => {
    return firebase.auth().signInWithEmailAndPassword(loginFormUserEmail, loginFormUserPassword);
}

//Signout
const signOut = () => {
    return firebase.auth().signOut();
}

export { loginWithProvider, emailRegistration, loginWithEmail, signOut }