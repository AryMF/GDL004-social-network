import { signInSelectors } from "../views/signIn.js"
import { profileInfoSelectors } from "../views/profileInfo.js";
import { feedSelectors } from "../views/feed.js";
import { newPostSelectors, newPost } from "../views/newPost.js"
import { profileSelectors } from "../views/profile.js";

let viewSelectors = {};


const initConfiguration = () => {
    let topMenuBarButtons = document.querySelectorAll("[data-nav]");
    return topMenuBarButtons;
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
        case "profile":
            viewSelectors = profileSelectors();
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

const fileListenerElement = (opcion) => {
    let element;
    opcion == "profile" ? element = viewSelectors.pictureFile : element = viewSelectors.postPicture;
    return element;
}

const setPictureSRC = (opcion, _downloadURL) => {
    opcion == "profile" ? viewSelectors.userPicture.setAttribute("src", _downloadURL) :
        viewSelectors.imagePost.setAttribute("src", _downloadURL);
};

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
    let profileInfo = {};
    const elementsChecked = Array.from(viewSelectors.checkboxesTopic).filter((item) => {
        return item.checked == true;
    })
    if (elementsChecked.length !== 0) {
        const elementsName = elementsChecked.map((item) => {
            return item.name
        })
        let profilePictureSrc = viewSelectors.userPicture.getAttribute("src");
        let _profilePicture;
        profilePictureSrc == "src//assets//imgs//avatar128.png" ? _profilePicture = "null" : _profilePicture = profilePictureSrc;
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



const previewPostTemplate = (_element) => {
    let postID = Object.keys(_element)[0];
    let previewPost = `
    <i class="fa fa-bookmark-o postTopButton" data-action="favPost"></i>
    <img class="postImage" src=${ _element[postID].imgCover}  data-action="openPost" data-postId="${postID}">
    <h4 class="postTitle" data-action="openPost" data-postId="${postID}"> ${ _element[postID].title} </h4>
    <p class="postDescription" data-action="openPost" data-postId="${postID}"> ${ _element[postID].description} </p>`;

    const divElement = document.createElement("div");
    divElement.setAttribute("class", "postContainer");
    divElement.setAttribute("data-action", "openPost");
    divElement.setAttribute("data-postId", postID);
    divElement.innerHTML = previewPost;

    return divElement;
};

/*********** Profile *********************************/
// navigationBar.classList.add("sendToBottom");

const printUserDataProfile = (_profileData) => {
    const { displayName, profilePicture, userAbout, userCountry } = _profileData.data();
    profilePicture != "null" ? userProfilePicture.setAttribute("src", profilePicture) : userProfilePicture.setAttribute("src", "src//assets//imgs//avatar128.png");
    userProfilePicture.setAttribute("alt", "Avatar");
    viewSelectors.userProfileName.innerHTML = displayName;
    viewSelectors.userProfileAbout.innerHTML = userAbout;
    viewSelectors.userProfileCountry.innerHTML = "From " + userCountry;

    viewSelectors.profileScreen.addEventListener("scroll", stickyMenu);
}

const profileDataMainSection = (_collection, _option) => {
    if (_option == "post") {
        viewSelectors.postSection.classList.add("active");
        viewSelectors.favSection.classList.remove("active");
    } else {
        viewSelectors.favSection.classList.add("active");
        viewSelectors.postSection.classList.remove("active");
    }

    if (Object.keys(_collection).length > 0) { //Verificar que no sea una coleccion vacia
        viewSelectors.profileMain.innerHTML = "";
        _collection.forEach(element => {
            viewSelectors.profileMain.appendChild(previewPostTemplate(element));
        });
    }
};

//Sticky menu top
// let viewContainer = document.querySelector("#viewContainer"); Declarado arriba

const stickyMenu = () => {
    let profileMenu = document.querySelectorAll(".stickyMenu");
    let offsetTop = 300;

    if (viewSelectors.profileScreen.scrollTop > offsetTop) {
        profileMenu.forEach(element => {
            element.classList.add("stayOnTop");
        })
    } else {
        profileMenu.forEach(element => {
            element.classList.remove("stayOnTop");
        })
    }
}


const collectMainDataPost = () => {
    let postMainInfo = {};
    const elementsChecked = Array.from(viewSelectors.checkboxesTopic).filter((item) => {
        return item.checked == true;
    });
    if (elementsChecked.length !== 0) {
        const elementsName = elementsChecked.map((item) => {
            return item.name
        });
        const privacySelected = Array.from(viewSelectors.privacySelection).filter((item) => {
            return item.checked == true;
        });
        const elementsPrivacy = privacySelected.map((item) => {
            return item.value
        });
        let profilePictureSrc = viewSelectors.imagePost.getAttribute("src");
        let _postPicture;
        profilePictureSrc == "src/assets/imgs/imagePlaceholder.png" ? _postPicture = "null" : _postPicture = profilePictureSrc;
        postMainInfo = {
            email: localStorage.getItem("email"),
            title: viewSelectors.postTitle.value,
            description: viewSelectors.postDescription.value,
            imgCover: _postPicture,
            topics: elementsName,
            privacy: elementsPrivacy
        };
    } else {
        viewSelectors.errorMainPost.setAttribute("style", "display:inline-block;");
        viewSelectors.errorMainPost.innerHTML = "All the fields are required";
    }

    return postMainInfo;
}



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
    profileDataMainSection,
    printUserDataProfile,
    fileListenerElement,
    setPictureSRC,
    collectMainDataPost
}