const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
// first argument is the route, second is what is provided on the route
// app(route, (request, response) => {})

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
