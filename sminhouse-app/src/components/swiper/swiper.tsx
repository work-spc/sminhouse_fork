import first from "../../icons/swiper-main/slide-first.png";
import second from "../../icons/swiper-main/slide-second.png";
import third from "../../icons/swiper-main/slide-third.png";
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
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full md:w-3/5"
      >
        <SwiperSlide>
          <img src={first} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={second} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={third} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
