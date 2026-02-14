const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Frontend is running");
});

app.listen(8080, () => {
  console.log("Web running on port 8080");
});

