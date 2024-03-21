import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { closeModalWindow } from "../../state/chosen-сomponents/is-open-modal-window";

import phone from "../../icons/modal-window/Group 427320728.png";

export const ModalWindow = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modalWindow.isOpenModalWindow
  );
  console.log(isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModalWindow());
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex bg-gradient-to-r from-dark_gradient_from to-dark_gradient_to max-w-1280 rounded-2xl shadow-md "
          >
            <div className=" px-11 py-14 w-1/2">
              <h2 className=" text-white md:text-5xl text-3xl font-bold mb-6 md:mb-3">
                Получите демо-версию
              </h2>
              <p className="text-xl font-medium  text-white  ">
                Наш менеджер свяжется с вами в ближайшее время для обсуждения
                подробностей предоставления демо-версии
              </p>
            </div>
            <div className="w-1/2">
              {" "}
              <div>
                <img src={phone} alt="" />
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
