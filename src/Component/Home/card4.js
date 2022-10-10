import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
function Card4() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const nam1 = [
    "BINA NUSANTARA Gandeng BCA Digital untuk Layanan Bank as a Service (BaaS) Pertama di Sektor Pendidikan",
    "Platform Bank Digital blu Berusia Satu Tahun, BCA Digital Tempuh Strategi Bisnis Berbeda dengan Bank Digital Lainnya",
    "Dukung Pemulihan Ekonomi UMKM, BCA Digital Salurkan Kredit Lewat P2P Komunal Indonesia",
    "blu by BCA Digital Resmi Terapkan Layanan BI-Fast, Transfer Antar Bank Hanya Rp2.500",
    "BCA Digital dan Zemangat Jalin Kolaborasi Memperluas Akses Ekosistem Digital Demi Tingkatkan Inklusi untuk Pelaku UKM",
    "Beat the Best by blu, Bawa Pejuang Solo Ranked Mobile Legends Jajal Skena Turnamen Profesional",
    "Pacu Laju Solusi Kerusakan Lingkungan BCA Digital berkolaborasi dengan Greeneration Foundation dan Kitabisa Dalam Inisiatif #blubuatbaik Tuntaskan Masalah Sampah Di Banyuwangi",
    "Kolaborasi Telkomsel redi dan blu by BCA Digital, Integrasikan Layanan Perbankan untuk Akses Keuangan Digital yang Lebih Mudah dan Nyaman",
    "Jenius dari Bank BTPN, blu by BCA Digital, BCA, BNI, dan Twitter Indonesia Kolaborasi Kampanyekan Edukasi Keamanan #DatamuRahasiamu",
    "Kolaborasi dengan Yura Yunita, BCA Digital Tingkatkan Literasi Finansial Millennials Lewat Persembahan bluMusical",
    "Lewat Integrasi Aplikasi blu dan Blibli, BCA Digital Perkuat Ekosistem Digital untuk Indonesia",
    "BCA Digital Resmi Luncurkan Aplikasi ‘blu’, Lengkap dengan Fitur Keuangan Menarik",
  ];
  const foto = [
    "https://bcadigital.co.id/_nuxt/img/binus-x-blu.a070250.png",
    "https://bcadigital.co.id/_nuxt/img/its-bluday.06b83cd.jpg",
    "https://bcadigital.co.id/_nuxt/img/bcadigital-komunal.625ac18.png",
    "https://bcadigital.co.id/_nuxt/img/bcadigital-bifast.4945048.png",
    "https://bcadigital.co.id/_nuxt/img/kolaborasi-zemangat-blu.7d88222.png",
    "https://bcadigital.co.id/_nuxt/img/beatthebest_press.4303473.png",
    "https://bcadigital.co.id/_nuxt/img/blubuatbaik.5a9c0f9.png",
    "https://bcadigital.co.id/_nuxt/img/redixblu.b0f8cf2.jpg",
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu.24c9edd.jpg",
    "https://bcadigital.co.id/_nuxt/img/bluMusical_thumbnail.28c7096.jpg",
    "https://bcadigital.co.id/_nuxt/img/20210723-thumbnail-small.0434f26.jpg",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital-thumbnail-small.6dbeff4.png",
  ];

  return (
    <div className="row">
      <h1 className="card-titleHome3" style={{ marginTop: "50px" }} data-aos="fade-up">
        Press Release
      </h1>
      <div className="d-flex bd-highlight mb-3" data-aos="fade-up">
        <div className="p-2 bd-highlight">
          <button className="btn btnHome3">&laquo;</button>
          <button className="btn btnHome3"> &raquo;</button>
        </div>
        <Link className="uniks ms-auto p-2 bd-highlight link1" style={{ color: "GrayText" }}>
          Lihat semua <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row d-flex">
          <Swiper spaceBetween={0} slidesPerView={0}>
            {foto.map((e, i) => (
              <SwiperSlide key={i}>
                <div key={i} className="card cardHome12">
                  <img src={e} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{nam1[i]}</p>
                    <Link href="#" style={{ color: "GrayText" }}>
                      Baca Article
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Card4;
