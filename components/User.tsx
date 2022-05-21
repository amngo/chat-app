import Image from "next/image";
import React from "react";

interface Props {
  avatar: string;
  user: string;
}

function User({ avatar, user }: Props) {
  return (
    <div className="flex items-center p-4 space-x-4">
      <div className="relative w-12 h-12">
        <Image
          className="duration-300 ease-out"
          layout="fill"
          objectFit="cover"
          src={avatar}
        />
      </div>
      <div className="font-bold">{user}</div>
    </div>
  );
}

export default User;
