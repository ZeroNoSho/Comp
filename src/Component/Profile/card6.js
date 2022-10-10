import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card6() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "100px" }} data-aos="fade-down">
      <div className="row" style={{ margin: "auto" }}>
        <h1 className="h413">
          Pimpinan Perusahaan <span className="h312"> <br/> Board of Directors</span>
        </h1>

        <Swiper spaceBetween={0} slidesPerView={0}>
          <SwiperSlide>
            <div style={{ marginRight: "60px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div className="photo" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Lanny_Direktur-utama.a2785d1.png")' }}>
                <div className="name">
                  <h3>Lanny Budiati</h3> <h4>Direktur Utama</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ marginRight: "30px", marginLeft: "30px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div className="photo" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Iman-Santosa_Direktur-IT-operasi.3d5e48d.png")' }}>
                <div className="name">
                  <h3>Iman Sentosa</h3> <h4>Direktur IT &amp; Operasi</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ marginLeft: "60px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div className="photo" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Nugroho_Direktur-Kepatuhan.8df9d16.png")' }}>
                <div className="name">
                  <h3>Nugroho Budiman</h3> <h4>Direktur Kepatuhan</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <h3 className="h312">Board of Commissioners</h3>
        <Swiper spaceBetween={0} slidesPerView={0}>
          <SwiperSlide>
            <div style={{ marginRight: "60px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div
                className="photo"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Theresia-Endang-Ratnawati_Komisaris-Utama.07b99f1.png")' }}
              >
                <div className="name">
                  <h3>Theresia Endang Ratnawati</h3> <h4>Komisaris Utama</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ marginRight: "30px", marginLeft: "30px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div
                className="photo"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Ignatius-Djulianto-Sukardi_Komisaris-Independen.e883aaa.png")' }}
              >
                <div className="name">
                  <h3>Ignatius Djulianto Sukardi</h3> <h4>Komisaris Independen</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ marginLeft: "60px", backgroundColor: "#30ced0", borderRadius: "10px" }}>
              <div
                className="photo"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 55.37% , rgb(41, 41, 41) 100%), url("https://bcadigital.co.id/_nuxt/img/Profile-Sri-Indrajanti-Dewi_Komisaris-Independen.49ccdf4.png")' }}
              >
                <div className="name">
                  <h3>Sri Indrajanti Dewi</h3> <h4>Komisaris Independen</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Card6;
