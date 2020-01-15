//TODO: import  * as auth from "./authentication.js";

/******************QuerySelectors************************/
//Account creation
let formErrorMsj = document.querySelector(".formErrorMsj");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let userPasswordConfirmation = document.querySelector("#userPasswordConfirmation");

//Login
let loginFormErrorMsj = document.querySelector(".loginFormErrorMsj");
let loginFormUserEmail = document.querySelector("#loginFormUserEmail");
let loginFormUserPassword = document.querySelector("#loginFormUserPassword");

//Slider
let slideSecctionSignIn = document.querySelector("#slideSecctionSignIn");
let slideSecctionSignUp = document.querySelector("#slideSecctionSignUp");

//ProfileScreen
let welcomeScreen = document.querySelector("#welcomeScreen");
let signInsignUpWindow = document.querySelector(".signInsignUpWindow");
let profileScreen = document.querySelector("#profileScreen");
let loader = document.querySelector(".loader");
let userProfilePicture = document.querySelector("#userProfilePicture")
let userProfileName = document.querySelector("#userProfileName")
let userProfileEmail = document.querySelector("#userProfileEmail")
/*******************************************************/

/*******************Functions***************************/
const submitRegistrationForm = () => {
    formErrorMsj.setAttribute("style", "visibility: hidden;");
    if (userName.value != "" && userEmail.value != "" && userPassword.value != "" && userPasswordConfirmation.value != "") {
        if (userPassword.value === userPasswordConfirmation.value) {
            //Si paso todas las validaciones 
            welcomeScreen.setAttribute("style", "display: none;");
            loader.setAttribute("style", "display: none;"); //Flex
            profileScreen.setAttribute("style", "display:block;");
            emailRegistration(userEmail.value, userPassword.value, userName.value);
        } else {
            formErrorMsj.setAttribute("style", "visibility: visible;");
            formErrorMsj.innerHTML = "The password confirmation does not match";
        }

    } else {
        formErrorMsj.setAttribute("style", "visibility: visible;");
        formErrorMsj.innerHTML = "All fields are required";

    }
}

const submitLoginForm = () => {
    loginFormErrorMsj.setAttribute("style", "visibility: hidden;");
    if (loginFormUserEmail.value != "" && loginFormUserPassword.value != "") {
        //Si paso todas las validaciones 
        welcomeScreen.setAttribute("style", "display: none;");
        loader.setAttribute("style", "display: Flex;"); //Flex
        profileScreen.setAttribute("style", "display:none;");
        loginWithEmail(loginFormUserEmail.value, loginFormUserPassword.value);
    } else {
        loginFormErrorMsj.setAttribute("style", "visibility: visible;");
        loginFormErrorMsj.innerHTML = "All fields are required";

    }
}

const showProfile = () => {
    welcomeScreen.setAttribute("style", "display: none;");
    loader.setAttribute("style", "display: none;"); //Flex
    profileScreen.setAttribute("style", "display:block;");
    fetchData("user", idLoggedUser).then(function(profileData) {
        if (profileData.exists) {
            const { displayName, email, profilePicture } = profileData.data();
            profilePicture != null ? userProfilePicture.setAttribute("src", profilePicture) : userProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");
            userProfilePicture.setAttribute("alt", "Avatar");
            userProfileName.innerHTML = displayName;
            userProfileEmail.innerHTML = email;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

/*************Buttons event listener**********************/
//Event listener google button
document.querySelectorAll(".fa-google").forEach((element) => {
    element.addEventListener("click", () => { loginWithProvider(1); });
});

//Event listener github button
document.querySelectorAll(".fa-github").forEach((element) => {
    element.addEventListener("click", () => { loginWithProvider(2); });
});

//Event listener facebook button
document.querySelectorAll(".fa-facebook-square").forEach((element) => {
    element.addEventListener("click", () => { loginWithProvider(3); });
});

//Welcome screen
slideSecctionSignIn.addEventListener("click", () => {
    formErrorMsj.setAttribute("style", "visibility: hidden;");
    loginFormErrorMsj.setAttribute("style", "visibility: hidden;");
    signInsignUpWindow.classList.add("toRightSide");
});

slideSecctionSignUp.addEventListener("click", () => {
    formErrorMsj.setAttribute("style", "visibility: hidden;");
    loginFormErrorMsj.setAttribute("style", "visibility: hidden;");
    signInsignUpWindow.classList.remove("toRightSide");
});

document.querySelector("#submitForm").addEventListener("click", () => { submitRegistrationForm() });
document.querySelector("#loginButton").addEventListener("click", () => { submitLoginForm() });
document.querySelector("#signOutButton").addEventListener("click", () => { signOut(); });
/***************************************************************************************/