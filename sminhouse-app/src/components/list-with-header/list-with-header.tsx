import React from "react";
import "./style.css";

interface ListWithHeaderProps {
  title: string; // Пропс для заголовка
  items: string[]; // Пропс для списка
}

export const ListWithHeader: React.FC<ListWithHeaderProps> = ({
  title,
  items,
}) => {
  return (
    <div className="border p-5 grow rounded-2xl border-gray_border bg-white">
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
};
