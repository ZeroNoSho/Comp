import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card3() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row cardrow2 cardrowNew">
        <div className="row newHome newHome1">
          <div className="col before1">
            <div>
              <img className="imgHome2 twrimg" src="https://bcadigital.co.id/_nuxt/img/img-gedung-bca.ad547a3.png" alt="" />
            </div>
          </div>
          <div className="col barisHome10" data-aos="fade-down">
            <div className="card cardHome1 cardPro1">
              <div className="card-body">
                <div className="before">
                  <h1 className="card-title card-titleHome3 centerPro">VISI</h1>
                </div>
                <br />
                <p className="card-text card-textHome centerPro">Menjadi bank digital pilihan utama masyarakat</p>
              </div>
              <div className="card-body" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <h1 className="card-title card-titleHome3 centerPro">MISI</h1>
                <br />
                <p className="card-text card-textHome centerPro">
                  • Memahami beragam kebutuhan nasabah dan memberikan layanan finansial yang tepat demi tercapainya kepuasan optimal bagi nasabah, dengan memanfaatkan teknologi tepat guna <br /> <br /> • Memberikan nilai tambah bagi para
                  pemangku kepentingan
                </p>
              </div>
            </div>
          </div>
          <div className="col aft">
            <img className="imgHome2" src="https://bcadigital.co.id/_nuxt/img/img-gedung-bca-mobile.50d6f10.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
