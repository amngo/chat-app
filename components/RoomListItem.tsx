import React from "react";
import { FaRegUser } from "react-icons/fa";

interface Props {
  name: string;
  users: number;
}

function RoomListItem({ name, users }: Props) {
  return (
    <div className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-base-100">
      <span>{name}</span>
      <span className="flex items-center space-x-2">
        <FaRegUser />
        <span>{users}</span>
      </span>
    </div>
  );
}

export default RoomListItem;
