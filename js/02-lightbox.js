import { galleryItems } from './gallery-items.js';
// './gallery-items npm install simplelightbox';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cards = createGalleryPictures(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cards);

function createGalleryPictures(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item"  href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
}).join('')
};
console.log(galleryItems);

galleryContainer.addEventListener(`click`, toClickGallery)

function toClickGallery(e){
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
};
   
    const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});
//        
// instance.show();

// galleryContainer.addEventListener(`keydown`, e => {
//     if (e.key === 'Escape') {
//        instance.close(); 
//     }
// });

    //  }
    

