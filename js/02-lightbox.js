// import { galleryItems } from "./gallery-items.js";

// // Change code below this line
// const galleryContainer = document.querySelector(".gallery");

// function createGallery(items) {
//   const renderItems = items
//     .map(({ preview, original, description }) => {
//       return `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>`;
//     })
//     .join("");
//   galleryContainer.innerHTML = renderItems;
//   const lightbox = new SimpleLightbox(".gallery a", {
//     additionalHtml: "label",
//     captionDelay: 250,
//     className: "gallery-container",
//   });
//   lightbox.on("show.simplelightbox", function ({ target }) {
//     setTimeout(() => {
//       const container = document.querySelector(".gallery-container");
//       const alt = target.querySelector(".gallery__image").alt;
//       const labelContainer = container.parentElement.querySelector(
//         ".sl-additional-html"
//       );
//       labelContainer.innerHTML = alt;
//     }, 80);
//   });
// }

// createGallery(galleryItems);

import { galleryItems } from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".gallery");

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>
`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
