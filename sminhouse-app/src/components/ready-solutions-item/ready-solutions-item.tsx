import React from "react";
import "./style.css";
import { Button } from "../button/button";

interface ListWithHeaderProps {
  title: string;
  items: string[];
}

export const ReadySolutionsItem: React.FC<ListWithHeaderProps> = ({
  title,
  items,
}) => {
  return (
    <div className="border p-7 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
      <div>
        <p className="font-bold text-2xl mb-4">{title}</p>
        <ul className="">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-light_dark_font mb-4 text-sm md:text-lg circle-text md:pl-6 pl-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto w-full">
        <Button children="Подробнее"></Button>
      </div>
    </div>
  );
};
