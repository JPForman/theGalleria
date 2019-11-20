export class HarvardService {
  async getArt(art) {
    try {
      let response = await fetch(`https://api.harvardartmuseums.org/image?${process.env.API_KEY}&size=3&sort=random&baseimageurl`);
        .then(function(response) {
          let jsonifiedResponse = await response.json();
          return jsonifiedResponse;
        } catch(error) {
          console.error("There was an error handling your request: " + error.message);


    }
   }
 }



  // .then(function(jsonifiedResponse) {
  //   getElements(jsonifiedResponse);
  // });
