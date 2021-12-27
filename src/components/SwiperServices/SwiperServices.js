import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper_services.css";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default function SwiperServices() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634342400"
            alt="Swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634342400"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634342400"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634342400"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
