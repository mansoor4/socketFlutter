const chatSocket = (socket, io) => {
  socket.on("message", (payload) => {
    socket.emit("reply", { message: "Bhag bhenke ke ghode" });
  });
};

module.exports = chatSocket;
