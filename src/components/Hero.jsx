// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import house1 from "../assets/house1.jpeg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

import { Navigation } from "swiper";
import style from "./Hero.module.css";

export default function Hero() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwiper(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.heroBox}>
      <div className={style.animationTextHero}>
        <Fade cascade damping={0.9} triggerOnce={true} className="">
          <span className={style.firstWord}>Pinta tu mundo</span>
          <span className={style.secondWord}>Con el color</span>
          <span className={style.thirdWord}>Que siempre soñaste.</span>
        </Fade>
      </div>
      <Fade cascade damping={1.2}>
        {showSwiper && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            <SwiperSlide className={style.swiperSlide}>
              <img className="" src={house1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img className="" src={house3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img className="" src={house4} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img className="" src={house5} alt="" />
            </SwiperSlide>
          </Swiper>
        )}
      </Fade>
    </div>
  );
}
