const fs=require("fs");

const chatSocket = (socket, io) => {
  socket.on("message", (payload) => {
    console.log(paylaod)
  });
};

module.exports = chatSocket;
