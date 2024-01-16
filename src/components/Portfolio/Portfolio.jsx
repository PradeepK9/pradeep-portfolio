import React, { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project1 from "../../img/project1.png";
import project2 from "../../img/proj2.png";
import project3 from "../../img/proj3.png";
import project4 from "../../img/proj4.png";
import project5 from "../../img/proj5.png";
import project6 from "../../img/proj6.png";

const Portfolio = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Some of the Recent Personal Projects</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={project5} alt="project5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project6} alt="project6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="project3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="project4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project1} alt="project1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="project2" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Portfolio;
