import React from "react";
import "./style.css";
import { Button } from "../button/button";

interface ListWithHeaderProps {
  title?: string;
  items: string[];
  className?: string;
}

export const ReadySolutionsItem: React.FC<ListWithHeaderProps> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className="border px-6 py-8 md:p-8 grow rounded-2xl border-gray_border bg-white flex flex-col justify-between">
      <div>
        {className ? (
          <p className="font-bold text-22px md:text-2xl  mb-6">{title}</p>
        ) : (
          <p className="font-bold text-22px md:text-2xl  mb-4">{title}</p>
        )}

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
      {className ? (
        <div className="mt-2 w-full">
          <Button children="Подробнее"></Button>
        </div>
      ) : (
        <div className="mt-auto w-full">
          <Button children="Подробнее"></Button>
        </div>
      )}
    </div>
  );
};
