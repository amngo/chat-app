import React, { useEffect, useRef } from "react";
import RoomMessage from "./RoomMessage";
import RoomMessageAdmin from "./RoomMessageAdmin";

interface Props {
  messages: any;
}

function RoomMessages({ messages }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full px-4 pt-4 space-y-6 overflow-y-auto md:px-8 md:pt-8">
      {messages.map((message: any) => {
        if (message.user === "admin")
          return <RoomMessageAdmin text={message.text} key={message.id} />;
        return (
          <RoomMessage
            user={message.user}
            avatar={message.avatar}
            text={message.text}
            timestamp={message.timestamp}
            key={message.id}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default RoomMessages;
