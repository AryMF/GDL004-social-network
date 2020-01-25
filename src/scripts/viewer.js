import { signInSelectors } from "../views/signIn.js"
import { profileInfoSelectors } from "../views/profileInfo.js";
import { feedSelectors } from "../views/feed.js";
import { newPostSelectors, newPost } from "../views/newPost.js"

let viewSelectors = {};

let form = document.getElementById("newPostForm");
const initConfiguration = () => {
    let logoutButton = document.querySelectorAll("[data-nav]");
    return logoutButton;
}

const setViewSelectors = (_route) => {
    viewSelectors = {};
    switch (_route) {
        case "":
            viewSelectors = {};
            break;
        case "signIn":
            viewSelectors = signInSelectors();
            break;
        case "profileInfo":
            viewSelectors = profileInfoSelectors();
            break;
        case "feed":
            viewSelectors = feedSelectors();
            break;
        case "newPost":
            viewSelectors = newPostSelectors();
            break;
    }
    // console.log(viewSelectors);
}

//signIn view
const sliderSecctionAction = () => {
    viewSelectors.formErrorMsj.setAttribute("style", "visibility: hidden;");
    viewSelectors.loginFormErrorMsj.setAttribute("style", "visibility: hidden;");
    viewSelectors.signInsignUpWindow.classList.toggle("toRightSide");
}

const printErrorMsj = (element, menssage, action) => {
    if (action) {
        //Esconder mensaje de error
        viewSelectors[element].setAttribute("style", "visibility: hidden;");
    } else {
        //Imprimir mensaje de error
        viewSelectors[element].setAttribute("style", "visibility: visible;");
        viewSelectors[element].innerHTML = menssage;
    }
}

const clearInputField = (arrayElements) => {
    arrayElements.forEach(element => {
        viewSelectors[element].value = "";
    });
}

const getInputValue = (arrayElements) => {
    let arrayValues = {};
    arrayElements.forEach(element => {
        arrayValues[element] = viewSelectors[element].value;
    });

    return arrayValues;
}

const setDataInProfileDataScreen = (arrayValues) => {
    console.log("updating data in profile");

    arrayValues.displayName != "null" ? viewSelectors.userNameInput.value = arrayValues.displayName : "";
    arrayValues.userAbout != "null" ? viewSelectors.userAboutInput.value = arrayValues.userAbout : "";
    arrayValues.userCountry != "null" ? viewSelectors.userCountryInput.value = arrayValues.userCountry : "";
    arrayValues.userBirthday != "null" ? viewSelectors.userBirthdayInput.value = arrayValues.userBirthday : "";
    arrayValues.profilePicture != "null" ? viewSelectors.userPicture.setAttribute("src", arrayValues.profilePicture) :
        viewSelectors.userPicture.setAttribute("src", "src//assets//imgs//avatar128.png");
}

const profileInfoNext = () => {
    viewSelectors.profileInfoWarning.setAttribute("style", "display: none;");
    if (viewSelectors.userNameInput.value != "") {
        viewSelectors.profileInfoInputScreen.setAttribute("style", "display:none;");
        viewSelectors.profileInfoInputScreen2.setAttribute("style", "display: grid;")
    } else {
        viewSelectors.profileInfoWarning.setAttribute("style", "display: block;");
    }
}

const finishAndCollectInputInfo = () => {
    console.log(viewSelectors.checkboxesTopic); //this is a nodelist, so it has to be converted to an array
    let profileInfo = {};
    const elementsChecked = Array.from(viewSelectors.checkboxesTopic).filter((item) => {
        return item.checked == true;
    })
    if (elementsChecked.length !== 0) {
        const elementsName = elementsChecked.map((item) => {
            return item.name
        })
        let profilePictureSrc = viewSelectors.userPicture.getAttribute("src");
        console.log(typeof profilePictureSrc);
        let _profilePicture;
        profilePictureSrc == "src//assets//imgs//avatar128.png" ? _profilePicture = null : _profilePicture = profilePictureSrc;
        console.log(typeof _profilePicture);
        profileInfo = {
            email: localStorage.getItem("email"),
            displayName: viewSelectors.userNameInput.value,
            userAbout: viewSelectors.userAboutInput.value,
            userCountry: viewSelectors.userCountryInput.value,
            userBirthday: viewSelectors.userBirthdayInput.value,
            profilePicture: _profilePicture,
            topics: elementsName
        }
    } else {
        viewSelectors.errormsg.setAttribute("style", "display:inline-block;");
        viewSelectors.errormsg.innerHTML = "Please, choose at least one topic!";
    }

    return profileInfo;
}

/*************************************/
const afterLoginConfigurations = () => {
    let navigationBar = document.querySelector(".navigationBar");
    let viewContainer = document.querySelector("#viewContainer");

    navigationBar.classList.add("login");
    viewContainer.classList.add("login");
};

const newPostConfigurations = () => {
    let navigationBar = document.querySelector(".navigationBar");
    let viewContainer = document.querySelector("#viewContainer");

    // navigationBar.classList.add("login");
    // viewContainer.classList.add("login");
};

const afterLogout = () => {
    let navigationBar = document.querySelector(".navigationBar");
    let viewContainer = document.querySelector("#viewContainer");

    navigationBar.classList.remove("login");
    viewContainer.classList.remove("login");
}

/************** Feed ****************************/
const printPreviewPost = (_collection) => {
    _collection.forEach(element => {
        viewSelectors.feedContainer.appendChild(previewPostTemplate(element));
    });
};

const loadNewPost = () => {
        let one = 2;
    }
    //aqui debe ir la funcion que mostrará el post, puse una función simple para que funcionara.


const previewPostTemplate = (_element) => {
    let postID = Object.keys(_element)[0];
    let previewPost = `
    <div class="postContainer" data-action="openPost" data-postId="${postID}">
        <i class="fa fa-bookmark-o postTopButton" data-action="favPost"></i>
        <img class="postImage" src=${ _element[postID].imgCover}  data-action="openPost" data-postId="${postID}">
        <h4 class="postTitle" data-action="openPost" data-postId="${postID}"> ${ _element[postID].title} </h4>
        <p class="postDescription" data-action="openPost" data-postId="${postID}"> ${ _element[postID].description} </p>                        
    </div>`;

    const divElement = document.createElement("div");
    divElement.innerHTML = previewPost;

    return divElement;
};
export {
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
    loadNewPost,
    form
}