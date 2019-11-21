import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HarvardService } from './harvard-service.js';
import { ChuckService } from './chuck-service.js';

$(document).ready(function(){
    // event.preventDefault();
  (async () => {
    let harvardService = new HarvardService();
    const response = await harvardService.getArt();
    getElements(response);
  })();

  (async () => {
    let chuckService = new ChuckService();
    const chuckSponse = await chuckService.getChuck();
    getElements(chuckSponse);
  })();

  function getElements(response) {
$("#art1").html("<img src='" +  (response.records[0].baseimageurl) +  "'>")
$("#art2").html("<img src='" +  (response.records[1].baseimageurl) +  "'>")
$("#art3").html("<img src='" +  (response.records[2].baseimageurl) +  "'>")

    // $('#art1').text(response.records[0].baseimageurl);
  }

//   function getElements(chuckSponse) {
// $("#chuck1").text(response.value[0])
// $("#art2").html("<img src='" +  (response.records[1].baseimageurl) +  "'>")
// $("#art3").html("<img src='" +  (response.records[2].baseimageurl) +  "'>")
//
//     $('#art1').text(response.records[0].baseimageurl);
//   }
});
