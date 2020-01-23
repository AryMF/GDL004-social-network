const newPostView = () => {
    //aqui va el template html
    const newPostTemplate = `
<div class="404">
<br>
        <p id="newPost" class="largeText" style="color: var(--flamingo);"> NEW POST PAGE</p>     
    </div>`;

    let newPostDiv = document.createElement("div");
    newPostDiv.classList.add("notFound-container");
    newPostDiv.innerHTML = newPostTemplate;

    return newPostDiv;
};


const newPostSelectors = () => {
    const newPostSelectorsJSON = {
        //aqui deben ir los query selectors de la parte de new post
    }
    return newPostSelectorsJSON;
}


export { newPostView, newPostSelectors }