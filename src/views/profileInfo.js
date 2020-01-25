const profileInfo = () => {
    const profileInfoTemplate = `
    <div class="profileInfoInput-screen">
        <form>
            <h3> Tell us more about you! </h3>
            <p id="profileInfoWarning" class="smallTextBold" style="color: var(--bayOfMany);"> *User name field required</p>
            <input id="userName" class="largeText" style="color: var(--flamingo);" type="text" placeholder="User name" required>
            <textarea id="userAbout" class="normalText" rows="5" cols="50" maxlength="100" placeholder="Time to be creative! Describe yourself in 100 character or less "></textarea>
            <input id="userCountry" class="normalText" type="text" placeholder="Country">
            <p class="smallText"> We want to know your birthday, so we can celebrate with you!:</p>
            <input id="userBirthday" class="normalText" type="date">
        </form>
        <div class="profileInfoInputSecondColumn">
            <p class="smallText"> Profile picture</p>
            <div class="userPictureContainer">
                <img id="userPicture" src="src/assets/imgs/avatar128.png" alt="Default avatar">
            </div>
            <br>
            <i class="fa fa-camera normalText" style="color: var(--bayOfMany);"></i>
            <input id="pictureFile" type="file" name="pic" accept="image/*">
            <button id="profileInfoInputContinue" class="flamingo normalTextBold" type="submit" data-action="profileInfoNext"> Continue </button>
        </div>
    </div>
    <div class="profileInfoInput-screen2">
            <p id="titleTopics">Please select your interests:</p>
            <form id="topicsCheckboxes">
                <ul>
                    <li><input type="checkbox" class="cb" id="cb1" name="circuits" />
                        <label for="cb1"><img src="src/assets/imgs/circuits.jpg" /><br><p class="cbText">Circuits</p></label>
                    </li>
                    <li><input type="checkbox" class="cb" id="cb2" name="workshop" />
                        <label for="cb2"><img src="src/assets/imgs/workshop.png" /><br><p class="cbText">Workshop</p></label>
                    </li>
                    <li><input type="checkbox" class="cb" id="cb3" name="crafting" />
                        <label for="cb3"><img src="src/assets/imgs/craft.jpg" /><br><p class="cbText">Crafting</p></label>
                    </li>
                    <li><input type="checkbox" class="cb" id="cb4" name="cooking" />
                        <label for="cb4"><img src="src/assets/imgs/cooking.jpg" /><br><p class="cbText">Cooking</p></label>
                    </li>
                    <li><input type="checkbox" class="cb" id="cb5" name="living" />
                        <label for="cb5"><img src="src/assets/imgs/living.jpg" /><br><p class="cbText">Living</p></label>
                    </li>
                    <li><input type="checkbox" class="cb" id="cb6" name="outside" />
                        <label for="cb6"><img src="src/assets/imgs/outside.jpg" /><br><p class="cbText">Outside</p></label>
                    </li>
                </ul>
                <p id="errorTopic"></p>
            </form><br>
            <p id="errorTopic"></p>
            <button id="profileInfoTopicsFinish" class="flamingo normalTextBold" data-action="profileInfoSubmit">Finish</button>
        </div>`;

    let profileInfoDiv = document.createElement("div");
    profileInfoDiv.classList.add("profileInfoInput-container");
    profileInfoDiv.innerHTML = profileInfoTemplate;

    return profileInfoDiv;
     
};

const profileInfoSelectors = () => {
    const profileInfoSelectorsJSON = {
    //Profile Info Input
        "profileInfoInputContainer": document.querySelector(".profileInfoInput-container"),
        "profileInfoInputScreen": document.querySelector(".profileInfoInput-screen"),
        "profileInfoWarning": document.querySelector("#profileInfoWarning"),
        "userNameInput": document.querySelector("#userName"),
        "userAboutInput": document.querySelector("#userAbout"),
        "userCountryInput": document.querySelector("#userCountry"),
        "userBirthdayInput": document.querySelector("#userBirthday"),
        "userPicture": document.querySelector("#userPicture"),
        "pictureFile": document.querySelector("#pictureFile"),
        "profileInfoInputContinue": document.querySelector("#profileInfoInputContinue"),
        //Profile Info Input Topics
        // "profileInfoInputTopics": document.querySelector(".profileInfoInputTopics"),
        "profileInfoInputScreen2": document.querySelector(".profileInfoInput-screen2"),
        "errormsg": document.querySelector("#errorTopic"),
        "checkboxesTopic": document.querySelectorAll(".cb")
    };
    return profileInfoSelectorsJSON;
};

export { profileInfo, profileInfoSelectors }