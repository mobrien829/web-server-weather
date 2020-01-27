const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

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
  res.send([
    {
      forecast: "meh",
      location: "Singapore"
    }
  ]);
});

// .listen sets up server (port, callback)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
