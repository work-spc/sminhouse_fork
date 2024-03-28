import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import cross from "../../icons/chat-and-call/cross.svg";
import button_close from "../../icons/modal-window/button-close.svg";
import InputBestSolution from "../../components/best-solution-input/best-solution-input";
import { closeChat } from "../../state/chat-modal-slice/chat-modal-slice";

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
          className="fixed bottom-16 right-8 md:bottom-20 md:right-10 z-[1000] rounded-lg shadow-md"
          style={{ maxWidth: "375px" }} // Изменение максимальной ширины на 375px
        >
          <div className="bg-white p-4 rounded-lg">
            <button onClick={handleClose}>
              <div className="h-8 w-8 md:h-9 md:w-9 bg-white flex p-[8px] md:p-[10px] rounded-full border-[1.5px] border-dark_background">
                <img src={cross} alt="cross" key="cross" />
              </div>
            </button>
            <div className="mb-4">
              <InputBestSolution type="text" placeholder="Имя*" w_full={true} />
              <InputBestSolution type="text" placeholder="Имя*" w_full={true} />
              <InputBestSolution
                type="mail"
                placeholder="E-mail*"
                w_full={true}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
