const notFound = () => {
    const notFoundTemplate = `
  <div class="404">
  <br>
          <p id="404" class="largeText" style="color: var(--bayOfMany);"> 404 Not Found</p>     
      </div>`;

    let notFoundDiv = document.createElement("div");
    notFoundDiv.classList.add("notFound-container");
    notFoundDiv.innerHTML = notFoundTemplate;

    return notFoundDiv;
};

export { notFound }