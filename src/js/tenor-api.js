export class TenorAPI {
  #API_KEY = 'AIzaSyD_XWaKzzYCXeeezTgqF5OlQi5nDtvAItA';
  #BASE_URL = 'https://tenor.googleapis.com/v2/search?';

  constructor() {
    this.limit = 24;
    this.query = null;
    this.next = null;
    this.pos = null;
  }

  async fetchGifs() {
    const serchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.query,
      limit: this.limit,
      next: this.next,
      pos: this.pos,
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
