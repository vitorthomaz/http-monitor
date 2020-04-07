const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const App = () => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  server.use(routes);

  return server;
};

module.exports = App;
