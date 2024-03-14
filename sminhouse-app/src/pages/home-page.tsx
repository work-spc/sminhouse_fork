import React from "react";
import { Navbar } from "../modules/navbar/navbar";
import { TopSection } from "../modules/top-section/top-section";
import { AutomationProcesses } from "../modules/automation-processes/automation-processes";
import { OurProcess } from "../modules/our-process/our-process";
import { ReadyMadeSolutions } from "../modules/ready-made-solutions/ready-made-solutions";
import { BestSolution } from "../modules/best-solution/best-solution";
import { SystemModules } from "../modules/system-modules/system-modules";
import { OurPartners } from "../modules/our-partners/our-partners";
import { FrequentlyAskedQuestions } from "../modules/frequently-asked-questions/frequently-asked-questions";
import { OtherQuestions } from "../modules/other-questions/other-questions";
import { Footer } from "../modules/footer/footer";

export const HomePage: React.FC = () => {
  return (
    <div className="font-sans font-medium text-dark_font bg-main_background px-5 md:px-9">
      <div className="max-w-1368 p-0 md:px-11 m-auto">
        <Navbar></Navbar>
        <TopSection></TopSection>
        <AutomationProcesses></AutomationProcesses>
        <OurProcess></OurProcess>
        <ReadyMadeSolutions></ReadyMadeSolutions>
        <BestSolution></BestSolution>
        <SystemModules></SystemModules>
        {/* <SecuritySystems></SecuritySystems> */}
        <OurPartners></OurPartners>
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};
