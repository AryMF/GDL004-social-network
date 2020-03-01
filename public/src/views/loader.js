export default () => {
    let loaderTemplate = `
    <img class="loaderIMG" src="src/assets/imgs/loader.gif" alt="Loading">`;

    let divLoader = document.createElement("div");
    divLoader.classList.add("loader");
    divLoader.innerHTML = loaderTemplate;

    return divLoader;
}