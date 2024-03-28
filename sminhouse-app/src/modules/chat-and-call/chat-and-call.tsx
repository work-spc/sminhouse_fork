import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import chat from "../../icons/chat-and-call/chat.svg";
import chat_questions from "../../icons/chat-and-call/chat-questions.svg";

import cross from "../../icons/chat-and-call/cross.svg";
import "./style.css";
import { CallButton } from "../../components/call-button/call-button";

export const ChatAndCall: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed z-[999] bottom-16 right-8 md:bottom-24 md:right-14 flex flex-col items-center  ">
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
            <CallButton></CallButton>
            <div className="button-ChatAndCall md:h-16 md:w-16  flex p-[17px] md:p-[19px] cursor-pointer rounded-full bg-white border-[1.5px] border-accent_background ">
              <img className="w-5 md:w-6" src={chat_questions} alt={"чат"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={handleClick}>
        <AnimatePresence>
          <div className="h-16 w-16 flex align-middle content-center items-center justify-center">
            {isVisible ? (
              <motion.div className="h-8 w-8 md:h-9 md:w-9 bg-white flex p-[8px] md:p-[10px] rounded-full border-[1.5px] border-dark_background">
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
              <motion.div className="button-ChatAndCall_main md:h-16 md:w-16 bg-white flex p-[17px] md:p-[19px] rounded-full border-[1.5px] border-accent_background ">
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
