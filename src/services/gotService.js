export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, recieved status: ${response.status}`);
    }

    return response.json();
  }

  async getAllCharacters() {
    const allCharacters = await this.getResource("/characters/?page=3&pageSize=6");
    return allCharacters.map(this._transformCharacter);
  }

  async getCharacterById(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  async getAllHouses() {
    const allHouses = await this.getResource("/houses/");
    return allHouses.map(this._transformHouse);
  }

  async getHouseById(id) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }

  async getAllBooks() {
    const allBooks = await this.getResource("/books/");
    return allBooks.map(this._tranformBook);
  }

  async getBookById(id) {
    const book = await this.getResource(`/books/${id}`);
    return this._tranformBook(book);
  }

  _transformCharacter(character) {
    return {
      name: character.name || "unknown",
      gender: character.gender || "unknown",
      born: character.born || "unknown",
      died: character.died || "unknown",
      culture: character.culture || "unknown",
    }
  }

  _transformHouse(house) {
    return {
      name: house.name || "unknown",
      region: house.region || "unknown",
      words: house.words || "unknown",
      titles: house.titles || "unknown",
      overlord: house.overlord || "unknown",
      ancestralWeapons: house.ancestralWeapons || "unknown",
    }
  }

  _tranformBook(book) {
    return {
      name: book.name || "unknown",
      numberOfPages: book.numberOfPages || "unknown",
      publiser: book.publiser || "unknown",
      released: book.released || "unknown",
    }
  }
}