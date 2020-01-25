const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

// app.set(key (setting a value for express settings), module to set value)
app.set("view engine", "hbs");

app.use(express.static(publicDirectoryPath));
// first argument is the route, second is what is provided on the route
// app(route, (request, response) => {})

// app.get("/help", (req, res) => {
//   res.send("This is the help page");
// });

// app.get("/about", (req, res) => {
//   res.send("<title>About us</title> <body><h1>Learn about us!</h1></body>");
// });

app.get("", (req, res) => {
  res.render("index", {});
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Michael O'Brien"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "What do you need help with?"
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
