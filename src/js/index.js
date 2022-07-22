import { GiphyAPI } from './giphy-api';

const formEl = document.querySelector('form');
const galleryEl = document.querySelector('.gallery');

const giphyAPI = new GiphyAPI();

formEl.addEventListener('submit', onSearcFormSubmit);

function onSearcFormSubmit(e) {
  e.preventDefault();
}

giphyAPI.fetchGifs().then(data => console.log(data));
