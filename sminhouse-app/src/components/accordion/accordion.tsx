import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import button from "../../icons/accordion/button.svg";
import button_minus from "../../icons/accordion/button-minus.svg";
import "./style.css";
interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white border border-gray_border rounded-2xl mb-2">
      <div
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg md:text-2xl mr-4 font-bold text-dark_font">
          {title}
        </h2>
        {isOpen ? (
          <img
            src={button_minus}
            alt=""
            className={`focus:outline-none transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        ) : (
          <img
            src={button}
            alt=""
            className={`focus:outline-none transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="">{children}</div>
      </motion.div>
    </div>
  );
};

export const Accordion: React.FC = () => {
  return (
    <div className="space-y-6 w-full md:w-5/6">
      <AccordionItem title="Чем Sminhouse отличается от других подобных систем?">
        <p className="accordion-item text-lg px-6 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitw
          wefwf erge egefv serhsdfb sebdb eb dsfb amet, consectetur adir
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </AccordionItem>
      <AccordionItem title="Элемент аккордеона 2">
        <p className="accordion-item text-lg px-6 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </AccordionItem>
      <AccordionItem title="Если на объекте уже установлена инфраструктура (СКУД и прочее) нужно ли её менять?">
        <p className="accordion-item text-lg px-6 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </AccordionItem>
      <AccordionItem title="В какие сроки вы сможете развернуть CRM-систему?">
        <p className="accordion-item text-lg px-6 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </AccordionItem>
      <AccordionItem title="Какие гарантии вы даете?">
        <p className="accordion-item text-lg px-6 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </AccordionItem>
    </div>
  );
};
