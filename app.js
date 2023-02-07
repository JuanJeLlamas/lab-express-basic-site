const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/work", (req, res) => {
    res.sendFile(__dirname + "/views/work.html");
  });

  app.get("/galery", (req, res) => {
    res.sendFile(__dirname + "/views/galery.html");
  });


app.listen(port, () => {
  console.log("batman returns puerto: " + port);
});
