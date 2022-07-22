import { TenorAPI } from './tenor-api';

const formEl = document.querySelector('form');
const galleryEl = document.querySelector('.gallery');
const loadBtnEl = document.querySelector('.load-more');

const tenorAPI = new TenorAPI();

formEl.addEventListener('submit', onSubmit);
loadBtnEl.addEventListener('click', onLoadBtnClicl);

function onSubmit(e) {
  galleryEl.innerHTML = '';
  e.preventDefault();
  tenorAPI.query = e.currentTarget.elements.search.value;
  onLoadBtnClicl();
}

async function onLoadBtnClicl(e) {
  tenorAPI.pos = tenorAPI.next;

  const response = await tenorAPI.fetchGifs();

  tenorAPI.next = response.next;
  galleryEl.insertAdjacentHTML(
    'beforeend',
    response.results
      .map(el => {
        return `<div class="gallery-item">
      <div class="content">
        <img src="${el.media_formats.gif.url}" alt="picture" loading="lazy"/>
      </div>
    </div>`;
      })
      .join('')
  );
}

// async function onSearcFormSubmit(e) {
//   e.preventDefault();
//   tenorAPI.query = e.currentTarget.elements.search.value;

//   const response = await tenorAPI.fetchGifs();

//   tenorAPI.next = response.next;
//   galleryEl.innerHTML = response.results
//     .map(el => {
//       return `<div class="gallery-item">
//         <div class="content">
//           <img src="${el.media_formats.gif.url}" alt="picture" loading="lazy"/>
//         </div>
//       </div>`;
//     })
//     .join('');
// }
