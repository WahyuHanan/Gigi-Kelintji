// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="slider-box" data-aos="zoom-in-up">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" group overflow-hidden">
          <img src="img\img-cake\1.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Chocomond Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\2.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Snow Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\3.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Strawberry Pudding</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\4.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Biscoff Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\5.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Fruits Brownie Pudding</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\6.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Matcha Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\7.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Lychee Mango Pudding</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake/8.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Biscoff Dessert</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake/9.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Pumpkins Dessert</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\10.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Character Pudding</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\11.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Christmas Paris</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\12.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Matcha Berry Dessert</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\13.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Biscoff Soft Cookies</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\14.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Cloud Milkbun</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\15.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Mango Sticky Rice</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\16.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Buko Pandan</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\18.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Snow Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\19.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Fruits Pudding</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\20.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Tiramisu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\21.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Matcha Dessert</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\22.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Berrymuch Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\23.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Fruits Paris Brest</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\24.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Regal Dessert</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\25.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Mango Sagoo</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\26.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Brownies Avocado</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden">
          <img src="img\img-cake\27.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Buko Pandan & Lychee</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden ">
          <img src="img\img-cake\28.jpg" />
          <div className="box w-full h-32 bg-black opacity-70 -translate-y-15 group-hover:-translate-y-25 group-hover:opacity-90 transition ease-in-out duration-300">
            <h1 className="text-xl group-hover:text-3xl/tight group-hover:p-2 text-white p-4 opacity-100">Buko Lychee Berry</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
