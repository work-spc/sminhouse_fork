import React from "react";
import presentation from "../../../public/альпика.pdf";

export const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const fileName = "альпика.pdf"; // Название вашего файла презентации
    const filePath = presentation;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-accent_background min-h-14 md:min-h-16 text-white w-full  p-0 md:py-4 md:px-10 rounded-lg text-lg md:text-xl active:bg-button_click hover:bg-button_hover duration-300"
      onClick={handleDownload}
    >
      Скачать презентацию
    </button>
  );
};
