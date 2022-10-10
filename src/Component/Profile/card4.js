import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card4() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }} data-aos="fade-down">
      <h2 className="h1ProfCard3">Struktur Organisasi</h2>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active carousel12" data-bs-interval="10000">
            <img className="carousel13 d-block w-50" style={{ margin: "auto" }} src="https://bcadigital.co.id/_nuxt/img/img-structure-organisasi-04.32c4ff0.png" alt="..." />
          </div>
          <div className="carousel-item carousel12" data-bs-interval="2000">
            <img className="carousel13 d-block w-50" src="https://bcadigital.co.id/_nuxt/img/img-structure-organisasi-01.67f3bc2.png" alt="..." />
          </div>
          <div className="carousel-item carousel12">
            <img className="carousel14 d-block w-50" src="https://bcadigital.co.id/_nuxt/img/img-structure-organisasi-02.e030ea6.png" alt="..." />
          </div>
          <div className="carousel-item carousel12">
            <img className="carousel14 d-block w-50" src="https://bcadigital.co.id/_nuxt/img/img-structure-organisasi-03.32cc141.png" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span style={{ color: "black", fontSize: "20px" }} aria-hidden="true">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span style={{ color: "black", fontSize: "20px" }} aria-hidden="true">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Card4;
