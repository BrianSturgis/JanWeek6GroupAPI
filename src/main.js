/*eslint-disable*/
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import MartianWeather from "./martianWeather.js";

function getElements(response) {
  if (response[785]) {
    $('.showWeather').html(`Atmospheric Pressure on Mars: ${response[785].PRE.av}`);
    console.log(response[785].PRE.av);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
 
$(document).ready(function() {
  $('#marsWeather').click(function() {
    MartianWeather.getWeather()
      .then(function(response) {
        getElements(response);
      });
  });
});