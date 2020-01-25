const signIn = () => {
    const signInTemplate = `
    <div id="loginForm">
        <img src="src/assets/imgs/logo.png" alt="Logo DIYers">
        <h3 style="color: var(--elephant);"> Sign in with </h3>
        <div class="socialNetworkButtons">
            <i class="fa fa-google" tabindex="0" data-action="socialNetworkButton"></i>
            <i class="fa fa-twitter" tabindex="0" data-action="socialNetworkButton"></i>
            <i class="fa fa-github-alt" tabindex="0" data-action="socialNetworkButton"></i>
        </div>
        <p class="normalText" style="color: var(--elephant);"> Or use your email account</p>
        <p class="loginFormErrorMsj smallText"> Mensaje de error </p>
        <input id="loginFormUserEmail" class="normalText" type="email" placeholder="Email">
        <input id="loginFormUserPassword" class="normalText" type="password" placeholder="Password">
        <button id="loginButton" class="flamingo normalTextBold" data-action="loginButton"> Login </button>
    </div>

    <div id="registrationForm">
        <img src="src/assets/imgs/logo.png" alt="Logo DIYers">
        <h3 style="color: var(--elephant);"> Account creation </h3>
        <div class="socialNetworkButtons">
            <i class="fa fa-google" tabindex="0" data-action="socialNetworkButton"></i>
            <i class="fa fa-twitter" tabindex="0" data-action="socialNetworkButton"></i>
            <i class="fa fa-github-alt" tabindex="0" data-action="socialNetworkButton"></i>
        </div>
        <p class="normalText" style="color: var(--elephant);"> Or use your email account</p>
        <p class="formErrorMsj smallText"> Mensaje de error </p>
        <!-- <input id="userName" class="normalText" type="text" placeholder="User name"> -->
        <input id="userEmail" class="normalText" type="email" placeholder="Email">
        <input id="userPassword" class="normalText" type="password" placeholder="Password">
        <input id="userPasswordConfirmation" class="normalText" type="password" placeholder="Confirm password">
        <button id="submitForm" class="flamingo normalTextBold" data-action="submitForm"> Sign up </button>
    </div>

    <div class="slideSecction">
        <div class="slideSecctionMidLayer">

            <div class="slideSecctionPanel slideSecctionRight">
                <p class="slideSecctionHeader" style="color: var(--bayOfMany);"> Hey you! </p>
                <p id="slideSecctionText" class="sliderText" style="color: var(--lightText);"> Get on board and join our<br>amazing community </p>
                <button id="slideSecctionSignIn" class="ghost smallButton" data-action="slideSecctionSignIn">Get started</button>
            </div>
            <div class="slideSecctionPanel slideSecctionLeft">
                <p class="slideSecctionHeader" style="color: var(--bayOfMany);"> Welcome back! </p>
                <p id="slideSecctionText" class="sliderText" style="color: var(--lightText);"> Get connected to keep on<br>making great things</p>
                <button id="slideSecctionSignUp" class="ghost smallButton" data-action="slideSecctionSignUp">Sign In</button>
            </div>
        </div>
    </div>`;

    let divLoader = document.createElement("div");
    divLoader.classList.add("signInsignUpWindow");
    divLoader.innerHTML = signInTemplate;

    return divLoader;
};

const signInSelectors = () => {
    const signInSelectorsJSON = {
        //Account creation
        "formErrorMsj" : document.querySelector(".formErrorMsj"),
        "userEmail" : document.querySelector("#userEmail"),
        "userPassword" : document.querySelector("#userPassword"),
        "userPasswordConfirmation" : document.querySelector("#userPasswordConfirmation"),

        //Login
        "loginFormErrorMsj" : document.querySelector(".loginFormErrorMsj"),
        "loginFormUserEmail" : document.querySelector("#loginFormUserEmail"),
        "loginFormUserPassword" : document.querySelector("#loginFormUserPassword"),

        //Slider
        "slideSecctionSignIn" : document.querySelector("#slideSecctionSignIn"),
        "slideSecctionSignUp" : document.querySelector("#slideSecctionSignUp"),
        "signInsignUpWindow" : document.querySelector(".signInsignUpWindow")
    };

    return signInSelectorsJSON;
};

export { signIn, signInSelectors }