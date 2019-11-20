import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HarvardService } from './harvard-service.js'

$(document).ready(function(){

  (async () => {
      let harvardService = new HarvardService();
      const response = await HarvardService.getArt(art);
      getElements(response);
    })();

  function getElements(response) {
    $('#art1').append(response.records[0].baseimageurl)
  }
})
