import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "outline";
}

export const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
  if (type === "outline") {
    return (
      <button
        className="border border-accent_border text-light_accent_font py-5 px-10 rounded-xl text-xl"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className="bg-accent_background text-white py-5 px-10 rounded-xl text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
