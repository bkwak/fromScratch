const express = require("express");

const app = express();

app.use(express.static("dist"));

const PORT = 8080;

app.get("/page", (req, res) => {
  console.log("getting info");
  res.send("hello?");
});

app.listen(PORT || 8080, () => console.log(`Listening on ${PORT}`));
