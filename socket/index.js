//Connect Socket
const connectSocket = require("../config/socket");

//Sockets
const chatSocket = require("./chatSocket");

const indexSocket = () => {
  connectSocket((socket, io) => {
    chatSocket(socket, io);
  });
};

module.exports = indexSocket;
