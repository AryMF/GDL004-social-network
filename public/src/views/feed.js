const feed = () => {
    let feedTemplate = `
    <div class="emptyFeedContainer">
            <img class="emptyFeedImg" src="src/assets/imgs/avatar128.png">
            <h2 style="color: var(--bayOfMany);"> Wow, such empty! </h2>
    </div>`;

    const divElement = document.createElement("div");
    divElement.classList.add("feedContainer");
    divElement.innerHTML = feedTemplate;

    return divElement;
}

const feedSelectors = () => {
    const feedSelectorsJSON = { 
        "feedContainer": document.querySelector(".feedContainer"),
        "emptyFeedContainer": document.querySelector(".emptyFeedContainer")
    }
    return feedSelectorsJSON;
};

export { feed, feedSelectors }