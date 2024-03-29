import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import cross from "../../icons/chat/cross.svg";
import avatars from "../../icons/chat/Avatars.jpg";

// import InputBestSolution from "../../components/best-solution-input/best-solution-input";
import { closeChat } from "../../state/chat-modal-slice/chat-modal-slice";
import { Message } from "../../components/message/message";

export const ChatModalWindow = () => {
  const isOpen = useSelector((state: RootState) => state.ChatModal.isOpenChat);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeChat());
    document.body.classList.remove("overflow-hidden"); // Удаление класса для включения прокрутки
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed md:w-[375px] bottom-16 right-8 md:bottom-20 md:right-10 z-[1000] shadow-md rounded-2xl border-1 border-gray_border"
        >
          <div className="w-full bg-white rounded-2xl border-[1px] border-gray_border">
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

            <div className="flex flex-col bg-[#F7FAFC] px-5 py-6">
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
            <div className="flex justify-between items-center py-4 px-6 border-t-[1px] border-[#E2E8F0]">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
