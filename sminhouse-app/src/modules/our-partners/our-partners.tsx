import "./style.css";

import InputBestSolution from "../../components/best-solution-input/best-solution-input";
import { Button } from "../../components/button/button";
import first from "../../icons/our-partners/first.png";
import third from "../../icons/our-partners/third.svg";
import second from "../../icons/our-partners/second.svg";
import { OurPartnersItems } from "../../components/our-partners-items/our-partners-items";

export const OurPartners: React.FC = () => {
  return (
    <div className="m-auto mb-20 md:mb-40 text-left md:text-center background-best-solutions row rounded-2xl ">
      <div className="background-img-best-solutions md:px-11 md:py-14 px-5 py-11">
        <h2 className="md:text-center text-white md:text-5xl text-3xl font-bold mb-2 md:mb-3">
          Наши партнеры
        </h2>
        <div className="flex gap-9 justify-between">
          <OurPartnersItems children={first} type="outline"></OurPartnersItems>
          <OurPartnersItems children={second}></OurPartnersItems>
          <OurPartnersItems children={third} type="outline"></OurPartnersItems>
        </div>
      </div>
    </div>
  );
};
