import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gear from "../../icons/system-modules/gear.svg";
import "./style.css";

interface ButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SystemModulesInfo: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [activeButton, setActiveButton] = useState(
    "При необходимости, заявки могут быть созданы жильцами и переданы управляющей компании"
  );
  const [key, setKey] = useState(0);
  const [moduleInDevelopment, setModuleInDevelopment] = useState("");

  const buttonTexts = {
    text1:
      "При необходимости, заявки могут быть созданы жильцами и переданы управляющей компании",
    text2:
      "Позволяет сотрудникам и пользователям системы общаться в режиме реального времени с помощью текстовых сообщений",
    text3:
      "Обеспечивает информирование пользователей и сотрудников УК о важных событиях",
    text4:
      "Обеспечивает учет и контроль потребления ресурсов в жилом комплексе",
    text5: "Обеспечивает безопасность и контроль доступа в жилом комплексе",
    text6:
      "Позволяет контролировать ситуацию в жилом комплексе в режиме реального времени",
    text7:
      "Единая учетная запись для управления объектами в разных жилых комплексах",
  };

  useEffect(() => {
    setDisplayText(activeButton);
  }, [activeButton]);

  const handleButtonClick = (text: string) => {
    if (activeButton !== text) {
      setDisplayText(text);
      setActiveButton(text);
      setKey((prevKey) => prevKey + 1);
    }
  };

  const excludedBlocksRef = useRef<Array<HTMLDivElement | null>>([null, null]);

  const handleGearClick = (moduleName: string) => {
    if (moduleInDevelopment === moduleName) {
      setModuleInDevelopment("");
    } else {
      setModuleInDevelopment(moduleName);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 flex-wrap text-lg">
        <Button
          text={"Заявки"}
          active={activeButton === buttonTexts.text1}
          onClick={() => handleButtonClick(buttonTexts.text1)}
        />
        <Button
          text={"Чат"}
          active={activeButton === buttonTexts.text2}
          onClick={() => handleButtonClick(buttonTexts.text2)}
        />
        <Button
          text={"Уведомления"}
          active={activeButton === buttonTexts.text3}
          onClick={() => handleButtonClick(buttonTexts.text3)}
        />
        <Button
          text={"ЖКХ"}
          active={activeButton === buttonTexts.text4}
          onClick={() => handleButtonClick(buttonTexts.text4)}
        />
        <Button
          text={"СКУД"}
          active={activeButton === buttonTexts.text5}
          onClick={() => handleButtonClick(buttonTexts.text5)}
        />
        <Button
          text={"Видеонаблюдение"}
          active={activeButton === buttonTexts.text6}
          onClick={() => handleButtonClick(buttonTexts.text6)}
        />
        <Button
          text={"Zero"}
          active={activeButton === buttonTexts.text7}
          onClick={() => handleButtonClick(buttonTexts.text7)}
        />
        <OutsideClickTracker onClickOutside={() => setModuleInDevelopment("")}>
          <div className="flex">
            <div
              className="moduleInDevelopment"
              ref={(ref) => (excludedBlocksRef.current[0] = ref)}
            >
              <button className="relative px-9 py-3 rounded-lg button-SystemModulesInfo">
                <img
                  src={gear}
                  alt="Corner Image"
                  className="absolute hidden md:block z-50 top-2 right-2 transform translate-x-1/2 -translate-y-1/2"
                  onClick={() => handleGearClick("Маркетплейс")}
                />
                {moduleInDevelopment === "Маркетплейс" && (
                  <motion.div
                    key={moduleInDevelopment}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    className="absolute moduleInDevelopment bg-white px-9 py-4 border  text-light_dark_font"
                  >
                    Модуль "{moduleInDevelopment}" на данный момент находится в
                    разработке
                  </motion.div>
                )}
                Маркетплейс
              </button>
            </div>

            <div
              className="moduleInDevelopment"
              ref={(ref) => (excludedBlocksRef.current[1] = ref)}
            >
              <button className="relative px-9 py-3 rounded-lg button-SystemModulesInfo">
                <img
                  src={gear}
                  alt="Corner Image"
                  className="absolute hidden md:block z-40 top-2 right-2 transform translate-x-1/2 -translate-y-1/2"
                  onClick={() => handleGearClick("Домофония")}
                />
                {moduleInDevelopment === "Домофония" && (
                  <motion.div
                    key={moduleInDevelopment}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    className="absolute moduleInDevelopment-2 px-9 py-4 bg-white p-4 border text-light_dark_font "
                  >
                    Модуль "{moduleInDevelopment}" на данный момент находится в
                    разработке
                  </motion.div>
                )}
                Домофония
              </button>
            </div>
          </div>
        </OutsideClickTracker>
      </div>
      <motion.div
        key={key}
        initial="hidden"
        animate={displayText ? "visible" : "hidden"}
        variants={variants}
      >
        {displayText && (
          <p className="mt-6 text-lg md:text-xl">{displayText}</p>
        )}
      </motion.div>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ text, active, onClick }) => {
  const buttonClass = active
    ? "px-9 py-3 rounded-lg text-white bg-accent_background transition-all duration-200"
    : "px-9 py-3 rounded-lg bg-gray_background hover:bg-button_modules_info_hover transition-all duration-200";
  return (
    <motion.button
      className={buttonClass}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      disabled={active}
    >
      {text}
    </motion.button>
  );
};

const OutsideClickTracker: React.FC<{ onClickOutside: () => void }> = ({
  children,
  onClickOutside,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutside = !(event.target as HTMLElement).closest(
        ".moduleInDevelopment"
      );
      if (isOutside) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClickOutside]);

  return <>{children}</>;
};
