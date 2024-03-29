const list = document.querySelector("ul");
const btn = document.querySelector(".button");
const btnSave = document.querySelector(".save");

let pageCurrent = 1;
let blockPage = 3;
const key = `43133786-570f6afe2f69578830eb496c7`;

function getPosts() {
  const url = `https://pixabay.com/api/?key=${key}&per_page=${blockPage}&page=${pageCurrent}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => createEl(data.hits));
}

function loadPosts() {
  pageCurrent++;
  getPosts();
}

function createEl(hits) {
  hits.forEach((el) => {
    const cardEl = document.createElement("li");
    cardEl.innerHTML = `
      <li>
            <img src="${el.previewURL}" alt="el.tags">
        </li>
      `;
    list.appendChild(cardEl);
  });
}

btn.addEventListener("click", loadPosts);

btnSave.addEventListener("click", () => {
  btn.removeEventListener("click", loadPosts);
});

getPosts();
