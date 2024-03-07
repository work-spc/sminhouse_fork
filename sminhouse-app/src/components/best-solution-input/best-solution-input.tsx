import React from "react";

interface UniversalInputProps {
  type: string;
  placeholder: string;
}

const InputBestSolution: React.FC<UniversalInputProps> = ({
  type,
  placeholder,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-white border-opacity-10 bg-gray-100 bg-opacity-10 rounded-md py-2 px-4 w-full text-white leading-tight focus:outline-none focus:bg-opacity-15"
      style={{ caretColor: "white" }}
    />
  );
};

export default InputBestSolution;
