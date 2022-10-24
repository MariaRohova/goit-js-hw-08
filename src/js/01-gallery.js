// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <div class ="gallery__item"> 
       <a href=${original} class="gallery__link">
       <img src=${preview} alt=${description} data-source=${original} class="gallery__image" />
       </a>
       </div>`;
    })
    .join('');
}

const mackUpGallery = createGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', mackUpGallery);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
