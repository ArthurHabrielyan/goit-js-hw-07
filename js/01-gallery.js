import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
let shadowInstance = null;

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (evt.target.className !== "gallery__image") return;
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  shadowInstance = instance;
  instance.show();

  document.addEventListener("keydown", closeModal);
}

function createGallery(items) {
  const renderItems = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");

  galleryContainer.innerHTML = renderItems;
}

function closeModal({ keyCode }) {
  if (!shadowInstance) return;

  switch (keyCode) {
    case 27:
      shadowInstance.close();
      document.removeEventListener("keydown", closeModal);
      break;
    default:
      break;
  }
}

createGallery(galleryItems);

galleryContainer.addEventListener("click", onGalleryItemClick);
