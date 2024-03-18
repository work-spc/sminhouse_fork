import "./style.css";

import { Button } from "../../components/button/button";
import { OurPartnersItems } from "../../components/our-partners-items/our-partners-items";
import { WhiteInput } from "../../components/white-input/white-input";
import first from "../../icons/our-partners/first.svg";
import third from "../../icons/our-partners/third.svg";
import second from "../../icons/our-partners/second.svg";
import sixth from "../../icons/our-partners/sixth.svg";

import first_mobile from "../../icons/our-partners/mobile/first.svg";
import second_mobile from "../../icons/our-partners/mobile/second.svg";
import third_mobile from "../../icons/our-partners/mobile/third.svg";
import fourth_mobile from "../../icons/our-partners/mobile/fourth.svg";
import fifth_mobile from "../../icons/our-partners/mobile/fifth.svg";
import sixth_mobile from "../../icons/our-partners/mobile/sixth.svg";

export const OurPartners: React.FC = () => {
  return (
    <div
      className="m-auto mb-20 md:mb-40 text-left md:text-center row"
      style={{
        marginRight: "-20px",
        marginLeft: "-20px",
      }}
    >
      <div className="relative z-10 background-best-solutions rounded-2xl md:px-11 md:py-14 px-5 py-11">
        <h2 className="md:text-center text-white md:text-5xl text-3xl font-bold mb-6 md:mb-11">
          Наши партнеры
        </h2>
        <div className="grid-cols-2 hidden md:grid md:grid-cols-3 gap-4 md:gap-9">
          <OurPartnersItems children={first}></OurPartnersItems>
          <OurPartnersItems
            children={second}
            position="upper"
          ></OurPartnersItems>
          <OurPartnersItems children={third}></OurPartnersItems>
          <OurPartnersItems
            children={second}
            position="left"
          ></OurPartnersItems>
          <OurPartnersItems children={first}></OurPartnersItems>
          <OurPartnersItems
            children={sixth}
            position="right"
          ></OurPartnersItems>
        </div>
        <div className="grid-cols-2 grid md:hidden md:grid-cols-3 gap-4 md:gap-9">
          <OurPartnersItems children={first_mobile}></OurPartnersItems>
          <OurPartnersItems children={second_mobile}></OurPartnersItems>
          <OurPartnersItems children={third_mobile}></OurPartnersItems>
          <OurPartnersItems children={fourth_mobile}></OurPartnersItems>
          <OurPartnersItems children={fifth_mobile}></OurPartnersItems>
          <OurPartnersItems children={sixth_mobile}></OurPartnersItems>
        </div>
      </div>
      <div className="flex bg-white justify-between flex-wrap md:flex-wrap px-5 pt-16 pb-11 md:px-11 md:pt-20 md:p-14 z-1 margin-partners text-left border rounded-b-2xl border-dark_background ">
        <div className="w-full md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold mb-3">
            Станьте нашим партнером
          </h2>
          <h3 className=" text-lg md:text-xl mb-9 md:mb-24">
            Для обсуждения подробностей сотрудничества заполните форму обратной
            связи
          </h3>
          <p className="hidden md:block text-privacy_policy text-lg md:text-xl">
            Продолжив, вы соглашаетесь с<span> </span>
            <a className="underline" href="">
              политикой конфиденциальности
            </a>
            <span> </span>
            ООО “ИНТЕГРОСИСТЕМС”
          </p>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap gap-y-6">
          <WhiteInput type="text" placeholder="Имя*"></WhiteInput>
          <WhiteInput type="mail" placeholder="E-mail*"></WhiteInput>
          <WhiteInput type="tel" placeholder="(___) ___-__-__"></WhiteInput>
          <div className="w-full mb-3 md:m-0 flex">
            <div className="w-full md:w-auto ml-auto ">
              <Button children="Стать партнером" />
            </div>
          </div>
          <p className="block md:hidden text-center text-gray_font text-sm md:text-lg">
            Продолжив, вы соглашаетесь с<span> </span>
            <a className="underline" href="">
              политикой конфиденциальности
            </a>
            <span> </span>
            ООО “ИНТЕГРОСИСТЕМС”
          </p>
        </div>
      </div>
    </div>
  );
};
