function userSocketController(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    console.log(token);
    next(new Error("no token"));
  });

  io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);

    socket.on("message", (msg) => {
      io.emit("message", msg);
    });

    socket.on("disconnect", () => console.log(`user disconnect ${socket.id}`));
  });
}

export default userSocketController;
