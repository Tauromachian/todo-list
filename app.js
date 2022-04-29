const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", () => {
  console.log("A user connected");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const { sequelize, Item } = require("./db-connection");

const { route, log } = require("./routes");
route(app, Item);

app.use((req, res) => {
  res.write("Hello there");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  sequelize
    .authenticate()
    .then(() => console.log("Connection started successfully"))
    .catch(() => console.log("There was an error during connection"));
  console.log(`Running on ${port}`);
});
