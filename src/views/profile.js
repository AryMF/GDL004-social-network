const profile = () => {
    const profileTemplate = `
    <nav class="menuNav stickyMenu">
        <p id="postSection" class="menuNavElement largeText active" data-action="showUserPost"> POST</p>
        <p id="favSection" class="menuNavElement largeText" data-action="showUserFav"> FAVORITES </p>
    </nav>
    <aside class="sideMenu stickyMenu">
        <div class="sideMenuBurger">
            <i class="fa fa-cog largeText" data-action="openSideMenu"></i>
        </div>
        <div class="sideMenuAll">
            <p  class="largeText sideMenuElement closeMenu" style="font-weight: bold;" data-action="closeSideMenu"> Close menu 
                <br><i class="fa fa-times-circle-o largeText" data-action="closeSideMenu"></i></p>
            <p class="normalText sideMenuElement" data-action="editProfile"> Edit profile</p>
            <div class="sideMenuElement divDarkmode">
                <p id="darkMode" class="normalText divDarkmodeElement"> Dark mode <br><br></p>
                <label class="switch divDarkmodeElement">
                    <input id="toggleDarkMode" type="checkbox" tabindex="0" data-action="toggleDarkMode">
                    <span class="slider"></span>
                </label>
            </div>
            
            <p  class="normalText sideMenuElement" data-action="logoutOption"> Logout</p>
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
        //Side menu
        "sideMenuAll" : document.querySelector(".sideMenuAll"),
        "sideMenuElement" : document.querySelectorAll(".sideMenuElement"),
        "divDarkmodeElement" : document.querySelectorAll(".divDarkmodeElement"),
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