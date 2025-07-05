function rootSocketController(io) {
  io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`${socket.id} joined room ${roomId}`);
    });

    socket.on("leaveRoom", (roomId) => {
      socket.leave(roomId);
      console.log(`${socket.id} left room ${roomId}`);
    });

    socket.on("messageRoom", ({ roomId, message }) => {
      console.log(`${roomId} ${message}`);
      io.to(roomId).emit("receiveMessage", message);
    });

    socket.on("disconnect", () => console.log(`user disconnect ${socket.id}`));
  });
}

export default rootSocketController;
