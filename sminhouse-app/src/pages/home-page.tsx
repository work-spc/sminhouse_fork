import React from "react";
import { Navbar } from "../modules/navbar/navbar";
import { TopSection } from "../modules/top-section/top-section";

export const HomePage: React.FC = () => {
  return (
    <div className="font-sans font-medium text-dark_font bg-main_background px-9 py-6 ">
      <Navbar></Navbar>
      <div className="max-w-1368 px-11 m-auto">
        <TopSection></TopSection>
      </div>
    </div>
  );
};
