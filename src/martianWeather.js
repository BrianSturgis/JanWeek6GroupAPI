/*eslint-disable*/
export class MartianWeather {
  static getWeather() {
    return fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

export class MartianPic {
  static getPic() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
      .then(function(responsePic) {
        if (!responsePic.ok) {
          throw Error(responsePic.statusText);
        }
        return responsePic.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

export class MartianRover {
  static getRoverPic(date) {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.API_KEY}`)
      .then(function(responseRoverPic) {
        if (!responseRoverPic.ok) {
          throw Error(responseRoverPic.statusText);
        }
        return responseRoverPic.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

