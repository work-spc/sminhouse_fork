import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import chat from "../../icons/chat-and-call/chat.svg";
import chat_questions from "../../icons/chat-and-call/chat-questions.svg";
import phone_call from "../../icons/chat-and-call/phone-call.svg";
import cross from "../../icons/chat-and-call/cross.svg";

export const ChatAndCall: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed z-[999] bottom-24 right-14 flex flex-col items-end">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-[2px]"
          >
            <div className="p-[18px] cursor-pointer mb-4 bg-white rounded-full border-2 border-accent_background hover:bg-[#CEF3FB] transition-colors duration-200">
              <img
                className="w-6"
                src={chat_questions}
                alt={"чат"}
                key="chat_questions"
              />
            </div>
            <div className="p-[18px] cursor-pointer rounded-full bg-white border-2 border-accent_background hover:bg-[#CEF3FB] transition-colors duration-200">
              <img
                className="w-6"
                src={phone_call}
                alt={"звоток"}
                key="phone_call"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={handleClick}>
        <AnimatePresence>
          <div className="h-16 w-16 flex align-middle content-center items-center justify-center">
            {isVisible ? (
              <motion.div className="h-9 w-9 bg-white flex p-[10px] rounded-full border-2 border-dark_background">
                <motion.img
                  src={cross}
                  alt="cross"
                  key="cross"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ display: "none", opacity: 0 }}
                />
              </motion.div>
            ) : (
              <motion.div className="h-16 w-16 bg-white flex p-[19px] rounded-full border-2 border-accent_background hover:bg-[#CEF3FB] transition-colors duration-200">
                {" "}
                <motion.img
                  src={chat}
                  alt="chat"
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ display: "none", opacity: 0 }}
                />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </button>
    </div>
  );
};
