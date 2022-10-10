import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
function Card3G(props) {
  return (
    <div id="gely" className="gely" style={{ backgroundColor: "#f4fbfb" }}>
      <div className="container">
        <div className="row">
          <div className="topbttn">
            <h1 className="card-titleHome3 text-center ">Galeri</h1>
            <p className="w-50s card-textHome text-center">Kumpulan aset visual BCA Digital yang bisa kamu unduh dan gunakan untuk keperluan artikel atau postinganmu</p>
          </div>
        </div>
      </div>
      <Swiper spaceBetween={0} slidesPerView={0}>
        {props.jumlah1.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="card text-white bordernone" style={{ width: "25rem" }}>
              <img src={e} alt="..." />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card3G;
