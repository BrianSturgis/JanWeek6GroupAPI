/*eslint-disable*/
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { MartianWeather, MartianPic, MartianRover } from "./martianWeather.js";

function clearFields() {
  $("#location").val("");
  $(".showErrors").text("");
  $(".showMinTemp").text("");
  $(".showMaxTemp").text("");
  $(".showAtmos").text("");
  $(".showPic").text("");
  $(".showRoverPic").text("");
}

function getWeather(response) {
  if (response) {
    $(".showMinTemp").html(`Min temp in Fahrenheit on Mars: ${response.soles[0].min_temp}`);
    $(".showMaxTemp").html(`Max temp in Fahrenheit on Mars: ${response.soles[0].max_temp}`);
    $(".showAtmos").html(`Atmosphere on Mars: ${response.soles[0].atmo_opacity}`);
  } else {
    $(".showErrors").text(`There was an error: ${response.message}`);
  }
}
function getPic(responsePic) {
  if (responsePic) {
    $(".showPic").html(`Astronomy Pic of The Day: <img src=${responsePic.url}>`);
  } else {
    $(".showErrors").text(`There was an error: ${responsePic.message}`);
  }
}
function getRoverPic(responseRoverPic) {
  if (responseRoverPic) {
    $(".showRoverPic").html(`Mars Rover Pic on this day: <img src=${responseRoverPic.photos[0].img_src}>`);
  } else {
    $(".showErrors").text(`There was an error: ${responseRoverPic.message}`);
  }
}

$(document).ready(function () {
  $("#marsWeather").click(function () {
    clearFields();
    MartianWeather.getWeather().then(function (response) {
      getWeather(response);
    });
  });
  $("#marsPic").click(function () {
    clearFields();
    MartianPic.getPic().then(function (responsePic) {
      getPic(responsePic);
    });
  });
  $("#marsRoverPic").click(function () {
    let date = $("#date").val();
    clearFields();
    MartianRover.getRoverPic(date).then(function (responseRoverPic) {
      getRoverPic(responseRoverPic);
    });
  });
});
