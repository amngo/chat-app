import React from "react";
import User from "./User";

interface Props {
  users: [any];
}

function UserList({ users }: Props) {
  return (
    <div className="w-[350px] bg-base-300 h-full hidden md:block">
      <h1 className="p-4 text-lg text-center">Users in this room</h1>
      {users.map((user) => (
        <User user={user.name} avatar={user.avatar} key={user.name} />
      ))}
    </div>
  );
}

export default UserList;
