const chatSocket = (socket, io) => {
  socket.on("connectMessage", (payload) => {
    console.log(payload);
  });
};

module.exports = chatSocket;
