import React from "react";
import RoomListItem from "./RoomListItem";

function RoomList() {
  return (
    <div className="flex flex-col w-full">
      <RoomListItem name="Random chat" users={8349} />
      <RoomListItem name="Introduce yourself" users={293} />
      <RoomListItem name="Valorant" users={2332} />
    </div>
  );
}

export default RoomList;
