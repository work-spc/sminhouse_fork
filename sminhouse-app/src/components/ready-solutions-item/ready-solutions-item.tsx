import React, { forwardRef } from "react";
import "./style.css";
// import { Button } from "../button/button";
import { motion } from "framer-motion";

interface ListWithHeaderProps {
  title?: string;
  items: string[];
  className?: string;
}

export const ReadySolutionsItem: React.FC<ListWithHeaderProps> = forwardRef(
  ({ title, items, className }, ref) => {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="border px-6 pt-6 pb-2 md:pt-8 md:px-8  md:pb-4  grow rounded-2xl border-gray_border bg-white flex flex-col justify-between"
      >
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
        {/* {className ? (
          <div className="mt-2 w-full">
            <Button children="Подробнее"></Button>
          </div>
        ) : (
          <div className="mt-auto w-full">
            <Button children="Подробнее"></Button>
          </div>
        )} */}
      </div>
    );
  }
);

export const MReadySolutionsItem = motion(ReadySolutionsItem);
