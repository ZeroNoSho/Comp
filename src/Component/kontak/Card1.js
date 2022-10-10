import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card1T() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginBottom: "50px", marginTop: "120px" }}>
      <div className="row" data-aos="fade-up">
        <div className="col">
          <div className="card cardHome cardPro1">
            <div className="card-body">
              <h1 className="crd1 card-title card-titleHome12">
                ABC <br /> Digital
              </h1>
              <br />
              <p className="card-text card-textHome">Terima kasih sudah mampir! Jika kamu memiliki pertanyaan seputar ABC Digital, hubungi kami melalui kontak di laman ini.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card cardHome cardPro1">
            <div className="card-body">
              <h1 className="card-title" style={{ fontWeight: "700", fontSize: "20px" }}>
                Kantor Pusat ABC Digital
              </h1>
              <br />
              <p className="card-text card-textHome">
                The City Tower Lantai 11, Jl.
                <br /> M.H. Thamrin No.81,
                <br /> Jakarta Pusat, Indonesia 10310
              </p>
              <div className="d-flex">
                <h4 className="h4-30" >
                  <i className="fa-solid fa-phone-volume"></i>
                </h4>
                <p className="card-text card-textHome">
                  Telepon <br /> (021) 50848010
                </p>
              </div>
              <div className="d-flex">
                <h4 className="h4-30" >
                  <i className="fa-solid fa-envelope"></i>
                </h4>
                <p className="card-text card-textHome">
                  Email <br /> contact.us@Abcdigital.co.id
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Card1T;
