import { TenorAPI } from './tenor-api';
import { TicketmasterAPI } from './ticketmaster-api';

const formEl = document.querySelector('form');
const galleryEl = document.querySelector('.gallery');
const loadBtnEl = document.querySelector('.load-more');

console.log(TenorAPI);
console.log(TicketmasterAPI);

async function fn() {
  try {
    const response = await ticketmasterAPI.fetchTickets();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

const tenorAPI = new TenorAPI();

tenorAPI
  .fetchGifs()
  .then(data => console.log(data))
  .catch(err => console.log(err));

formEl.addEventListener('submit', onSearcFormSubmit);
loadBtnEl.addEventListener('click', onLoadBtnClicl);

function onSearcFormSubmit(e) {
  galleryEl.innerHTML = '';
  e.preventDefault();
  tenorAPI.query = e.currentTarget.elements.search.value;
  tenorAPI.pos = null;
  tenorAPI.next = null;
  loadBtnEl.classList.remove('disabled');
  onLoadBtnClicl();
}

async function onLoadBtnClicl() {
  tenorAPI.pos = tenorAPI.next;

  try {
    const response = await tenorAPI.fetchGifs();
    tenorAPI.next = response.next;
  } catch (err) {
    console.log(err);
  }

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
