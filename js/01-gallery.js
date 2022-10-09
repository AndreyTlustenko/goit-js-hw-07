import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cards = createGalleryPictures(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cards);

function createGalleryPictures(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
      <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')
};
console.log(galleryItems);

galleryContainer.addEventListener(`click`, toClickGallery)

function toClickGallery(e){
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
        const myUrl = e.target.dataset.source;
        openModal(myUrl);

        function openModal(e) {
    const instance = basicLightbox.create(
`<img src="${myUrl}">`)
instance.show();

galleryContainer.addEventListener(`keydown`, e => {
    if (e.key === 'Escape') {
       instance.close(); 
    }
});

     }
    };


   
// const galleryContainer = document.querySelector(`.gallery`);
// const cards = createGalleryPictures(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', cards);
// function createGalleryPictures(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//             return `<div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"/>
//             </a>
//             </div>`
//         })
//         .join('')
// };
// console.log(galleryItems);