const listPhoto = document.querySelector(".list__photo");
const btn = document.querySelector(".download");
const btnSave = document.querySelector(".save");
const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");

let pageCurrent = 1;
let blockPage = 4;
const key = "43133786-570f6afe2f69578830eb496c7";

function getPictures(searchTerm) {
  const url = `https://pixabay.com/api/?key=${key}&q=${searchTerm}&per_page=${blockPage}&page=${pageCurrent}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => createEl(data.hits));
}

function loadPosts() {
  pageCurrent++;
  const searchTerm = searchInput.value;
  getPictures(searchTerm);
}

const createEl = (el) => {
  el.forEach((item) => {
    const cardEl = document.createElement("li");
    cardEl.innerHTML = `<li>
      <img src="${item.previewURL}" alt="${item.tags}">
    </li>`;
    listPhoto.appendChild(cardEl);
  });
};

btn.addEventListener("click", loadPosts);

btnSave.addEventListener("click", () => {
  btn.removeEventListener("click", loadPosts);
});

searchBtn.addEventListener("click", () => {
  pageCurrent = 1;
  listPhoto.innerHTML = "";
  loadPosts();
});

getPictures();
