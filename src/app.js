const express = require("express");

const app = express();

// first argument is the route, second is what is provided on the route
// app(route, (request, response) => {})
app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("This is the help page");
});

app.get("/about", (req, res) => {
  res.send("Learn about us!");
});

app.get("/weather", (req, res) => {
  res.send("this is the weather page");
});

// .listen sets up server (port, callback)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
