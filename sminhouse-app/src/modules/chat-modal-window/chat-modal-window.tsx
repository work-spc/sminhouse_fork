import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import cross from "../../icons/chat/cross.svg";
import avatars from "../../icons/chat/Avatars.jpg";
import subtract from "../../icons/chat/subtract.svg";
import paperClip from "../../icons/chat/paper-clip.svg";
import { closeChat } from "../../state/chat-modal-slice/chat-modal-slice";
import { Message } from "../../components/message/message";
import { useEffect } from "react";

export const ChatModalWindow = () => {
  const isOpen = useSelector((state: RootState) => state.ChatModal.isOpenChat);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeChat());
  };

  // Добавляем класс overflow-hidden к body только на мобильных устройствах
  useEffect(() => {
    if (isOpen) {
      if (window.innerWidth < 768) {
        // Проверка на мобильное устройство по ширине экрана
        document.body.classList.add("overflow-hidden");
      }
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed w-screen h-[89vh] md:h-auto md:w-[375px] bottom-0 md:bottom-20 md:right-10 z-[1000] shadow-md rounded-2xl border-1 border-gray_border"
        >
          <div className="w-full bg-white rounded-t-2xl md:rounded-2xl border-[1px] border-gray_border flex flex-col h-full">
            <div className="flex justify-between items-center py-4 px-6 border-b-[1px] border-[#E2E8F0]">
              <div className="flex justify-between items-center">
                <img className="mr-4" src={avatars} alt="" />
                <div>
                  <div className="font-bold text-base">Менеджер Александр</div>
                  <div className="font-normal text-xs">в сети</div>
                </div>
              </div>

              <button onClick={handleClose}>
                <div className="h-4 w-4 md:h-4 md:w-4 flex">
                  <img src={cross} alt="cross" key="cross" />
                </div>
              </button>
            </div>

            <div className="flex flex-col bg-[#F7FAFC] px-5 py-6 flex-grow overflow-y-auto">
              <Message
                text="Привет, как дела? Привет, как дела? Привет, как дела?Привет, как дела?"
                messageType="sent"
                timestamp="10:00 AM"
              />
              <Message
                text="Привет! Дела неплохо, спасибо.Привет! Дела неплохо, спасибо. Привет! Дела неплохо, спасибо.Привет! Дела неплохо, спасибо.Привет! Дела неплохо, спасибо."
                messageType="received"
                timestamp="10:01 AM"
              />
            </div>
            <div className="flex justify-between items-center pt-4 pb-6 px-5 border-t-[1px] border-[#E2E8F0]">
              <div className="relative w-full mr-5">
                <input
                  placeholder={"Напишите сообщение..."}
                  className="border border-gray_border bg-white w-full rounded-md py-3 pl-4 pr-12 text-black leading-tight focus:outline-none hover:bg-hover_form focus:bg-hover_form"
                  style={{
                    caretColor: "black",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                />{" "}
                <img
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  src={paperClip}
                  alt=""
                />
              </div>
              <div className="p-3 bg-[#E2E8F0] cursor-pointer rounded-md flex justify-between items-center transition duration-300 ease-in-out hover:bg-[#d4dae2]">
                <img src={subtract} alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
