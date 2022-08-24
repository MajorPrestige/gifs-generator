export class GiphyAPI {
  #API_KEY = 'HVO3YlR6dk6WsMvmOioBIpvhu5LrXxvq';
  #BASE_URL = 'https://api.giphy.com/v1/gifs/search?';

  constructor() {
    this.offset = 0;
    this.query = null;
  }

  async fetchGifs() {
    const serchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.query,
      offset: this.offset,
      limit: 50,
    });

    try {
      const response = await fetch(`${this.#BASE_URL}${serchParams}`);

      if (!response.ok) {
        throw new Error(response.staus);
      }

      const gifs = await response.json();
      return gifs;
    } catch (err) {
      console.log(err);
    }
  }
}
