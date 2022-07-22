export class GiphyAPI {
  #API_KEY = 'HVO3YlR6dk6WsMvmOioBIpvhu5LrXxvq';
  #BASE_URL = 'https://api.giphy.com/v1/gifs/search?';

  constructor() {
    this.offset = 1;
    this.query = null;
  }

  async fetchGifs() {
    const serchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.query,
      offset: this.offset,
      limit: 20,
    });

    try {
      const response = await fetch(`${this.#BASE_URL}${serchParams}`);
      const gifs = await response.json();

      if (!response.ok) {
        throw new Error(response.staus);
      }

      return gifs;
    } catch (err) {
      console.log(err);
    }
  }
}
