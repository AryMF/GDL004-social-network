const newPost = () => {
    const newPostTemplate = `<div class = newPostScreen id= newPostScreen>
    <h2 id="newPost" style="color: var(--bayOfMany);"> Unleash your creativity! :)</h2>
    <h4 id="errorMainPost"> Mensaje de error </h4>
    <input id="postTitle" class="largeText" style="color: var(--flamingo);" type="text" placeholder="Title"><br>
    <textarea id="postDescription" class="normalText" rows="5" cols="50" maxlength="300" placeholder="Describe your post (max 300 characters)" maxlength=300></textarea>
    <img id="imagePost" src="src/assets/imgs/imagePlaceholder.png" alt="add images">
    <input id="postPicture" type="file" accept="image/*">
    <p id="selectTopics" class="smallText" style="color: var(--bayOfMany);">Please select the topics of your post (at least one is required)</p>
    <ul>
        <li><input type="checkbox" class="cb" id="cb1" name="circuits" checked="checked" />
            <label for="cb1"><img src="src/assets/imgs/circuits.jpg" class="imagenTopic"/><br><p class="cbText">Circuits</p></label>
        </li>
        <li><input type="checkbox" class="cb" id="cb2" name="workshop" />
            <label for="cb2"><img src="src/assets/imgs/workshop.png"  class="imagenTopic"/><br><p class="cbText">Workshop</p></label>
        </li>
        <li><input type="checkbox" class="cb" id="cb3" name="crafting" />
            <label for="cb3"><img src="src/assets/imgs/craft.jpg"  class="imagenTopic"/><br><p class="cbText">Crafting</p></label>
        </li>
        <li><input type="checkbox" class="cb" id="cb4" name="cooking" />
            <label for="cb4"><img src="src/assets/imgs/cooking.jpg"  class="imagenTopic"/><br><p class="cbText">Cooking</p></label>
        </li>
        <li><input type="checkbox" class="cb" id="cb5" name="living" />
            <label for="cb5"><img src="src/assets/imgs/living.jpg"  class="imagenTopic"/><br><p class="cbText">Living</p></label>
        </li>
        <li><input type="checkbox" class="cb" id="cb6" name="outside" />
            <label for="cb6"><img src="src/assets/imgs/outside.jpg"  class="imagenTopic"/><br><p class="cbText">Outside</p></label>
        </li>
    </ul>
    <br>
    <label class="radioButtonContainer largeText"> Public
        <input type="radio" id="publicPost" name="privacy" value= "public" class="privacySelection" checked="checked">
        <span class="checkmark"></span>
    </label>
    <label class="radioButtonContainer largeText"> Private
        <input type="radio" id="privatePost" name="privacy" value= "private" class="privacySelection"> 
        <span class="checkmark"></span>
    </label>
    <button id="newPostNext" class="flamingo normalTextBold"data-action="newPost">Continue</button></div>
    <div id="stepScreen" style="display: block;">
    <h2 style="color: var(--bayOfMany);">Step by Step</h2>
    <input type="text" id="stepTitle" class="normalText" rows="5" placeholder="Step title">
    <textarea id="stepDescription" class="normalText" rows="20"  placeholder="Describe this step in your process"></textarea>
    <img id="imageStep" src="src/assets/imgs/imagePlaceholder.png" alt="add images to step" style="display:flex;">
    <input id="stepPicture" class="stepPicture" type="file" accept="image/*">
    <button id="addStep" class="flamingo normalTextBold" data-action="addStep">Add Step</button>
</div>`;

    let newPostDiv = document.createElement("div");
    newPostDiv.innerHTML = newPostTemplate;
    let button = newPostDiv.querySelector("#newPostNext");
    button.addEventListener("click", () => {
        let mainNewPost = newPostDiv.querySelector("#newPostScreen");
        mainNewPost.setAttribute("style", "display:none;")
        let stepNewPost = newPostDiv.querySelector("#stepScreen");
        stepScreen.setAttribute("style", "display:block;")
            //Besides hiding everything it should store data to be saved later, when the finish button is clicked
    })


    return newPostDiv;
};


const newPostSelectors = () => {
    const newPostSelectorsJSON = {
        "form": document.querySelector("#newPostForm"),
        "postPicture": document.querySelector("#postPicture"),
        "imagePost": document.querySelector("#imagePost"),
        "postTitle": document.querySelector("#postTitle"),
        "postDescription": document.querySelector("#postDescription"),
        "privacySelection": document.querySelectorAll("[name='privacy']"),
        "errorMainPost": document.querySelector("#errorMainPost"),
        "checkboxesTopic": document.querySelectorAll(".cb"),
    }
    return newPostSelectorsJSON;
}


export { newPost, newPostSelectors }