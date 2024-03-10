import React from "react";
import { Navbar } from "../modules/navbar/navbar";
import { TopSection } from "../modules/top-section/top-section";
import { SwiperMain } from "../components/swiper/swiper";
import { AutomationProcesses } from "../modules/automation-processes/automation-processes";
import { OurProcess } from "../modules/our-process/our-process";
import { ReadyMadeSolutions } from "../modules/ready-made-solutions/ready-made-solutions";
import { BestSolution } from "../modules/best-solution/best-solution";
import { SystemModules } from "../modules/system-modules/system-modules";
import { SecuritySystems } from "../modules/security-systems/security-systems";

export const HomePage: React.FC = () => {
  return (
    <div className="font-sans font-normal text-dark_font bg-main_background px-5 md:px-9 py-6 ">
      {/* <Navbar></Navbar> */}
      <div className="max-w-1368 p-0 md:px-11 m-auto">
        <TopSection></TopSection>
        <AutomationProcesses></AutomationProcesses>
        <OurProcess></OurProcess>
        <ReadyMadeSolutions></ReadyMadeSolutions>
        <BestSolution></BestSolution>
        <SystemModules></SystemModules>
        <SecuritySystems></SecuritySystems>
      </div>
    </div>
  );
};
