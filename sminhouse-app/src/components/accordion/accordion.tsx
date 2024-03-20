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
        className="flex items-center justify-between px-6 pt-6 pb-6 cursor-pointer"
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
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "-12px" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden negative-indentation-accordion"
      >
        <div className="">{children}</div>
      </motion.div>
    </div>
  );
};

export const Accordion: React.FC = () => {
  return (
    <div className="space-y-4 md:space-y-6 w-full md:w-5/6">
      <AccordionItem title="Чем Sminhouse отличается от других подобных систем?">
        <p className="accordion-item text-sm md:text-lg px-6 pb-6">
          SminHOUSE отличается комплексным подходом к организации систем
          безопасности. Мы не только продаем программное обеспечение, но и
          тщательно подбираем оборудование, а также осуществляем поддержку при
          его установке.
        </p>
      </AccordionItem>
      <AccordionItem title="Из чего складывается стоимость работы?">
        <p className="accordion-item text-sm md:text-lg px-6 pb-6">
          Стоимость работ по организации системы складывается из стоимости
          оборудования, его установки и настройки, а также программного
          обеспечения и его эксплуатации.
        </p>
      </AccordionItem>
      <AccordionItem title="Если на объекте уже установлена инфраструктура (СКУД и прочее) нужно ли её менять?">
        <p className="accordion-item text-sm md:text-lg px-6 pb-6">
          Если на объекте уже установлена другая инфраструктура (СКУД и т.д.),
          то ее замена может потребоваться только в случае несовместимости с
          современными стандартами безопасности. В остальных случаях интеграция
          возможна, но для этого потребуется API существующей системы.
        </p>
      </AccordionItem>
      <AccordionItem title="В какие сроки вы сможете развернуть CRM-систему?">
        <p className="accordion-item text-sm md:text-lg px-6 pb-6">
          Срок установки и адаптации CRM-системы к требованиям заказчика
          составляет от 1 до 2 месяцев.
        </p>
      </AccordionItem>
      <AccordionItem title="Какие гарантии вы даете?">
        <p className="accordion-item text-sm md:text-lg px-6 pb-6">
          Мы предоставляем гарантию на оборудование на 2 года, а на серверное
          оборудование - на 5 лет. Гарантия на работы составляет 1 год при
          условии надлежащей эксплуатации системы.
        </p>
      </AccordionItem>
    </div>
  );
};
