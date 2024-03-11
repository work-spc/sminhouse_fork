import "./style.css";

import first from "../../icons/system-modules/slide-first.png";
import buttons from "../../icons/system-modules/buttons.png";
import buttons_phone from "../../icons/system-modules/buttons-phone.svg";
// import second from "../../icons/swiper-main/slide-second.png";
// import third from "../../icons/swiper-main/slide-third.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Button } from "../../components/button/button";
import { useEffect, useState } from "react";

export const SystemModules: React.FC = () => {
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
    <div className="m-auto mb-20 md:mb-40 flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">
        <div className="background-img-best-solutions">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 md:mb-9">
            Модули системы
          </h2>
          {isMobile ? (
            <img className="mb-6 w-full" src={buttons_phone} alt="" />
          ) : (
            <img className="mb-6" src={buttons} alt="" />
          )}

          <h3 className=" text-lg md:text-xl mb-6 md:mb-9">
            Идейные соображения высшего порядка, а также новая модель
            организационной деятельности способствует подготовки и реализации
            направлений прогрессивного развития. Равным образом дальнейшее
            развитие различных форм деятельности требуют определения.
          </h3>
          {isMobile ? (
            <></>
          ) : (
            <Button children="Получить консультацию" type="outline"></Button>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full z-10 bg-gray_background  row rounded-2xl "
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src={first} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img src={first} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={first} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {isMobile ? (
        <div className="mt-6 w-full">
          {" "}
          <Button children="Получить консультацию" type="outline"></Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
