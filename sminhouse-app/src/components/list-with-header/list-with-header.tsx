import React, { forwardRef } from "react";
import "./style.css";
import { motion } from "framer-motion";

interface ListWithHeaderProps {
  title: string; // Пропс для заголовка
  items: string[]; // Пропс для списка
}

export const ListWithHeader: React.FC<ListWithHeaderProps> = forwardRef<
  HTMLDivElement,
  ListWithHeaderProps
>(({ title, items }, ref) => {
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="border px-6 pt-6 pb-3 md:px-8 md:pt-8 md:pb-5 grow rounded-2xl border-gray_border bg-white"
    >
      <p className="font-bold text-2xl mb-4">{title}</p>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="text-light_dark_font mb-3 text-sm md:text-lg circle-text md:pl-6 pl-4"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export const MListWithHeader = motion(ListWithHeader);
