import React from "react";

interface Props {
  text: string;
}

function RoomMessageAdmin({ text }: Props) {
  return <div className="font-bold">{text}</div>;
}

export default RoomMessageAdmin;
