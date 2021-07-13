const express = require("express"),
  cors = require("cors");

//Importing Socket
const indexSocket = require("./socket");

//Server
const { server, app } = require("./config/server.js");

//Sockets
indexSocket();

// Global Middlewares
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});
app.use(cors());

app.use("/", (req, res, next) => {
  return res.json({
    message: "Done",
  });
});

server.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Sever started at PORT 5000`);
  }
});
