export class ChuckService {
  async getChuck(quote) {
    try {
      let response = await fetch(`http://api.icndb.com/jokes/random/3`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Chuck doesn't like your request: " + error.message);
    }
  }
}
