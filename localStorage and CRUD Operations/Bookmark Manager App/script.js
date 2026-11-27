const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNames = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

// 1. Retrieve and validate bookmarks from localStorage
function getBookmarks() {
  try {
    const storedData = localStorage.getItem("bookmarks");
    if (!storedData) return [];

    const parsedData = JSON.parse(storedData);

    // Ensure it is a valid array of bookmark objects with name, category, and url
    if (
      Array.isArray(parsedData) &&
      parsedData.every(
        (item) =>
          item &&
          typeof item === "object" &&
          typeof item.name === "string" &&
          typeof item.category === "string" &&
          typeof item.url === "string"
      )
    ) {
      return parsedData;
    }

    return [];
  } catch (error) {
    return [];
  }
}

// 2. Toggle between #main-section and #form-section
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

// 3. Toggle between #main-section and #bookmark-list-section
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// Helper to update all .category-name elements
function updateCategoryTitle(category) {
  categoryNames.forEach((el) => {
    el.innerText = category;
  });
}

// Helper to render bookmarks for the currently selected category
function renderCategoryList() {
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  // Clear previous entries to prevent duplicates
  categoryList.innerHTML = "";

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filteredBookmarks.forEach((bookmark) => {
    categoryList.innerHTML += `
      <div>
        <input type="radio" id="${bookmark.name}" name="bookmark" value="${bookmark.name}" />
        <label for="${bookmark.name}">
          <a href="${bookmark.url}">${bookmark.name}</a>
        </label>
      </div>
    `;
  });
}

// Event Listeners
addBookmarkBtn.addEventListener("click", () => {
  updateCategoryTitle(categoryDropdown.value);
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };

  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  updateCategoryTitle(categoryDropdown.value);
  renderCategoryList();
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="bookmark"]:checked'
  );
  if (!selectedRadio) return;

  const selectedName = selectedRadio.value;
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  // Keep bookmarks that do NOT match both the selected name and selected category
  const updatedBookmarks = bookmarks.filter(
    (bookmark) =>
      !(
        bookmark.name === selectedName &&
        bookmark.category === selectedCategory
      )
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  renderCategoryList();
});
