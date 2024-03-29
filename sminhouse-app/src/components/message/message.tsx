import React from "react";

interface MessageProps {
  text: string;
  messageType: "sent" | "received";
  timestamp: string;
}

export const Message: React.FC<MessageProps> = ({
  text,
  messageType,
  timestamp,
}) => {
  const messageStyle =
    messageType === "sent"
      ? "rounded-t-lg rounded-bl-lg bg-[#C4F1F9] border-[1px] border-[#A1ECF9]"
      : "rounded-t-lg rounded-br-lg bg-[#EDF2F7] border-[1px] border-[#E2E8F0]";
  const messageSelf = messageType === "sent" ? "self-end" : "self-start";
  const textStyle = messageType === "sent" ? "" : "";

  return (
    <div className={`mb-3 flex flex-col ${messageSelf}`}>
      <div className={`py-2 px-6 mb-2 max-w-[300px] ${messageStyle}`}>
        <p className={`text-base ${textStyle}`}>{text}</p>
      </div>
      <div
        className={`font-normal ${messageSelf} text-xs text-[#A0AEC0] ${textStyle}`}
      >
        {timestamp}
      </div>
    </div>
  );
};
