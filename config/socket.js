// Socket Server
const { server } = require("../config/server");

const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

const connectSocket = (cb) => {
  io.on("connection", (socket) => {
    console.log("New user connected");
    // console.log(socket.conn.server.clientsCount);
    cb(socket, io);
  });
};

module.exports = connectSocket;
