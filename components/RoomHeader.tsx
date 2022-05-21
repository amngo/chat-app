import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

function RoomHeader({ id }: Props) {
  return (
    <div className="bg-base-200 w-full h-[60px] flex items-center justify-between p-6">
      <h1 className="text-lg text-ellipsis md:text-xl">{id}</h1>
      <div className="flex items-center space-x-2">
        <Link href={`/join/${id}`} passHref>
          <a href="replace" target="_blank">
            <button
              type="button"
              className="btn btn-outline btn-secondary btn-xs md:btn-sm"
            >
              Invite
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default RoomHeader;
