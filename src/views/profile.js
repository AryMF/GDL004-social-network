const profile = () => {
    const profileTemplate = `
    <nav class="menuNav stickyMenu">
        <p id="postSection" class="profileMenuElement largeText active" data-action="showUserPost"> POST</p>
        <p id="favSection" class="profileMenuElement largeText" data-action="showUserFav"> FAVORITES </p>
    </nav>
    <aside class="sideMenu stickyMenu">
        <div class="sideMenuBurger">
            <i class="fa fa-cog largeText"></i>
        </div>
        <div class="sideMenuAll">
            <p class="profileMenuElement normalText" data-action="editProfile"> Edit profile</p>
            <p id="darkMode" class="profileMenuElement normalText"> Dark mode </p>
            <p  class="profileMenuElement normalText" data-action="logoutOption"> Logout</p>
            <!-- <p id="deleteAccount" class="profileMenuElement normalText" style="margin-top: 10px;"> Delete account </p> --!>
        </div>
        
    </aside>
    <main id="profileMain">
        <h3> Nothing to show yet. </h3>
    </main>
    <div id="userProfile">
        <div class="userProfileTop"> 
            <img class="cover" src="src/assets/imgs/coverBackground.jpg" alt="Cover picture">
            <div class="userPictureContainer">
                <img id="userProfilePicture" class="avatar128px" src="src/assets/imgs/avatar128.png" alt="Default avatar">
            </div>
        </div>
        <div class="userProfileBottom">
            <h3 id="userProfileName" style="color: var(--bayOfMany);"></h3>
            <p id="userProfileAbout" class="normalText"></p>
            <p id="userProfileCountry" class="smallText"></p>
        </div>
    </div>`;

    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profileScreen");
    profileDiv.innerHTML = profileTemplate;

    return profileDiv; 
};

const profileSelectors = () => {
    const profileSelectorsJSON = {
        //Nav menu
        "profileScreen": document.querySelector(".profileScreen"),
        "postSection": document.querySelector("#postSection"),
        "favSection": document.querySelector("#favSection"),
        //Configuration menu
        "logoutOption": document.querySelector("#logoutOption"),
        //Main area
        "profileMain": document.querySelector("#profileMain"),
        //User info area
        "userProfilePicture" : document.querySelector("#userProfilePicture"),
        "userProfileName" : document.querySelector("#userProfileName"),
        "userProfileEmail" : document.querySelector("#userProfileEmail"),
        "userProfileAbout" : document.querySelector("#userProfileAbout"),
        "userProfileCountry" : document.querySelector("#userProfileCountry")
    };
    return profileSelectorsJSON;
};

export { profile, profileSelectors }