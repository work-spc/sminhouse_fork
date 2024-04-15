import first from "../../icons/swiper-main/phone-first.png";
import second from "../../icons/swiper-main/phone-second.png";
import third from "../../icons/swiper-main/phone-third.png";
import first_phone from "../../icons/swiper-main/phone/1.png";
import second_phone from "../../icons/swiper-main/phone/2.png";
import third_phone from "../../icons/swiper-main/phone/3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export function SwiperMain() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        // initialSlide={1}
        // loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full overflow-hidden mb-8 md:mb-0 md:w-2/5 z-10 "
      >
        <SwiperSlide className="md:py-12 flex flex-col SwiperSlide-1 items-center justify-center">
          <img className="hidden md:block px-16" src={second} alt="" />
          <div className="p-4 lock md:hidden flex-grow"></div>
          <img
            className="block md:hidden max-w-[226px]"
            src={first_phone}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="md:py-12 flex flex-col SwiperSlide-2 items-center justify-center">
          <img className="hidden md:block px-16" src={first} alt="" />
          <div className="p-4 lock md:hidden flex-grow"></div>
          <img
            className="block md:hidden max-w-[226px]"
            src={second_phone}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="md:py-12 flex flex-col SwiperSlide-3 items-center justify-center">
          <img className="hidden md:block px-16" src={third} alt="" />
          <div className="p-4 lock md:hidden flex-grow"></div>
          <img
            className="block md:hidden max-w-[226px]"
            src={third_phone}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
