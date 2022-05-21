import { User } from "./models/user";

const users: User[] = [];

const addUser = (newUser: User) => {
  const name = newUser.name.trim();
  const room = newUser.room.trim();
  const avatar = newUser.avatar.trim();
  const { id } = newUser;

  const existingUser = users.find(
    (user: User) => user.room === room && user.name === name,
  );

  if (!name || !room) return { error: "Username and room are required." };
  if (existingUser) return { error: "Username is taken." };

  const user: User = { id, name, room, avatar };

  users.push(user);

  return { user };
};

const removeUser = (id: string) => {
  const index = users.findIndex((user: User) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
  return null;
};

const getUser = (id: string) => users.find((user: User) => user.id === id);

const getUsersInRoom = (room: any) =>
  users.filter((user: any) => user.room === room);

export { addUser, removeUser, getUser, getUsersInRoom };
