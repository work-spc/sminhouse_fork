import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute">
      <button onClick={() => swiper.slidePrev()}>FFFFFFFFFFFFFFFFFFFFFF</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
