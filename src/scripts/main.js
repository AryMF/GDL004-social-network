//TODO: import  * as auth from "./authentication.js";

/******************QuerySelectors************************/
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
/*******************************************************/

/*******************Functions***************************/
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

/*************Buttons event listener**********************/
//Event listener google button
document.querySelector(".fa-google").addEventListener("click", () => { loginWithProvider(1); });

//Event listener github button
document.querySelector(".fa-github").addEventListener("click", () => { loginWithProvider(2); });

//Event listener facebook button
document.querySelector(".fa-facebook-square").addEventListener("click", () => { loginWithProvider(3); });


document.querySelector("#submitForm").addEventListener("click", () => { submitFormFunction() });

//document.querySelector("#loginButton").addEventListener("click", () => { loginWithEmail() });

document.querySelector("#signOutButton").addEventListener("click", () => {
    signOut();
});
/***************************************************************************************/
let slideSecction = document.querySelector("#slideSecction");
let slideSecctionHeader = document.querySelector("#slideSecctionHeader");
let slideSecctionText = document.querySelector("#slideSecctionText");
let slideSecctionButton = document.querySelector("#slideSecctionButton");
slideSecctionButton.addEventListener("click", () => {
    if(slideSecctionButton.innerHTML == "Sign In"){
        slideSecction.classList.remove("sliderToLeft");
        slideSecctionHeader.innerHTML = "Hey you!";
        slideSecctionText.innerHTML = "Get on board and join our";
        slideSecctionButton.innerHTML = "Get started";
    } else {
        slideSecction.classList.add("sliderToLeft");
        slideSecctionHeader.innerHTML = "Welcome back!";
        slideSecctionText.innerHTML = "Get connected to continue making great things";
        slideSecctionButton.innerHTML = "Sign In";
    }
})