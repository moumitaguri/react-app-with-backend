const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("client/build"));

// app.use("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/greet", (req, res) => {
  console.log("url == ", req.url);
  res.send("goood morning");
});

app.post("/addUser", (req, res) => {
  res.send(req.body.username);
});

app.get(/\/increment\/*/, (req, res) => {
  let count = req.url.split("/")[2];
  count++;
  res.send("" + count);
});

module.exports = app;
