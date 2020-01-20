//TODO: import  * as auth from "./authentication.js";

/******************QuerySelectors************************/
//Account creation
let formErrorMsj = document.querySelector(".formErrorMsj");
// let userName = document.querySelector("#userName");
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
let userProfilePicture = document.querySelector("#userProfilePicture");
let userProfileName = document.querySelector("#userProfileName");
let userProfileEmail = document.querySelector("#userProfileEmail");
let userProfileAbout = document.querySelector("#userProfileAbout");
let userProfileCountry = document.querySelector("#userProfileCountry");

//Profile Info Input
let profileInfoInputContainer = document.querySelector(".profileInfoInput-container");
let profileInfoWarning = document.querySelector("#profileInfoWarning");
let userNameInput = document.querySelector("#userName");
let userAboutInput = document.querySelector("#userAbout");
let userCountryInput = document.querySelector("#userCountry");
let userBirthdayInput = document.querySelector("#userBirthday");
let userPicture = document.querySelector("userPicture");
let changePictureButton = document.querySelector(".fa-camera");
let profileInfoInputContinue = document.querySelector("#profileInfoInputContinue");
//Profile Info Input Topics
let profileInfoInputTopics = document.querySelector(".profileInfoInputTopics");
let profileInfoInputScreen2 = document.querySelector(".profileInfoInput-screen2");
let errormsg = document.querySelector("#errorTopic");
let checkboxesTopic = document.querySelectorAll(".cb");
/*******************************************************/

/*******************Functions***************************/
const submitRegistrationForm = () => {
    formErrorMsj.setAttribute("style", "visibility: hidden;");
    if (userEmail.value != "" && userPassword.value != "" && userPasswordConfirmation.value != "") {
        if (userPassword.value === userPasswordConfirmation.value) {
            //Si paso todas las validaciones 
            screenSelector(true, false, false, false);
            emailRegistration(userEmail.value, userPassword.value, userName.value);
            userEmail.value = "";
            userPassword.value = "";
            userPasswordConfirmation.value = "";
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
        screenSelector(true, false, false, false);
        loginWithEmail(loginFormUserEmail.value, loginFormUserPassword.value);
        loginFormUserEmail.value = "";
        loginFormUserPassword.value = "";
    } else {
        loginFormErrorMsj.setAttribute("style", "visibility: visible;");
        loginFormErrorMsj.innerHTML = "All fields are required";

    }
}


const showProfile = () => {
    screenSelector(false, false, true, false);
    profileInfoInputTopics.setAttribute("style", "display: none;")
    fetchData("user", idLoggedUser).then(function(profileData) {
        if (profileData.exists) {
            const { displayName, email, profilePicture, userAbout, userCountry } = profileData.data();
            profilePicture != null ? userProfilePicture.setAttribute("src", profilePicture) : userProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");
            userProfilePicture.setAttribute("alt", "Avatar");
            userProfileName.innerHTML = displayName;
            userProfileAbout.innerHTML = email;
            userProfileEmail.innerHTML = userAbout;
            userProfileCountry.innerHTML = userCountry;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

//TODO: Funcion temporal para cambio de pantalla
const screenSelector = (_loader, _welcomeScreen, _profileScreen, _profileInfoInputContainer, _profileInfoInputTopics) => {
    _loader === true ? loader.setAttribute("style", "display: Flex;") :
        loader.setAttribute("style", "display: none;"); //Flex
    _welcomeScreen === true ? welcomeScreen.setAttribute("style", "display: block;") :
        welcomeScreen.setAttribute("style", "display: none;");
    _profileScreen === true ? profileScreen.setAttribute("style", "display: block;") :
        profileScreen.setAttribute("style", "display: none;");
    _profileInfoInputContainer === true ? profileInfoInputContainer.setAttribute("style", "display: block;") :
        profileInfoInputContainer.setAttribute("style", "display: none;");
    _profileInfoInputTopics === true ? profileInfoInputTopics.setAttribute("style", "display: block;") :
        profileInfoInputTopics.setAttribute("style", "display:none;");
}


//Funcion para cargar datos adicionales
const profileInfoNext = () => {
    screenSelector(false, false, false, true);
    profileInfoWarning.setAttribute("style", "display: none;");
    if (userNameInput.value != "") {
        profileInfoInputContainer.setAttribute("style", "display:none;");
        profileInfoInputTopics.setAttribute("style", "display: block;")
    } else {
        profileInfoWarning.setAttribute("style", "display: block;");
    }
}


/*************Buttons event listener**********************/
//Event listener google button
document.querySelectorAll(".fa-google").forEach((element) => {
    element.addEventListener("click", () => { loginWithProvider(1); });
});

//Event listener github button
document.querySelectorAll(".fa-github-alt").forEach((element) => {
    element.addEventListener("click", () => { loginWithProvider(2); });
});

//Event listener twitter button
document.querySelectorAll(".fa-twitter").forEach((element) => {
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

//Profile info update button
profileInfoInputContinue.addEventListener("click", () => { profileInfoNext(); });
profileInfoTopicsFinish.addEventListener("click", () => { finishAndCollectInputInfo(); });
/***************************************************************************************/




//CHECKBOXES CHECKED FUNCTION
function finishAndCollectInputInfo() {
    var checkBoxes = document.querySelectorAll(".cb");
    console.log(checkBoxes); //this is a nodelist, so it has to be converted to an array

    const elementsChecked = Array.from(checkBoxes).filter((item) => {
        return item.checked == true;
    })
    if (elementsChecked.length !== 0) {
        const elementsName = elementsChecked.map((item) => {
            return item.name
        })
        let profileInfo = {
            email: idLoggedUser,
            displayName: userNameInput.value,
            userAbout: userAboutInput.value,
            userCountry: userCountryInput.value,
            userBirthday: userBirthdayInput.value,
            profilePicture: profilePicGlobal,
            topics: elementsName
        }
        profileCreation(profileInfo);
        showProfile();
    } else {
        errormsg.setAttribute("style", "display:inline-block;");
        errormsg.innerHTML = "Please, choose at least one topic!";
    }
};