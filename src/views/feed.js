const feed = () => {
    let feedTemplate = `
    <div class="feedContainer">
    </div>`;

    const divElement = document.createElement("div");
    divElement.classList.add("feedContainer");
    // divElement.innerHTML = feedTemplate;

    return divElement;
}

const feedSelectors = () => {
    const feedSelectorsJSON = { 
        "feedContainer": document.querySelector(".feedContainer")
    }
    return feedSelectorsJSON;
};

export { feed, feedSelectors }