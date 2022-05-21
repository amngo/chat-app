import React, { useState } from "react";

interface Props {
  sendMessage: (arg: string) => void;
}

function RoomInput({ sendMessage }: Props) {
  const [value, setValue] = useState("");
  return (
    <div className="bg-base-200 h-[100px] p-6 flex items-center justify-center">
      <input
        type="text"
        value={value}
        placeholder="Type here..."
        className="w-full input"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.trim() !== "") {
            sendMessage(value);
            setValue("");
          }
        }}
      />
    </div>
  );
}

export default RoomInput;
