const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const { sequelize, Item } = require("./db-connection");

const { route, log } = require("./routes");
route(app);

app.use((req, res) => {
  res.write("Hello there");
  res.end();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
