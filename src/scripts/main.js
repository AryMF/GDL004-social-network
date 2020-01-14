//Google authentication
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().getRedirectResult()
    .then(function(result) {
        if (result.user != null) {
            profileCreation(result.user.uid, result.user.displayName, result.user.email, result.user.photoURL);
        }
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Ocurrio un error en la autenticación.");
        console.error("Error " + errorCode + ": " + errorMessage);
    });

//Github authentication
var providerGit = new firebase.auth.GithubAuthProvider();

//Email\Password authentication || Usuario con sesion activa
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        user.providerData.forEach(function(profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            showProfile(profile.photoURL, profile.displayName, profile.email);
        });
    } else {
        // No user is signed in.
    }
});
/************************************************/

//QuerySelectors
//Account creation
let formErrorMsj = document.querySelector(".formErrorMsj");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let userPasswordConfirmation = document.querySelector("#userPasswordConfirmation");

//ProfileScreen
let loginWindow = document.querySelector("#loginWindow")
let profileScreen = document.querySelector("#profileScreen")
let userProfilePicture = document.querySelector("#userProfilePicture")
let userProfileName = document.querySelector("#userProfileName")
let userProfileEmail = document.querySelector("#userProfileEmail")
    /************************************************/

//Functions
const showProfile = (photoURL, displayName, email) => {
    loginWindow.setAttribute("style", "visibility: hidden;");
    profileScreen.setAttribute("style", "visibility: visible;");
    photoURL != null ? userProfilePicture.setAttribute("src", photoURL) : userProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");
    userProfileName.innerHTML = displayName;
    userProfileEmail.innerHTML = email;
}

const submitFormFunction = () => {
    //TODO: Validación de correo y seguridad de contraseña.
    if (userName.value != "" && userEmail.value != "" && userPassword.value != "" && userPasswordConfirmation.value != "") {
        if (userPassword.value === userPasswordConfirmation.value) {
            //Si paso todas las validaciones 
            formErrorMsj.setAttribute("style", "visibility: hidden;");
            firebase.auth().createUserWithEmailAndPassword(userEmail.value, userPassword.value)
                .then(function() {
                    //TODO: uid con Email authentication
                    let user = firebase.auth().currentUser;
                    profileCreation(user.uid, userName.value, user.email, "default");

                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error("Error " + errorCode + ": " + errorMessage);
                    if (errorCode == "auth/email-already-in-use") {
                        formErrorMsj.setAttribute("style", "visibility: visible;");
                        formErrorMsj.innerHTML = "The email address is already in use by another account.";
                    } else {
                        alert("Ocurrio un error en la autenticación.");
                    }
                });
        } else {
            formErrorMsj.setAttribute("style", "visibility: visible;");
            formErrorMsj.innerHTML = "The password confirmation does not match";
        }

    } else {
        formErrorMsj.setAttribute("style", "visibility: visible;");
        formErrorMsj.innerHTML = "All fields are required";

    }
}

const loginWithEmail = () => {
    firebase.auth().signInWithEmailAndPassword(userEmail.value, userPassword.value)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error " + errorCode + ": " + errorMessage);
            alert("Ocurrio un error en la autenticación.");
        });
}

const profileCreation = (userID, name, email, picture) => {
    let profileInfo = {
        uid: userID,
        user: name,
        userEmail: email,
        profilePicture: picture
    }
    firebase.database().ref("user/" + userID)
        .set(profileInfo);
}

/**********************************************************************************/
//Buttons event listener
//Event listener google button
document.querySelector(".fa-google-plus-circle").addEventListener("click", () => {
    console.log("Click en boton Google");
    firebase.auth().signInWithRedirect(provider);
    /* PopUp
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        console.log(result.user);
    });
    */
});

//Event listener github button
document.querySelector(".fa-github").addEventListener("click", () => {
    console.log("Click en boton Github");
    firebase.auth().signInWithRedirect(providerGit);
});



document.querySelector("#submitForm").addEventListener("click", () => { submitFormFunction() });

document.querySelector("#loginButton").addEventListener("click", () => { loginWithEmail() });

document.querySelector("#signOutButton").addEventListener("click", () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        loginWindow.setAttribute("style", "visibility: visible;");
        profileScreen.setAttribute("style", "visibility: hidden;");
        useruserProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");
        userProfileName.innerHTML = "";
        userProfileEmail.innerHTML = "";
    }).catch(function(error) {
        // An error happened.
    });
});
/***************************************************************************************/