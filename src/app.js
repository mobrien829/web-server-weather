const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// app.set(key (setting a value for express settings), module to set value)
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath);
// first argument is the route, second is what is provided on the route
// app(route, (request, response) => {})

// app.get("/help", (req, res) => {
//   res.send("This is the help page");
// });

// app.get("/about", (req, res) => {
//   res.send("<title>About us</title> <body><h1>Learn about us!</h1></body>");
// });

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Michael O'Brien"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Michael O'Brien"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "What do you need help with?",
    title: "Help page",
    name: "Michael O'Brien"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    return res.send({ error: "you must provide a location" });
  }
  geocode(req.query.location, (geoError, geoData) => {
    if (geoError) {
      return res.send({ error: geoError });
    }
    forecast(geoData, (forecastError, forecastData) => {
      if (forecastError) {
        return res.send({ error: forecastError });
      }
      res.send({ forecast: forecastData, location: req.query.location });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Help article not found",
    name: "Michael O'Brien"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Page not found",
    name: "Michael O'Brien"
  });
});

// .listen sets up server (port, callback)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
