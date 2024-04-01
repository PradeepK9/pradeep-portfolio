import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import profilePic1 from "../../img/award.png";
import "./Testimonial.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const clients = [
  {
    img: profilePic1,
    review:
      "#SparkleAwardINEG Pradeep Jaiswal Your positive attitude and commitment to excellence have not gone unnoticed, and we are truly grateful to have you as a valuable member of our team.We are confident that your contributions will continue to drive our success in the coming year.",
  },
  {
    img: profilePic1,
    review:
      "#SparkleAward-IN/EG Pradeep JaiswalYour hard work and dedication is sincerely appreciated, Pradeep Jaiswal! Thank you for being an amazing teammate and always working hard to make our team better. We are truly lucky to have you on our side!",
  },
];

const Testimonial = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="awards">
        <span className="heading">Awards</span>
        <br />
        <span className="details">Here are some of my awards : </span>
      </div>
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
        className="mySwiper"
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
