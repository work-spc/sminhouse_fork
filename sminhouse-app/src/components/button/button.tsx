import { FC, MouseEventHandler } from "react";
import "./style.css";

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "outline";
}

export const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
  if (type === "outline") {
    return (
      <button
        className="border-button-half  border-accent_border text-accent_font w-full md:w-auto p-4 md:py-4 md:px-10 rounded-lg text-xl hover:bg-accent_background hover:bg-opacity-10 active:bg-opacity-30 duration-300"
        // style={{ borderWidth: "1.5px" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className="bg-accent_background md:min-h-16 text-white w-full  p-4 md:py-4 md:px-10 rounded-lg text-xl active:bg-button_click hover:bg-button_hover duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
