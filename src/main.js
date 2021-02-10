/*eslint-disable*/
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { MartianWeather, MartianPic, MartianRover } from "./martianWeather.js";

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showWeather').text("");
  $('.showPic').text("");
  $('.showRoverPic').text("");
}

function getWeather(response) {
  if (response[785]) {
    $(".showWeather").html(
      `Atmospheric Pressure on Mars: ${response[785].PRE.av}`
    );
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
    $(".showRoverPic").html(`Mars Rover Pic of The Day: <img src=${responseRoverPic.photos[0].img_src}>`);
  } else {
    $(".showErrors").text(`There was an error: ${responseRoverPic.message}`);
  }
}

$(document).ready(function () {
  $("#marsWeather").click(function () {
    clearFields()
    MartianWeather.getWeather().then(function (response) {
      getWeather(response);
    });
  });
  $("#marsPic").click(function () {
    clearFields()
    MartianPic.getPic().then(function (responsePic) {
      getPic(responsePic);
    });
  });
  $("#marsRoverPic").click(function () {
    let date = $('#date').val();
    clearFields()
    MartianRover.getRoverPic(date).then(function (responseRoverPic) {
      getRoverPic(responseRoverPic);
    });
  });
});