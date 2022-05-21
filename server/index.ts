import dayjs from "dayjs";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { addUser, getUser, getUsersInRoom, removeUser } from "./users";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://chat-app-amngo.vercel.app"],
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room, avatar }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room, avatar });

    if (error) return callback(error);
    if (!user) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      id: uuidv4(),
      user: "admin",
      text: `${user.name} has entered the chat.`,
      timestamp: dayjs().format(),
      avatar: user.avatar,
    });

    socket.to(user.room).emit("message", {
      id: uuidv4(),
      user: "admin",
      text: `${user.name} has entered the chat.`,
      timestamp: dayjs().format(),
      avatar: user.avatar,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    return {};
  });

  socket.on("sendMessage", (message) => {
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        id: uuidv4(),
        user: user.name,
        text: message,
        timestamp: dayjs().format(),
        avatar: user.avatar,
      });
    }
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        id: uuidv4(),
        user: "admin",
        text: `${user.name} has left the chat.`,
        timestamp: dayjs().format(),
        avatar: user.avatar,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
