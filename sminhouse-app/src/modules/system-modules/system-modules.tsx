import "./style.css";

import applications from "../../icons/system-modules/slides/applications.png";
import chat from "../../icons/system-modules/slides/chat.png";
import jkh from "../../icons/system-modules/slides/JKH.png";
import notifications from "../../icons/system-modules/slides/notifications.png";
import skud from "../../icons/system-modules/slides/SKUF.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Button } from "../../components/button/button";
import { useEffect, useState } from "react";
import { SystemModulesInfo } from "../../components/system-modules-info/system-modules-info";
import { useDispatch } from "react-redux";
import { openModalWindow } from "../../state/chosen-сomponents/is-open-modal-window";

export const SystemModules: React.FC = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-auto mb-20 md:mb-40 flex flex-wrap gap-x-9 md:flex-nowrap">
      <div className="flex flex-col w-full md:w-1/2">
        <h2 className="md:text-5xl text-3xl font-bold mb-6 md:mb-9">
          Модули системы
        </h2>
        <SystemModulesInfo></SystemModulesInfo>
        <div className="flex-grow min-h-6"></div>
        <div
          onClick={() => dispatch(openModalWindow())}
          className="hidden md:block"
        >
          <Button children="Получить консультацию" type="outline"></Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-6">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full z-10 bg-gray_background  row rounded-2xl hidden md:block"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src={applications} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img src={chat} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={jkh} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={notifications} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={skud} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full z-10 bg-gray_background  row rounded-2xl block md:hidden"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src={applications} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img src={chat} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={jkh} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={notifications} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={skud} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {isMobile ? (
        <div
          onClick={() => dispatch(openModalWindow())}
          className="md:mt-6 w-full"
        >
          <Button children="Получить консультацию" type="outline"></Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
