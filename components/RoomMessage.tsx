import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import Image from "next/image";
import React from "react";

dayjs.extend(calendar);

interface Props {
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
}

function RoomMessage({ user, text, avatar, timestamp }: Props) {
  return (
    <div className="flex space-x-4">
      <div className="">
        <div className="relative w-10 h-10">
          <Image
            className="duration-300 ease-out"
            layout="fill"
            objectFit="cover"
            src={avatar}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm font-bold">{user}</h2>
          <span className="text-xs">{dayjs(timestamp).calendar()}</span>
        </div>

        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default RoomMessage;
