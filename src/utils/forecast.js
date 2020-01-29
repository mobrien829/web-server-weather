const request = require("request");

const forecast = ({ latitude, longitude, location }, callback) => {
  const darkSkyURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`;

  request({ url: darkSkyURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const unix_time = body.currently.time;
      const dateObject = new Date(unix_time * 1000);
      const time = dateObject.toUTCString();
      const precipitationType =
        body.currently.preciptationType || "precipitation";
      callback(
        undefined,
        `Forecast overview for ${location} on ${time}: It is currently ${body.currently.temperature} degrees out. ${body.daily.data[0].summary} The high will be ${body.daily.data.temperatureHigh} with a low of ${body.daily.data.temperatureLow}. It currently feels like ${body.currently.apparentTemperature}. There is a ${body.currently.precipProbability}% chance of ${precipitationType}.`
      );
    }
  });
};

module.exports = forecast;
