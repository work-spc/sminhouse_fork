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
import { SecuritySystems } from "../modules/security-systems/security-systems";
import { ModalWindow } from "../components/modal-window/modal-window";

export const HomePage: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
        <TopSection></TopSection>
        <AutomationProcesses></AutomationProcesses>
        <OurProcess></OurProcess>
        <ReadyMadeSolutions></ReadyMadeSolutions>
        <BestSolution></BestSolution>
        <SystemModules></SystemModules>
        <SecuritySystems></SecuritySystems>
        <OurPartners></OurPartners>
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};
