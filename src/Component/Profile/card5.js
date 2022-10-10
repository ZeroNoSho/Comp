import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card5() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="container" data-aos="fade-down">
        <div className="row">
          <h1 className="h1ProfCard3">Tim Kami</h1>
          <p className="h1Prof2Card3">
            Ini dia para ‘chef ’ yang selalu semangat bikin kreasi dan inovasi di dapur kami, spesial buat kamu! Tim kami yang berjiwa muda ini datang dari berbagai macam latar belakang industri dan pengalaman. Kami percaya ide-ide segar
            akan banyak berdatangan dari perspektif yang beragam.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <Swiper spaceBetween={0} slidesPerView={0} data-aos="fade-down">
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-01.2db15cb.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-02.458560f.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-03.ebc28c5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-04.83872c0.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-05.8314798.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-06.458f783.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-07.dd47468.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-08.526c9c9.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-09.7f201d2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-10.d9e33a9.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-11.117a826.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bcadigital.co.id/_nuxt/img/img-team-12.66497b0.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>..</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Card5;
