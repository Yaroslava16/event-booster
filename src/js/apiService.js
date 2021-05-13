const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const options = {
  searchQuery: '',
  countryQuery: '',
};
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=24';

class EventApiService {
  constructor() {
    this.countryQuery = '';
  }
  async fetchEvent() {
    // &countryCode удалить если фильтрация событий будет без запроса на сервер, а по полученным событиям с сервера после запроса
    const response = await fetch(
      `${BASE_URL}&keyword=${options.searchQuery}&countryCode${options.countryQuery}`,
    );
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }

  // за запропонованим вище (в попередньому методі) url API вертає error
  async fetchEventByCountryCode() {
    const response = await fetch(`${URL}&countryCode=${this.countryQuery}&apikey=${API_KEY}`);
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }
}

export default { EventApiService, options };
