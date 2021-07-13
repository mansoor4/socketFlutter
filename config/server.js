//Server
const express = require("express"),
  http = require("http");

const app = express();

const server = http.createServer(app);

module.exports = { server, app };
