import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { closeModalWindow } from "../../state/chosen-сomponents/is-open-modal-window";

import button_close from "../../icons/modal-window/button-close.svg";
import first from "../../icons/modal-window/first.png";
import second from "../../icons/modal-window/second.png";
import InputBestSolution from "../best-solution-input/best-solution-input";

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
          className="fixed inset-0 z-[1000] md:p-5  flex items-end md:items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex bg-dark_background md:bg-gradient-to-r overflow-hidden md:from-dark_gradient_from md:to-dark_gradient_to max-w-1280 rounded-t-2xl md:rounded-2xl shadow-md "
          >
            <div className="px-5 py-11 lg:px-11 lg:py-14 lg:w-1/2">
              <div className="flex">
                <div>
                  <h2 className=" text-white md:text-[46px] text-3xl font-bold mb-6 md:mb-3">
                    Получите демо-версию
                  </h2>
                  <p className="mb-9 text-xl font-medium  text-white  ">
                    Наш менеджер свяжется с вами в ближайшее время для
                    обсуждения подробностей предоставления демо-версии
                  </p>
                </div>
                <div className="lg:hidden">
                  <button className="w-6" onClick={handleClose}>
                    <img className="w-6" src={button_close} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-6 flex-wrap md:flex-nowrap ">
                <InputBestSolution
                  type="text"
                  placeholder="Имя*"
                  w_full={true}
                ></InputBestSolution>
                <InputBestSolution
                  type="mail"
                  placeholder="E-mail*"
                  w_full={true}
                ></InputBestSolution>
                <InputBestSolution
                  type="tel"
                  placeholder="(___) ___-__-__"
                  w_full={true}
                ></InputBestSolution>
                <h3 className="hidden lg:block text-privacy_policy text-sm md:text-lg">
                  Продолжив, вы соглашаетесь с<span> </span>
                  <a className="underline" href="">
                    политикой конфиденциальности
                  </a>
                  <span> </span>
                  ООО “ИНТЕГРОСИСТЕМС”
                </h3>
                <div>
                  <button
                    className="w-full lg:w-auto px-16 min-h-14 md:h-16 text-white  md:py-5 rounded-lg text-lg md:text-xl bg-accent_background active:bg-button_click hover:bg-button_hover duration-300"
                    // onClick={onClick}
                  >
                    <div className="text-lg md:text-xl " style={{}}>
                      Получить демо
                    </div>
                  </button>
                </div>
                <h3 className="block lg:hidden text-privacy_policy text-sm md:text-lg">
                  Продолжив, вы соглашаетесь с<span> </span>
                  <a className="underline" href="">
                    политикой конфиденциальности
                  </a>
                  <span> </span>
                  ООО “ИНТЕГРОСИСТЕМС”
                </h3>
              </div>
            </div>
            <div className="relative w-1/2 hidden lg:flex">
              <button
                className="absolute right-0 bg-white bg-opacity-10 md:mt-6 md:mr-9 p-3 text-white rounded-full"
                onClick={handleClose}
              >
                <img src={button_close} alt="" />
              </button>
              <img
                src={first}
                alt=""
                className="z-10 max-h-[666px] scale-[1.1] translate-x-[30px] translate-y-[100px] w-auto"
              />
              <img
                src={second}
                alt=""
                className="max-h-[666px] scale-[1.1]  translate-x-[-100px] translate-y-[160px]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
