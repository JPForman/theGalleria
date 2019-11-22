import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HarvardService } from './harvard-service.js';
import { ChuckService } from './chuck-service.js';
import { ChuckString } from './../src/chuckString.js' ;




$(document).ready(function(){

  setInterval(() => {
    (async () => {
      let harvardService = new HarvardService();
      const response = await harvardService.getArt();
      getElements(response);
    })();
  },7000);

  setInterval(() => {
    (async () => {
      let chuckService = new ChuckService();
      const chuckSponse = await chuckService.getChuck();
      let fixedChuckString = new ChuckString(chuckSponse);
      getKicked(fixedChuckString);
    })();
  },7000);

  function getElements(response) {
    $("#art1").html("<img src='" +  (response.records[0].baseimageurl) +  "'>");
    $("#art2").html("<img src='" +  (response.records[1].baseimageurl) +  "'>");
    $("#art3").html("<img src='" +  (response.records[2].baseimageurl) +  "'>");
  }

  function getKicked(fixedChuckString) {
    $("#chuck1").text(String(fixedChuckString.chuckSponse1));
    $("#chuck2").text(String(fixedChuckString.chuckSponse2));
    $("#chuck3").text(String(fixedChuckString.chuckSponse3));
  }
});
